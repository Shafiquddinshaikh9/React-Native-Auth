import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import { Button, Divider, TextInput } from "react-native-paper";
import Toast from "react-native-toast-message";
import Animated, {
  SlideInDown,
  SlideInLeft,
  SlideOutDown,
} from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Signup = ({ navigation }) => {
  // const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPaasword] = useState("");

  console.log(name, email, password, cpassword);
  const handleChange = (e) => {};
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    console.log(data.newUser);

    if (data.code == 201) {
      Toast.show({
        type: "success",
        text1: "SUCCESSFULLY",
        text2: data.message,
        visibilityTime: 2000,
      });
      setTimeout(() => {
        navigation.navigate("home");
      }, 2000);
    } else {
      Toast.show({
        type: "error",
        text1: "FAILED TO SIGNUP",
        text2: data.message,
        visibilityTime: 2000,
      });
    }
  };

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
          value={name}
          onChangeText={(text) => setName(text)}
          label="Name"
          mode="outline"
          style={[styles.input, { marginTop: "20px" }]}
        />
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
        <TextInput
          value={cpassword}
          onChangeText={(text) => setCPaasword(text)}
          label="confirm password"
          mode="outline"
          style={styles.input}
        />
        <Button style={styles.btn} mode="contained" onPress={handleSubmit}>
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
      <Toast />
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
    borderRadius: "8px",
  },
});
