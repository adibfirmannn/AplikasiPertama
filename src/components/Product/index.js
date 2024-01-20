import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import laptop from "../../assets/image/laptop.jpg";

const Product = (props) => {
  return (
    <View style={styles.wrapper}>
      <Image source={laptop} style={styles.imageProduct} />
      <Text style={styles.productName}>New Laptop 2023</Text>
      <Text style={styles.productPrice}>Rp. 10.200.000.00</Text>
      <Text style={styles.location}>Sidoarjo</Text>
      <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>BELI</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  wrapper: { padding: 12, backgroundColor: "#F2F2F2", width: 212, borderRadius: 8 },
  imageProduct: { width: 188, height: 107, borderRadius: 8 },
  productName: { fontSize: 14, fontWeight: "bold", marginTop: 16 },
  productPrice: { fontSize: 14, fontWeight: "bold", color: "#F2994A", marginTop: 12 },
  location: { fontSize: 12, fontWeight: "500", marginTop: 12 },
  buttonWrapper: { backgroundColor: "#6FCF97", paddingVertical: 6, borderRadius: 25, marginTop: 20 },
  buttonText: { fontSize: 14, fontWeight: "800", color: "white", textAlign: "center" },
});
