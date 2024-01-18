import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import github from "../../assets/image/github.png";

class FlexBox extends Component {
  render() {
    return (
      <View>
        <View style={{ flexDirection: "row", backgroundColor: "#c8d6e5", alignItems: "center", justifyContent: "space-between" }}>
          <View style={{ backgroundColor: "#ee5253", width: 50, height: 50 }}></View>
          <View style={{ backgroundColor: "#feca57", width: 50, height: 50 }}></View>
          <View style={{ backgroundColor: "#1dd1a1", width: 50, height: 50 }}></View>
          <View style={{ backgroundColor: "#5f27cd", width: 50, height: 50 }}></View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Image source={github} style={{ width: 50, height: 50, borderRadius: 30 }} />
          <View style={{ justifyContent: "center", marginLeft: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Muhammad Adib Firmansyah</Text>
            <Text>Full Stack Developer</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20 }}>
          <Text>Home</Text>
          <Text>About</Text>
          <Text>Project</Text>
          <Text>Setting</Text>
        </View>
      </View>
    );
  }
}

export default FlexBox;
