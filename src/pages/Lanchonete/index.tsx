import React from "react";
import { Dimensions, StyleSheet, Text, View, Image } from "react-native";
import topo from "../../../assets/lanconetelogos/topo.png";
import cachorro from "../../../assets/lanconetelogos/cachorro.png";
const width = Dimensions.get("screen").width;
export default function Lanchonete() {
  return (
    <>
      <Image source={topo} style={estilos.topo}></Image>
      <Text style={estilos.titulo}>MENU</Text>
      <View style={estilos.lanchonete}>
        <Text style={estilos.titulodadescricao}>Sobre:</Text>
        <Text style={estilos.descricao}>
          O Menu mais completo de sua região, com as mais completas e saborosas
          opções, Cheio de opções feitas de forma artesanal
        </Text>
        <View style={estilos.lanches}>
          <Image style={estilos.imgCachorro} source={cachorro}></Image>
          <Text style={estilos.preimeiroL}>cachorro-picante</Text>
        </View>
        <Text style={estilos.preco}>R$ 25,00</Text>
      </View>
    </>
  );
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
  lanchonete: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  topo: {
    width: "100%",
    height: (1080 / 1080) * width,
  },
  descricao: {
    color: "#a3a3a3",
    fontStyle: "italic",
  },
  titulodadescricao: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 26,
    width: "100%",
    color: "black",
  },
  imgCachorro: {
    width: 100,
    height: 100,
  },
  lanches: {
    flexDirection: "row",
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center",
    paddingVertical: 12,
  },
  preimeiroL:{
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20
  },
  preco:{
    fontSize: 20,
    lineHeight:42,
    color: "#2a9f85",
    marginTop: 8
  }
});
