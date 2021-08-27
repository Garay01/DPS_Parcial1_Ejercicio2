import React from "react";
import { View, Button, Text, StyleSheet, ScrollView } from "react-native";
import palette from "../utils/colors";

export default function Result({ result, setResult }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>resumen</Text>
      <View style={styles.item}>
        <Text style={{ color: palette.secondary }}>Cantidad solicitada:</Text>
        <Text style={styles.bold}>{result.quantity}</Text>
      </View>
      <View style={styles.item}>
        <Text style={{ color: palette.secondary }}>Tamaño:</Text>
        <Text style={styles.bold}>{`(${result?.size?.label ?? "null"}) - $${
          result?.size?.value ?? "null"
        }`}</Text>
      </View>
      <View style={styles.item}>
        <Text style={{ color: palette.secondary }}>Tipo de café:</Text>
        <Text style={styles.bold}>{`(${
          result?.speciality?.label ?? "null"
        }) - $${result?.speciality?.value ?? "null"}`}</Text>
      </View>
      <View style={styles.item}>
        <Text style={{ color: palette.secondary }}>Tipo de pago:</Text>
        <Text style={styles.bold}>{`(${
          result.method ? "Efectivo" : "Tarjeta"
        })`}</Text>
      </View>
      <View style={styles.item}>
        <Text style={{ color: palette.secondary }}>Descuento:</Text>
        <Text style={styles.bold}>{`(${result.method ? "15%" : "5%"}) - $${
          Math.round(
            result.quantity *
              (result.speciality.value + result.size.value) *
              (result.method ? 0.15 : 0.05) *
              100
          ) / 100
        }`}</Text>
      </View>
      <View style={styles.item}>
        <Text style={{ color: palette.secondary }}>Total a Pagar:</Text>
        <Text style={styles.bold}>
          $
          {Math.round(
            result.quantity *
              (result.speciality.value + result.size.value) *
              (1 - (result.method ? 0.15 : 0.05)) *
              100
          ) / 100}
        </Text>
      </View>
      <View
        style={{
          paddingBottom: 20,
          marginTop: 20,
          marginBottom: 20,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 1 }}>
          <Button
            title="Actualizar"
            onPress={() => setResult({ data: false })}
          />
        </View>
        <View style={{ width: 10 }} />
        <View style={{ flex: 1 }}>
          <Button
            title="Finalizar"
            color="#F35369"
            onPress={() => setResult({})}
          />
        </View>
      </View>
    </ScrollView>
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
    color: palette.secondary,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "space-between",
  },
  bold: {
    fontWeight: "bold",
    color: palette.primary,
  },
});
