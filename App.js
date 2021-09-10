import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
// <StatusBar style="dark" /> 최상단의 상태바 색상 변경

import Loading from "./Loading";

const App = () => {
  return (
    <>
      <Loading></Loading>
    </>
  );
};

export default App;
