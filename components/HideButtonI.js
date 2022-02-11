import { Text, View, StyleSheet } from "react-native";

const HideButtonI = () => {
  return (
    <View>
      <Text>ios</Text>
      <Text style={styles.buttonPlusStyle}>+</Text>
    </View>
  );
};
export default HideButtonI;
const styles = StyleSheet.create({
  buttonPlusStyle: {
    fontSize: 30
  }
});
