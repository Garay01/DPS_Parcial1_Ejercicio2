import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import palette from "../utils/colors";
import { Picker } from "@react-native-picker/picker";
import InputSpinner from "react-native-input-spinner";
import parseErrorStack from "react-native/Libraries/Core/Devtools/parseErrorStack";

const sizes = [
  {
    label: "Short (8 onz)",
    value: 1,
    key: 0,
  },
  {
    label: "Tall (12 onz)",
    value: 1.5,
    key: 1,
  },
  {
    label: "Grande (16 onz)",
    value: 2,
    key: 2,
  },
];
const types = [
  {
    label: "Mocha",
    value: 2,
    key: 0,
  },
  {
    label: "Te chai",
    value: 2.5,
    key: 1,
  },
  {
    label: "Americano",
    value: 1.5,
    key: 2,
  },
  {
    label: "Frapper",
    value: 3,
    key: 3,
  },
];
export default function Header({ result, setResult, setErrors }) {
  const [details, setDetails] = useState({ quantity: 1 });
  const validForm = useCallback(() => {
    const errors = [];
    !details.hasOwnProperty("size") && errors.push("Seleccione un tamaño");
    !details.hasOwnProperty("speciality") &&
      errors.push("Seleccione un tipo de café");
    !details.hasOwnProperty("method") &&
      errors.push("Seleccione un método de pago");
    setErrors(errors);
    return !errors.length;
  });
  useEffect(() => {
    if (result.hasOwnProperty("data"))
      !result.data && validForm() ? setResult({ ...details }) : setResult({});
    else if (!Object.keys(result).length) setDetails({ quantity: 1 });
  }, [result]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>StarBosco APP</Text>
      <View style={styles.form}>
        <View style={styles.input}>
          <Picker
            style={{ color: palette.secondary }}
            selectedValue={details?.size?.value ?? ""}
            dropdownIconColor={palette.secondary}
            onValueChange={(_, i) =>
              setDetails((det) => ({ ...det, size: sizes[i - 1] }))
            }
          >
            <Picker.Item label={"Seleccione un tamaño"} value="" />
            {sizes.map((sz, i) => (
              <Picker.Item key={i} label={sz.label} value={sz.value} />
            ))}
          </Picker>
        </View>
        <View style={styles.input}>
          <Picker
            style={{ color: palette.secondary }}
            selectedValue={details?.speciality?.value ?? ""}
            dropdownIconColor={palette.secondary}
            onValueChange={(_, i) =>
              setDetails((det) => ({ ...det, speciality: types[i - 1] }))
            }
          >
            <Picker.Item label={"Seleccione tipo de café"} value="" />
            {types.map((tp, i) => (
              <Picker.Item
                key={i}
                label={tp.label}
                value={tp.value}
              ></Picker.Item>
            ))}
          </Picker>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ ...styles.input, flex: 1 }}>
            <Picker
              style={{ color: palette.secondary }}
              selectedValue={details?.method ?? null}
              dropdownIconColor={palette.secondary}
              onValueChange={(val) =>
                setDetails((det) => ({ ...det, method: val }))
              }
            >
              <Picker.Item label="Forma de pago" value="" />
              <Picker.Item label="Tarjeta" value={0} />
              <Picker.Item label="Efectivo" value={1} />
            </Picker>
          </View>
          <View style={{ width: 10 }} />
          <View style={{ ...styles.input, flex: 1 }}>
            <InputSpinner
              style={{ paddingLeft: 10, paddingRight: 10 }}
              height={25}
              buttonFontSize={16}
              min={1}
              step={1}
              colorMax={palette.secondary}
              colorMin={palette.secondary}
              buttonStyle={{ backgroundColor: palette.secondary }}
              value={details.quantity}
              onChange={(num) => setDetails((dt) => ({ ...dt, quantity: num }))}
            ></InputSpinner>
          </View>
        </View>
        <Text style={{ color: palette.secondary }}>
          {/* {JSON.stringify(details ?? { hola: "defecto" })}{" "} */}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: palette.ligth1,
    width: "100%",
    borderBottomLeftRadius: 75,
    borderBottomRightRadius: 75,
    paddingTop: 50,
    paddingBottom: 50,
  },
  text: {
    color: palette.ligth2,
    fontSize: 30,
  },
  form: {
    width: "80%",
    paddingTop: 20,
  },
  input: {
    width: "100%",
    color: palette.secondary,
    backgroundColor: "#8dd2bb",
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
  },
});
