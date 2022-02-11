import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";

import { StyleSheet, Text, View, Dimensions } from "react-native";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import SplashScreen from "./components/splahScreen";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  const [showSplah, setShowSplash] = useState(true);
  function splashScreen() {
    setShowSplash(false);
  }
  useEffect(() => {
    setTimeout(() => {
      splashScreen();
    }, 30);
  }, []);

  const [dimensions, setDimensions] = useState({ window, screen });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  });

  return (
    <Wrapper
      style={{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
      }}
    >
      {showSplah ? <SplashScreen /> : <Main />}
    </Wrapper>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(37, 117, 204, 1)"
  }
});
