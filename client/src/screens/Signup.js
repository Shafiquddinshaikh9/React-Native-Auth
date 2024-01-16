import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button, Divider, TextInput } from "react-native-paper";
import Animated, {
  SlideInDown,
  SlideInLeft,
  SlideOutDown,
} from "react-native-reanimated";
const Signup = ({ navigation }) => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <View style={styles.titlecenter}>
          <Text entering={SlideInLeft} style={styles.title}>
            Signup
          </Text>
        </View>
        <Divider style={styles.divider} />
        <TextInput
          label="Name"
          mode="outline"
          style={[styles.input, { marginTop: "20px" }]}
        />
        <TextInput label="Email" mode="outline" style={styles.input} />

        <TextInput label="password" mode="outline" style={styles.input} />
        <TextInput
          label="confirm password"
          mode="outline"
          style={styles.input}
        />
        <Button
          style={styles.btn}
          mode="contained"
          onPress={() => {
            console.log("btn pressed");
          }}
        >
          Signup
        </Button>
        <Button
          style={styles.btn}
          mode="text"
          onPress={() => {
            navigation.navigate("login");
          }}
        >
          Already have an account? Click here to login
        </Button>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "90%",
    borderWidth: "1px",
    padding: "20px",
    borderRadius: "10px",
  },
  input: {
    marginBottom: "20px",
  },
  divider: {
    height: "2px",
    marginTop: "10px",
  },
  title: {
    fontSize: "35px",
    fontStyle: "italic",
    fontWeight: "bold",
  },
  titlecenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    paddingVertical: "10px",
    borderRadius: "10px",
  },
});
