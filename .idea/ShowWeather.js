import React, { useState, useContext, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions
} from "react-native";
import Context from "../Context";
import CurrentTime from "./currentTime";
import axios from "axios";
import { Icon } from "react-native-elements";
import { Image } from "react-native-elements/dist/image/Image";

const ShowWeather = () => {
  const { data } = useContext(Context);
  const { weather } = useContext(Context);
  const { location } = useContext(Context);
  const [showMe, setShowMe] = useState(false);
  const [getCloude, setGetCloude] = useState([]);

  const { temp, humidity, pressure, feels_like } = data;
  // const { description, main, icon } = Weather;
  const getClouds = async e => {
    setLocation(location);
    const request = axios.get(Weather);
    const [response] = await request;
    console.log(response);

    console.log({ data });
    console.log(Weather);
    console.log(getCloude);
    setWeather(response.data.weather);
  };

  useEffect(() => {
    () => {
      weather;
    },
      [];
  });
  console.log(getCloude);
  // console.log(description);
  // console.log(Weather);
  // console.log(main);
  // console.log(icon);
  console.log(data);

  //   if (props.main.temp == String) {
  //     setCalc((props.main.temp = props.data.temp - 32 * (5 / 9)));
  //   }
  //   var temp = props.data.temp;
  //   if (props.data.temp === undefined || Number) {
  //     props.data.temp == props.data.temp - 32 * (5 / 9);
  //     return props.data.temp;
  //   }
  // const [sTemp, setSTemp] = useState(Number);
  // setSTemp(temp - 32 * (5 / 9));
  var height = Dimensions.get("window").height;
  return (
    <View style={{ height: height * 0.6 }}>
      {temp !== undefined && (
        <View style={styles.col}>
          <Text style={styles.locationStyle}>{location}</Text>
          <CurrentTime />

          <View style={styles.row}>
            {/* <Text style={styles.col}> {"The temperature is: "}</Text> */}

            <Text style={styles.temp}>{temp}</Text>
            <Text style={styles.degree}>o</Text>
          </View>
          <View style={styles.feels_like}>
            {/* <Text style={styles.col}> {"The temperature is: "}</Text> */}

            <Text style={styles.feels}>{"Feels like " + feels_like}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.col}>
              <FlatList
                data={weather}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                  <Text>
                    {item.description}
                    {item.icon}
                    {item.main}
                    {item.main == "Clouds" && <Icon name="cloud" />}
                    <Image
                      style={styles.img}
                      source={{
                        uri: `http://openweathermap.org/img/w/${item.icon}.png`
                      }}
                    />
                  </Text>
                )}
              />
            </Text>
          </View>
          {temp <= -2 && <Text>Out Cold</Text>}
          <View style={styles.row}></View>
        </View>
      )}
    </View>
  );
};
export default ShowWeather;
const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 35
  },
  img: {
    height: 50,
    width: 50
  },
  feels_like: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",

    marginLeft: 30,
    marginTop: 5
  },
  col: {
    flex: 1,
    textAlign: "center",
    marginBottom: 40,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "col"
  },
  temp: {
    fontSize: 70
  },
  degree: {
    fontSize: 50,
    marginTop: -30
  },
  feels: {
    fontSize: 20
  },
  locationStyle: {
    fontSize: 34,
    marginBottom: 0,
    ustifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  }
});
