import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Coba from "../../assets/svg/coba.svg";

const ReactNativeSvg = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Svg</Text>
      <Coba height={230} width={120} />
    </View>
  );
};

export default ReactNativeSvg;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
  },
  textTitle: {
    textAlign: "center",
  },
});
