import React, { useContext } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList
} from "react-native";
import Context from "../Context";
import Raining from "./Raining";
import Main from "./Main";
export default function Header(props) {
  const { weather } = useContext(Context);
  const { searchShow } = useContext(Context);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {!searchShow && (
          <FlatList
            data={weather}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={styles.headerHeight}>
                {item.description == "scattered clouds" && (
                  <Image
                    style={styles.imageCloudNSun}
                    source={require("../assets/cloudyWithSun.png")}
                  />
                )}
                {item.description == "few clouds" && (
                  <Image
                    style={styles.imageCloudNSun}
                    source={require("../assets/cloudyWithSun.png")}
                  />
                )}

                {item.description == "overcast clouds" && (
                  <Image
                    style={styles.imageCloudy}
                    source={require("../assets/cloudy.png")}
                  />
                )}
                {item.description == "broken clouds" && (
                  <Image
                    style={styles.imageCloudy}
                    source={require("../assets/cloudy.png")}
                  />
                )}
                {item.description == "clear sky" && (
                  <Image
                    style={styles.imageCloudy}
                    source={require("../assets/sun.png")}
                  />
                )}
                {item.main == "rain" && (
                  <Image
                    style={styles.imageCloudy}
                    source={require("../assets/cloudy.png")}
                  />
                )}
                {item.main == "rain" && <Raining />}
              </View>
            )}
          />
        )}
        {/* <View>
          <Image
            style={styles.imageCloudy}
            source={require("../assets/cloudy.png")}
          />
        </View>
        <Raining /> */}
      </View>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(37, 117, 204, 1)"
  },

  imageContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  headerHeight: {
    height: 205
  },
  imageCloudNSun: {
    width: 424,
    height: 205
  },
  imageCloudy: {
    width: 354,
    height: 185
  },
  imageCloudyBroken: {
    width: 354,
    height: 185,
    color: "slight dark"
  }
});
