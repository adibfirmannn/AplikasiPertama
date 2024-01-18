import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import keranjang from "../../assets/icons/shopping-cart.png";

const Position = () => {
  return (
    <View style={styles.container}>
      <Text>Materi Absolute</Text>
      <View style={styles.cartWrapper}>
        <Image source={keranjang} style={styles.iconCart} />
        <Text style={styles.notif}>10</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  );
};

export default Position;

const styles = StyleSheet.create({
  container: { marginTop: 50, alignItems: "center" },
  cartWrapper: { borderWidth: 1, borderColor: "#4398D1", width: 92, height: 93, borderRadius: 93 / 2, justifyContent: "center", alignItems: "center", position: "relative", marginTop: 50 },
  iconCart: { width: 50, height: 50 },
  text: { fontSize: 12, color: "#777777", fontWeight: "700", marginTop: 8 },
  notif: { fontSize: 12, color: "white", backgroundColor: "#6FCF97", padding: 4, borderRadius: 25, width: 24, height: 24, position: "absolute", top: 0, right: 0 },
});
