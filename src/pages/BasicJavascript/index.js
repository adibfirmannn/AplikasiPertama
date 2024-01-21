import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BasicJavascript = () => {
  //primitive
  const nama = "Adib Firmansyah"; //String
  let usia = 20; //Number
  const apakahLakiLaki = true; //boolean

  //complex
  const hewanPeliharaan = {
    nama: "Miaw",
    jenis: "Kucing",
    usia: 2,
    apakahHewanLokal: true,
    warna: "kuning",
    orangTua: {
      jantan: "king",
      betina: "queen",
    },
  }; //Object

  const sapaOrang = (name, age) => {
    return console.log(`Hello ${name} usia anda ${age}`);
  }; //function

  sapaOrang("Adib", 20);

  const namaOrang = ["Adib", "Firmansyah", "dito", "aditya"];

  typeof namaOrang; //object

  //   if (hewanPeliharaan.nama === "Miaw") {
  //     console.log("hallo Miaw");
  //   } else {
  //     console.log("Hewan Siapa ini?");
  //   }

  const sapaHewan = (objectHewan) => {
    // let hasilSapa = "";
    // if (objectHewan.nama === "Miaw") {
    //   hasilSapa = "Hallo Miaw , Apa Kabar?";
    // } else {
    //   hasilSapa = "ini hewan siapa?";
    // }
    // return hasilSapa;
    return objectHewan.nama === "Miaw" ? "Halo Miaw, apa kabar" : "ini hewan siapa?";
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Belajar Basic Javacript</Text>
      <Text>Nama: {nama}</Text>
      <Text>Age: {usia}</Text>
      <Text>{sapaHewan(hewanPeliharaan)}</Text>
      <Text>{namaOrang[0]}</Text>
      <Text>{namaOrang[1]}</Text>
      <Text>{namaOrang[2]}</Text>
      <Text>=============</Text>
      {namaOrang.map((orang) => (
        <Text>{orang}</Text>
      ))}
    </View>
  );
};

export default BasicJavascript;

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 20 },
  textTitle: { textAlign: "center" },
});
