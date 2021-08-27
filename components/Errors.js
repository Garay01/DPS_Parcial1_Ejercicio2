import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Errors({ errors }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario incompleto!</Text>
      {errors.map((err, i) => (
        <View key={i} style={styles.item}>
          <Text style={styles.bold}>(x)</Text>
          <Text style={{ color: "#F35369" }}>{err}</Text>
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginTop: 20,
    height: 10,
  },
  title: {
    fontSize: 20,
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "100",
    color: "#F35369",
  },
  item: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  bold: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#F35369",
    paddingRight: 5,
  },
});
