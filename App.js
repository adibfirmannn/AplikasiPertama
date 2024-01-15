import React from "react";
import { Image, Text, TextInput, View } from "react-native";

const App = () => {
  return (
    <View>
      <View style={{ width: 80, height: 80, backgroundColor: "blue" }} />
      <Text>Adib</Text>
      <Text>Firmansyah</Text>
      <Ganteng />
      <Photo />
      <TextInput style={{ borderWidth: 1 }} />
    </View>
  );
};

const Ganteng = () => {
  return <Text>Ganteng Banget</Text>;
};

const Photo = () => {
  return <Image source={{ uri: "https://source.unsplash.com/1200x400?programmer" }} style={{ width: 100, height: 100 }} />;
};

export default App;
