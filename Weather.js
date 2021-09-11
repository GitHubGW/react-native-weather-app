import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "react-native";

const Weather = ({ temp }) => {
  console.log("zz", temp);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Weather</Text>
      <Text>{temp}</Text>
    </View>
  );
};

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "blue",
  },
});

export default Weather;
