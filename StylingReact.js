import React from "react";
import { Image, Text, TextInput, View, StyleSheet, ScrollView } from "react-native";
import laptop from "./laptop.jpg";

const StylingReact = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View style={{ width: 100, height: 100, backgroundColor: "blue", borderWidth: 2, borderColor: "red", marginTop: 20, marginLeft: 20 }} />
      <View style={{ padding: 12, backgroundColor: "#F2F2F2", width: 212, borderRadius: 8 }}>
        <Image source={laptop} style={{ width: 188, height: 107, borderRadius: 8 }} />
        <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 16 }}>New Laptop 2023</Text>
        <Text style={{ fontSize: 14, fontWeight: "bold", color: "#F2994A", marginTop: 12 }}>Rp. 10.200.000.00</Text>
        <Text style={{ fontSize: 12, fontWeight: "500", marginTop: 12 }}>Sidoarjo</Text>
        <View style={{ backgroundColor: "#6FCF97", paddingVertical: 6, borderRadius: 25, marginTop: 20 }}>
          <Text style={{ fontSize: 14, fontWeight: "800", color: "white", textAlign: "center" }}>BELI</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
    marginLeft: 20,
    marginTop: 40,
  },
});

export default StylingReact;
