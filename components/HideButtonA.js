import { Text, View, StyleSheet } from "react-native";

const HideButtonA = () => {
  return (
    <View>
      <Text>android</Text>
      <Text style={styles.buttonPlusStyle}>+</Text>
    </View>
  );
};
export default HideButtonA;
const styles = StyleSheet.create({
  buttonPlusStyle: {
    marginLeft: 15,
    fontSize: 30
  }
});
