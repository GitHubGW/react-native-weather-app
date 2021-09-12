import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";

const Loading = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Feather name="loader" size={40} color="black" />
      <Text style={styles.text}>Loading..</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6e58d",
  },
  text: {
    fontSize: 18,
    color: "black",
    marginTop: 5,
  },
});

export default Loading;
