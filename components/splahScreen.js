import React, { useState, useContext, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  Button
} from "react-native";

const SplashScreen = ({ ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 48, color: "white" }}>Here's weather</Text>
      <Image style={styles.image} source={require("../assets/shining.png")} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: 500
  },
  image: {
    width: 354,
    height: 486
  }
});
