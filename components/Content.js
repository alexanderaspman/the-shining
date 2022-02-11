import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const Content = props => {
  return <View>{props.children}</View>;
};
export default Content;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(37, 117, 204, 1)"
  }
});
