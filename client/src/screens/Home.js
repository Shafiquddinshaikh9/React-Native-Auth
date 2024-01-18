import { View, Text } from "react-native";
import React, { useEffect } from "react";

const Home = ({ navigation }) => {
  useEffect(() => {
    const user = localStorage.getItem("userID");
    if (!user) {
      navigation.navogate("login");
    }
  });
  return (
    <View>
      <Text>{user.name}</Text>
    </View>
  );
};

export default Home;
