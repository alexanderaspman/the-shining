import React, { useState, useContext, useMemo, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  Button,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Icon } from "react-native-elements";

// The container
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Header from "./Header";
import Content from "./Content";
import ShowWeather from "./ShowWeather";
import Search from "./search";
import CurrentTime from "./currentTime";
import Context from "../Context";
import WeatherSearch from "./SearchWeather";
export default function Main(prop) {
  const [searchShow, setSearchShow] = useState(true);
  const [city, setCity] = useState(null);
  let description;
  let array2;
  const [weather, setWeather] = useState([]);
  // const location = useContext(LocationUppTree);
  const [location, setLocation] = useState(null);
  const [data, setData] = useState([]);
  // const value = useMemo(() => ({ location, setLocation }), [location]);
  const [getWant, setwant] = useState([]);

  const saveData = async () => {
    try {
      await AsyncStorage.clear();
      await AsyncStorage.setItem("@SETTINGS", JSON.stringify(getWant));
      console.log(getWant);
      alert("Data successfully saved");
    } catch (e) {
      alert("Failed to save the data to the storage");
    }
  };

  const readData = async () => {
    try {
      const userData = await AsyncStorage.getItem("@SETTINGS");
      const userData2 = JSON.parse(userData);
      if (userData2 !== null) {
        console.log(userData2);
        setwant(userData2);
      }
    } catch (e) {
      alert("Failed to fetch the data from storage");
    }
  };
  useEffect(() => {
    readData();
  }, []);

  const GetWeather = async e => {
    const API_KEY = "461ce09e2491b41f399f0cfc60cdf581";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
    const request = axios.get(url);
    const response = await request;
    console.log(response);

    console.log({ data });
    console.log({ weather });
    console.log(response);
    setSearchShow(false);
    setWeather(response.data.weather);
    console.log({ weather });

    setData(response.data.main);
  };

  function handleSubmit(e) {
    if (location !== null) {
      setSearchShow(false);
    }
    setwant(location);
    saveData(location);
    GetWeather();
  }
  function buttonFunction() {
    readData();
    setSearchShow(true);
    console.log(getWant);
  }

  // _storeData = async () => {
  //   try {
  //     await AsyncStorage.setItem("@Settings", "I like to save it.");
  //   } catch (error) {
  //     // Error saving data
  //   }
  // };
  // _retrieveData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("settings");
  //     if (value !== null) {
  //       // We have data!!
  //       console.log(value);
  //     }
  //   } catch (error) {
  //     // Error retrieving data
  //   }
  // };
  return (
    <View style={styles.container}>
      <Content>
        <Context.Provider
          value={{
            GetWeather: GetWeather,
            data: data,
            weather: weather,
            location: location,
            searchShow: searchShow
            // setLocation: setLocation
            // value: value
          }}
        >
          <Header />
          {!searchShow && <ShowWeather data={data} />}{" "}
          {!searchShow && (
            <TouchableOpacity
              style={styles.roundButton1}
              onPress={() => buttonFunction()}
            >
              <Text style={styles.buttonPlusStyle}>+</Text>
            </TouchableOpacity>
          )}
          <Text>This is main</Text>
          {searchShow && (
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>Type in a location</Text>

              <View style={styles.searchSection}>
                <TextInput
                  style={styles.input}
                  placeholder="Search Weather"
                  defaultValue={setwant}
                  onChangeText={text => {
                    setLocation(text);
                  }}
                  underlineColorAndroid="transparent"
                />
                <TouchableOpacity
                  style={styles.searchIcon}
                  onPress={handleSubmit}
                >
                  <Icon name="search" />
                </TouchableOpacity>
                {
                  // // buttonStyle={{
                  // //   borderColor: "rgba(78, 116, 289, 1)"
                  // // }}
                  // // type="outline"
                  // // raised
                  // // titleStyle={{ color: "rgba(78, 116, 289, 1)" }}
                  // // containerStyle={{
                  // //   width: 200,
                  // //   marginHorizontal: 50,
                  // //   marginVertical: 10
                  // // }}
                  // onPress={handleSubmit}
                  // />
                  /* </View>
             
                <TextInput
                  style={styles.textInput}
                  onChangeText={city => setCity(city)}
                  defaultValue={city}
                  placeholder="search weather"
                  maxLength={20}
                  underlineColorAndroid="transparent"
                />
              </View>
              <Button
                title="search"
                onPress={() => {
                  handleSubmit();
                }}
                type="outline"
                raised
                titleStyle={{ color: "rgba(78, 116, 289, 1)" }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10
                }}
              ></Button> */
                }
                {/* <WeatherSearch /> */}

                {/* <TextInput
                style={styles.input}
                placeholder="Search Weather"
                defaultValue={city}
                onChangeText={city => {
                  setCity(city);
                }}
                underlineColorAndroid="transparent"
              />
              <Button
                style={{ backgroundColor: "blue", color: "blue" }}
                onPress={handleSubmit}
                name="ios-search"
                title="search"
                size={20}
                color="#000"
              /> */}
              </View>
              <CurrentTime Interval={10} style={{ fontSize: 1 }} />
            </View>
          )}
          {/* location !== null && */}
          {}
        </Context.Provider>

        <Text>
          {getWant}
          {location}
        </Text>
      </Content>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(37, 117, 204, 1)"
  },
  textInput: {
    borderColor: "#CCCCCC",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    backgroundColor: "#fff",

    marginBottom: 20
  },
  inputText: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 20,
    paddingTop: 10
  },
  inputContainer: {
    marginHorizontal: 30,
    height: 45
  },
  searchSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "start",
    backgroundColor: "#fff",
    marginBottom: 100,
    height: 45
  },
  searchIcon: {
    padding: 10,
    height: 45,

    backgroundColor: "#fff"
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 0,
    paddingBottom: 10,
    paddingLeft: 10,
    height: 45,
    backgroundColor: "#fff",
    color: "#424242"
  },
  roundButton1: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#E45197",
    marginBottom: 60
  },
  buttonPlusStyle: {
    fontSize: 30
  }
});
