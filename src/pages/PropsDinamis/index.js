import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const Story = (props) => {
  return (
    <View style={{ alignItems: "center", marginHorizontal: 20, marginTop: 50 }}>
      <Image source={{ uri: props.gambar }} style={{ width: 50, height: 50, borderRadius: 50 / 2 }} />
      <Text style={{ maxWidth: 60, textAlign: "center" }}>{props.judul}</Text>
    </View>
  );
};
const PropsDinamis = () => {
  return (
    <View>
      <ScrollView horizontal>
        <View style={{ flexDirection: "row" }}>
          <Story judul="miyamoto musashi" gambar="https://e0.pxfuel.com/wallpapers/300/995/desktop-wallpaper-miyamoto-musashi-vagabond-thumbnail.jpg" />
          <Story judul="Alexander Agung" gambar="https://static.promediateknologi.id/crop/0x0:0x0/x/photo/p2/106/2023/07/31/Alexander-the-Great-3-3159014578.jpg" />
          <Story judul="Socrates" gambar="https://cdn.pixabay.com/photo/2023/01/23/13/59/socrates-7738773_960_720.jpg" />
          <Story judul="Marcus Aurelius" gambar="https://hips.hearstapps.com/hmg-prod/images/marcus-aurelius-gettyimages-122316830.jpg?resize=1200:*" />
          <Story
            judul="Epictetus"
            gambar="https://neural.love/cdn/thumbnails/1ee40fcc-f5b0-699e-92c7-2d82d98f6286/134679e6-1dc3-53e9-b63c-f79e9f926ad9.webp?Expires=1709251199&Signature=zcZqXi0VBkUy-iIkkmZ~hnZx55lb944Id5CNVpBDoYVXNxT5-OoUNUBFo15~myX45FFM6CAwPvd3jc6ONQ4L1PRsoAvX8LFHYaR6fLjesUCzjnoS4Isv8w1P0KJZIzLzjpnW47-vMsxPO7KN2Dpm76fNdSVDUdzFG-y2pqhISEHr80EfTo1xN4uhWdH0nljhHkFxEtJ~1bOsLnDq2ENtGLeu3P2m1DZ~M2jHXt2789sG8LtxxUn9Sr6fsZ67pSdv-trsgCfIX18jM6mJfDZm6ViEr8SKRKwAbiwsB2glLGZ5yXsuustfCUUW-xbRQGliVdH8MCemuscTgeNmfd~wog__&Key-Pair-Id=K2RFTOXRBNSROX"
          />

          <Story
            judul="Seneca"
            gambar="https://img.freepik.com/premium-photo/white-gypsum-copy-ancient-statue-lucius-seneca-head-artists-dark-textured-background-seneca-4-bc-65-ad-roman-stoic-philosopher-statesman-tutor-future-emperor-nero_155402-2682.jpg"
          />
          <Story judul="Zeno" gambar="https://e1.pxfuel.com/desktop-wallpaper/109/940/desktop-wallpaper-the-illustration-zeno-sama-fighter-with-the-tags-action-medibangpaint-manga-zeno-dragon-%E2%80%A6-dragon-ball-z-zeno-thumbnail.jpg" />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({});
