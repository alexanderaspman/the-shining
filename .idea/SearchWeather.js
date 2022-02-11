import React, {
  useContext,
  useState,
  useEffect,
  createContext,
  useMemo
} from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  ScrollView,
  Icon
} from "react-native";
import LocationUppTree from "./LocationUppTree";
import Main from "./Main";
import Context from "../Context";

const WeatherSearch = () => {
  const { GetWeather } = useContext(Context);
  const [location, setLocation] = useState(null);

  const [city, setCity] = useState("");
  // const value = useContext(Context);
  const handleText = e => {
    setLocation(text);
  };
  const HandleSubmit = e => {
    console.log(location);
    setLocation(location);
    GetWeather;
  };
  return (
    <ScrollView>
      {/* <LocationUppTree.Provider value={{ location: location }}> */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={location => {
            setLocation(location);
          }}
          defaultValue={location}
          placeholder="search weather"
          maxLength={20}
        />
      </View>
      <Button title="search" onPress={HandleSubmit}></Button>
      <Main location={location} />
      {/* </LocationUppTree.Provider> */}
    </ScrollView>
  );
};

export default WeatherSearch;

const styles = StyleSheet.create({
  inputContainer: {
    paddingTop: 15
  },
  textInput: {
    borderColor: "#CCCCCC",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
  }
});
