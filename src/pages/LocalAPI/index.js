import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert } from "react-native";

const Item = ({ name, email, bidang, onPress, onDelete }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image source={{ uri: `https://source.unsplash.com/100x100?${bidang}` }} style={styles.avatar} />
      </TouchableOpacity>
      <View style={styles.desc}>
        <Text style={styles.descName}>{name}</Text>
        <Text style={styles.descEmail}>{email}</Text>
        <Text style={styles.descBidang}>{bidang}</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.delete} onPress={onDelete}>
          X
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const LocalAPI = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bidang, setBidang] = useState("");
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState("Simpan");
  const [selectId, SetSelectId] = useState();

  // aplikasi dibuka langsung memanggil function getData
  useEffect(() => {
    getData();
  }, []);

  const submit = () => {
    const data = {
      name,
      email,
      bidang,
    };
    if (button === "Simpan") {
      axios.post("http://192.168.43.237:3000/users", data).then((res) => {
        console.log("res ", res);
        setName("");
        setEmail("");
        setBidang("");
        getData();
      });
    } else {
      axios.put(`http://192.168.43.237:3000/users/${selectId}`, data).then((res) => {
        console.log("res ", res);
        setName("");
        setEmail("");
        setBidang("");
        getData();
        setButton("Simpan");
      });
    }
  };

  const getData = () => {
    axios.get("http://192.168.43.237:3000/users").then((res) => {
      console.log("res ", res);
      setUsers(res.data);
    });
  };

  const deleteData = (data) => {
    // SetSelectId(data.id);
    axios.delete(`http://192.168.43.237:3000/users/${data.id}`).then((res) => {
      console.log("res ", res);
      getData();
    });
  };

  const selectItem = (item) => {
    console.log("select item ", item);
    SetSelectId(item.id);
    setName(item.name);
    setEmail(item.email);
    setBidang(item.bidang);
    setButton("Update");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Local API JSON Server</Text>
      <Text>Masukkan Anggota Adib Coding</Text>
      <TextInput placeholder="Nama Lengkap" style={styles.input} value={name} onChangeText={(value) => setName(value)} />
      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={(value) => setEmail(value)} />
      <TextInput placeholder="Bidang" style={styles.input} value={bidang} onChangeText={(value) => setBidang(value)} />
      <Button title={button} onPress={submit} />
      <View style={styles.line} />
      {users.map((user) => {
        return (
          <Item
            key={user.id}
            name={user.name}
            email={user.email}
            bidang={user.bidang}
            onPress={() => selectItem(user)}
            onDelete={() =>
              Alert.alert("Peringatan", "Anda Yakin Ingin Menghapus User Ini?", [
                { text: "Tidak", onPress: console.log("button tidak") },
                { text: "Ya", onPress: () => deleteData(user) },
              ])
            }
          />
        );
      })}
    </View>
  );
};

export default LocalAPI;

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 20 },
  textTitle: { textAlign: "center" },
  line: {
    height: 2,
    backgroundColor: "black",
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 25,
    paddingHorizontal: 18,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  itemContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  desc: {
    marginLeft: 18,
    flex: 1,
  },
  descName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  descEmail: {
    fontSize: 16,
  },
  descBidang: {
    fontSize: 12,
    marginTop: 8,
  },
  delete: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
});
