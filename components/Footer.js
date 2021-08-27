import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import palette from "../utils/colors";

export default function Footer({ setResult }) {
  return (
    <View style={style.container}>
      <Button
        color={palette.secondary}
        title="Calcular"
        onPress={() => setResult({ data: false })}
      />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    position: "absolute",
    paddingBottom: 50,
    bottom: 0,
  },
});
