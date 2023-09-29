import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import cachorro from "../../../../assets/lanconetelogos/cachorro.png";

type Props={
  
  titulodadescricao: string,
  descricao: string,
  primeiroL: string,
  preco:string
}

export default function Detalhes({titulodadescricao, descricao, primeiroL, preco}: Props){
    return<><Text style={estilos.titulodadescricao}>{titulodadescricao}</Text>
    <Text style={estilos.descricao}>
      {descricao}
    </Text>
    <View style={estilos.lanches}>
      <Image style={estilos.imgCachorro} source={cachorro}></Image>
      <Text style={estilos.preimeiroL}>{primeiroL}</Text>
    </View>
    <Text style={estilos.preco}>{preco}</Text></>
}
const estilos = StyleSheet.create({
    
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
    },
    preimeiroL:{
      fontSize: 18,
      fontWeight: "bold",
      marginLeft: 20
    },
    preco:{
      fontSize: 20,
      lineHeight: 20,
      color: "#2a9f85",
      display: "flex",
      alignItems:"center",
      textAlign:"right",
    
    }
  });
  