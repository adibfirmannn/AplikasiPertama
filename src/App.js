import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import SampleComponent from "./pages/SampleComponent";
import StylingComponent from "./pages/StylingComponent";
import FlexBox from "./pages/FlexBox";
import Position from "./pages/Position";
import PropsDinamis from "./pages/PropsDinamis";
import StateDinamis from "./pages/StateDinamis";

const App = () => {
  // const [isShow, SetIsShow] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     SetIsShow(false);
  //   }, 6000);
  // }, []);
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingComponent /> */}
        {/* <FlexBox /> */}
        {/* <Position />
        <PropsDinamis /> */}
        <StateDinamis />
      </ScrollView>
    </View>
  );
};

export default App;
