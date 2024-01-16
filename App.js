import React, { Component } from "react";
import { Image, Text, TextInput, View, StyleSheet } from "react-native";
import laptop from "./laptop.jpg";

const App = () => {
  return <StylingReact />;
};

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

const SampleComponent = () => {
  return (
    <View>
      <View style={{ width: 80, height: 80, backgroundColor: "blue" }} />
      <Text>Adib</Text>
      <Text>Firmansyah</Text>
      <Ganteng />
      <Photo />
      <TextInput style={{ borderWidth: 1 }} />
      <BoxBlue />
      <Profile />
    </View>
  );
};

const Ganteng = () => {
  return <Text>Ganteng Banget</Text>;
};

const Photo = () => {
  return <Image source={{ uri: "https://source.unsplash.com/1200x400?programmer" }} style={{ width: 100, height: 100 }} />;
};

class BoxBlue extends Component {
  render() {
    return <Text>ini class component</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image source={{ uri: "https://source.unsplash.com/1200x400?animal" }} style={{ height: 100, width: 100, borderRadius: 20 }} />
        <Text style={{ color: "red" }}>Ini Hewan</Text>
      </View>
    );
  }
}

export default App;
