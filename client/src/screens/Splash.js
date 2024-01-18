import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("signup");
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Splash screen</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "white",
    fontSize: 30,
    fontStyle: "italic",
  },
});
