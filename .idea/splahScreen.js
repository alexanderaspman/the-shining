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
import PropTypes from "prop-types";

const SplashScreen = ({ ...props }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/cityapp.png")} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(37, 117, 204, 1)"
  },
  image: {
    width: 324,
    height: 626
  }
});
