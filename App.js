import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Location from "expo-location";
import Loading from "./Loading";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "ff26d804d0d9d838fc3e57227eed4bcc";
const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [temp, setTemp] = useState(0);

  const getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
      },
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    setTemp(temp);
  };

  const handleLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setError("위치 접근 권한이 거부되었습니다.");
        Alert.alert("위치 접근 권한이 거부되었습니다.");
        return;
      } else {
        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync();
        getWeather(latitude, longitude);
        setError("");
      }
    } catch (error) {
      console.log(error);
      setError("위치 접근 권한을 얻을 수 없습니다.");
      Alert.alert("위치 접근 권한을 얻을 수 없습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleLocation();
  }, []);

  return (
    <>
      {loading ? <Loading></Loading> : <Weather temp={Math.round(temp)}></Weather>}
      {/* 최상단의 상태바 색상 변경 */}
      <StatusBar style="dark" />
    </>
  );
};

export default App;
