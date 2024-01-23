import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const CallAPIVanilla = () => {
  const [dataUser, setDataUser] = useState({
    avatar: "",
    email: "",
    first_name: "",
    last_name: "",
  });

  const [user, setUser] = useState({
    name: "",
    job: "",
  });
  useEffect(() => {
    //CALL API Method Get
    // fetch("https://jsonplaceholder.typicode.com/posts/1")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    //CALL API Method POST
    // const dataForAPI = {
    //   name: "morpheus",
    //   job: "leader",
    // };
    // console.log("ini data object :", dataForAPI);
    // console.log("ini data stringify :", JSON.stringify(dataForAPI));
    // fetch("https://reqres.in/api/users", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(dataForAPI),
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log("POST response :", json));
  }, []);

  const getData = () => {
    fetch("https://reqres.in/api/users/2")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDataUser(json.data);
      });
  };

  const postData = () => {
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
      .then((json) => {
        console.log("POST response :", json);
        setUser(json);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi memanggil API</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text>Get Response Data</Text>
      <Image source={{ uri: dataUser.avatar }} style={styles.avatar} />
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <View style={styles.line} />
      <Button title="POST DATA" onPress={postData} />
      <Text>{user.name}</Text>
      <Text>{user.job}</Text>
    </View>
  );
};

export default CallAPIVanilla;

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 20 },
  textTitle: { textAlign: "center" },
  line: {
    height: 2,
    backgroundColor: "black",
    marginVertical: 20,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
});
