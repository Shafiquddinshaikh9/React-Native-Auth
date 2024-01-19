import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Divider, TextInput } from "react-native-paper";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Animated, {
  SlideInDown,
  SlideInLeft,
  SlideOutDown,
} from "react-native-reanimated";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    console.log(email, password);
    e.preventDefault();
    const res = await fetch("http://10.0.2.2:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (data.code == 200) {
      AsyncStorage.setItem("token", data.token);

      Toast.show({
        type: "success",
        text1: "LOGIN SUCCESSFULLY",
        text2: data.message,
        visibilityTime: 2000,
      });
      setTimeout(() => {
        navigation.navigate("home");
      }, 2000);
    } else {
      Toast.show({
        type: "error",
        text1: "FAILED TO LOGIN",
        text2: data.message,
        visibilityTime: 2000,
      });
    }
  };
  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <View style={styles.titlecenter}>
          <Text style={styles.title}>Login</Text>
        </View>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          label="Email"
          mode="outline"
          style={styles.input}
        />

        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          label="password"
          mode="outline"
          style={styles.input}
        />
        <Button style={styles.btn} mode="contained" onPress={handleSubmit}>
          Login
        </Button>
        <Button
          style={styles.btn}
          mode="text"
          onPress={() => {
            navigation.navigate("signup");
          }}
        >
          Don't have an account? Click here to signup
        </Button>
      </View>
      <Toast />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "90%",
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
  },
  input: {
    marginBottom: 20,
  },

  title: {
    fontSize: 35,
    fontStyle: "italic",
    marginBottom: 16,
    fontWeight: "bold",
  },
  titlecenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    borderRadius: 10,
    paddingVertical: 8,
  },
});
