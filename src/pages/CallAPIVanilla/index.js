import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const CallAPIVanilla = () => {
  useEffect(() => {
    //CALL API Method Get
    // fetch("https://jsonplaceholder.typicode.com/posts/1")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));

    const dataForAPI = {
      name: "morpheus",
      job: "leader",
    };

    console.log("ini data object :", dataForAPI);
    console.log("ini data stringify :", JSON.stringify(dataForAPI));
    fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForAPI),
    })
      .then((response) => response.json())
      .then((json) => console.log("POST response :", json));
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi memanggil API</Text>
    </View>
  );
};

export default CallAPIVanilla;

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 20 },
  textTitle: { textAlign: "center" },
});
