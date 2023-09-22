import React from "react";
import { Dimensions, StyleSheet, Text, View, Image } from "react-native";
import topo from "../../../../assets/lanconetelogos/topo.png";
const width = Dimensions.get("screen").width;

export default function Topo(){
    return <>
    <Image source={topo} style={estilos.topo}></Image>
      <Text style={estilos.titulo}>MENU</Text>
    
    </>
}
const estilos = StyleSheet.create({
    titulo: {
      fontSize: 24,
      fontWeight: "bold",
      fontStyle: "italic",
      lineHeight: 26,
      width: "100%",
      textAlign: "center",
      color: "white",
      position: "absolute",
      padding: 16,
    },
    
    topo: {
      width: "100%",
      height: (1080 / 1080) * width,
    }
  });