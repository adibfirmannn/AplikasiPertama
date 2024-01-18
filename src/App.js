import React from "react";
import { View, ScrollView } from "react-native";
import SampleComponent from "./pages/SampleComponent";
import StylingComponent from "./pages/StylingComponent";
import FlexBox from "./pages/FlexBox";
import Position from "./pages/Position";

const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StylingComponent />
        <FlexBox />
        <Position />
      </ScrollView>
    </View>
  );
};

export default App;
