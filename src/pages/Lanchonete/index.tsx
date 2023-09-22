import React from "react";
import { StyleSheet, View} from "react-native";

import Topo from './componets/Topo';
import Detalhes from './componets/Detalhes';

export default function Lanchonete() {
  return (
    <>
  
      <Topo/>
      <View style={estilos.lanchonete}>
        <Detalhes/>
      </View>
    </>
  );
}
const estilos = StyleSheet.create({
 
  lanchonete: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  }

 
});
