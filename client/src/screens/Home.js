import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const Home = ({ navigation }) => {
  const [user, setUser] = useState([]);
  const getData = async () => {
    const token = await AsyncStorage.getItem("token");
    console.log(token);

    const res = await axios.post("http://10.0.2.2:8000/home", { token });
    const { data } = await res;

    setUser(data);
  };
  // s1@gmail.com
  useEffect(() => {
    getData();
    // return () => {
    //   // getData();
    // };
  }, []);
  return (
    <View style={styles.maincontainer}>
      {!user ? (
        <Text>Guest</Text>
      ) : (
        <View>
          <Text style={styles.title}>WELCOME TO HOME</Text>
          <Text style={styles.title}>{user.data.name}</Text>
          <Text style={styles.title}>{user.data.email}</Text>
        </View>
      )}
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: "800",
  },
});
