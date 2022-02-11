import React, { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  ScrollView,
  Icon,
  ImageBackground
} from "react-native";
import Main from "./Main";
import Context from "../Context";

const Search = props => {
  const [text, setText] = useState("");
  const [location, setLocation] = useState(null);
  const handleSubmit = () => {
    setLocation(text);
  };
  return (
    <View style={styles.searchSection}>
      <ImageBackground
        source={require("../assets/image.png")}
        resizeMode="cover"
      >
        <TextInput
          style={styles.input}
          placeholder="Search Weather"
          defaultValue={text}
          onChangeText={text => {
            setText(text);
          }}
          underlineColorAndroid="transparent"
        />
        {/* <Image style={styles.image} source={require("../assets/image.png")} /> */}
        <Button
          title="Search"
          buttonStyle={{
            borderColor: "rgba(78, 116, 289, 1)"
          }}
          type="outline"
          raised
          titleStyle={{ color: "rgba(78, 116, 289, 1)" }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10
          }}
        />
      </ImageBackground>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  searchIcon: {
    padding: 10
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242"
  }
});
