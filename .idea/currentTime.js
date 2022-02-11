import React, { useState, useEffect, useContext } from "react";

import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import Context from "../Context";
const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState("");
  const { searchShow } = useContext(Context);
  const [FontSize, setFontSize] = useState(48);
  // if (showSearch == false) {
  //   setFontSize(20);
  // }

  useEffect(() => {
    setInterval(() => {
      var hours = new Date().getHours(); //Current Hours
      var min = new Date().getMinutes(); //Current Minutes

      setCurrentTime(hours + " : " + min);
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.clockContainer}>
        <Text
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: searchShow ? 48 : 20
          }}
        >
          {currentTime}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  clockContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 10
  },
  textStyle: {
    textAlign: "center",
    color: "#fff"
  }
});

export default CurrentTime;
