import React from "react";
import { View, ScrollView } from "react-native";
import SampleComponent from "./SampleComponent";
import StylingReact from "./StylingReact";
import Flexbox from "./Flexbox";

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingReact /> */}
        <Flexbox />
      </ScrollView>
    </View>
  );
};

export default App;
