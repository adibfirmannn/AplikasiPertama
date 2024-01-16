import React from "react";
import { View, ScrollView } from "react-native";
import SampleComponent from "./SampleComponent";
import StylingReact from "./StylingReact";

const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StylingReact />;
      </ScrollView>
    </View>
  );
};

export default App;
