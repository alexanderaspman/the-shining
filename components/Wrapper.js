import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
const Wrapper = props => {
  return (
    <View
      style={{
        backgroundColor: "rgba(37, 117, 204, 1)",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
      }}
    >
      {props.children}
    </View>
  );
};
export default Wrapper;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(37, 117, 204, 1)",
    color: "#fff"
  }
});
