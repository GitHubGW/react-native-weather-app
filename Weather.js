import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import weatherObject from "./weatherObject";

const Weather = ({ weatherData }) => {
  const { weather, main, wind, sys, name } = weatherData;

  const sunriseHour = new Date(sys.sunrise).getHours();
  const sunriseMinute = new Date(sys.sunrise).getMinutes();
  const sunsetHour = new Date(sys.sunset).getHours();
  const sunsetMinute = new Date(sys.sunset).getMinutes();

  return (
    <LinearGradient style={styles.container} colors={weatherObject[weather[0]?.main].gradient}>
      <StatusBar style="light" />
      <View style={styles.weatherContainer}>
        <Text style={styles.city}>{name && name}</Text>
        <Text style={styles.text}>{weatherObject[weather[0]?.main].title}</Text>
        <MaterialCommunityIcons name={weatherObject[weather[0]?.main].iconName} size={140} color="white" />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.temp}>{main.feels_like && Math.round(main.feels_like)}°</Text>
        <Text style={styles.temp_minmax}>
          최고: {main.temp_max && Math.round(main.temp_max)}° / 최저: {main.temp_min && Math.round(main.temp_min)}°
        </Text>
        <Text style={styles.humidity}>습도: {main.humidity && main.humidity}%</Text>
        <Text style={styles.wind}>풍속: {wind.speed && Math.round(wind.speed)}m/s</Text>
      </View>
    </LinearGradient>
  );
};

Weather.propTypes = {
  weatherData: PropTypes.shape({
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        main: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
      })
    ).isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      feels_like: PropTypes.number.isRequired,
      temp_min: PropTypes.number.isRequired,
      temp_max: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
      deg: PropTypes.number.isRequired,
    }).isRequired,
    sys: PropTypes.shape({
      country: PropTypes.string.isRequired,
      sunrise: PropTypes.number.isRequired,
      sunset: PropTypes.number.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
  }),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  weatherContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  infoContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 15,
  },
  city: {
    fontSize: 30,
    color: "white",
    marginBottom: 25,
  },
  text: {
    fontSize: 40,
    color: "white",
    marginBottom: 10,
  },
  temp: {
    fontSize: 50,
    fontWeight: "400",
    color: "white",
  },
  temp_minmax: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
    marginTop: 10,
    marginBottom: 10,
  },
  humidity: {
    fontSize: 16,
    color: "white",
    marginTop: 5,
    marginBottom: 3,
  },
  wind: {
    fontSize: 16,
    color: "white",
    marginBottom: 13,
  },
});

export default Weather;
