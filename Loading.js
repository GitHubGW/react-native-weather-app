import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "dodgerblue",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 100,
    backgroundColor: "#f6e58d",
  },
  text: {
    fontSize: 30,
    color: "black",
  },
});

export default Loading;
