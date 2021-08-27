import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Header from "./components/Header";
import { StyleSheet, Text, View } from "react-native";
import Footer from "./components/Footer";
import Result from "./components/Result";
import Errors from "./components/Errors";

export default function App() {
  const [result, setResult] = useState({});
  const [errors, setErrors] = useState([]);
  return (
    <View style={styles.container}>
      <Header {...{ result, setResult, setErrors, errors }} />
      <StatusBar style="auto" />
      {Object.keys(result).length > 1 ? (
        <Result {...{ result, setResult }} />
      ) : (
        <></>
      )}
      {Object.keys(errors).length ? <Errors {...{ errors }} /> : <></>}
      {!Object.keys(result).length ? <Footer setResult={setResult} /> : <></>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
