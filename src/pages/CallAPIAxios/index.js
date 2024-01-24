import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const CallAPIAxios = () => {
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

  const getData = () => {
    axios
      .get("https://reqres.in/api/users/3")
      .then((result) => {
        setDataUser(result.data.data);
      })
      .catch((err) => console.log("err", err));
  };

  const postData = () => {
    const dataForAPI = {
      name: "morpheus",
      job: "leader",
    };

    axios
      .post("https://reqres.in/api/users", dataForAPI)
      .then((result) => {
        setUser(result.data);
      })
      .catch((err) => console.log("err ", err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi memanggil API menggunakan Axios</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text>Get Response Data</Text>
      {dataUser.avatar.length > 0 && <Image source={{ uri: dataUser.avatar }} style={styles.avatar} />}

      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <View style={styles.line} />
      <Button title="POST DATA" onPress={postData} />
      <Text>{user.name}</Text>
      <Text>{user.job}</Text>
    </View>
  );
};

export default CallAPIAxios;

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
