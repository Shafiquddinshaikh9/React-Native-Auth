import { View, Text } from "react-native";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ navigation }) => {
  async function getData() {
    const token = await AsyncStorage.getItem("token");
    console.log(token);
    const res = await fetch("http://10.0.2.2:8000/home", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <Text>HOME</Text>
    </View>
  );
};

export default Home;
