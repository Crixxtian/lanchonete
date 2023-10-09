import React from "react";
import { StyleSheet, View} from "react-native";

import Topo from './componets/Topo';
import Detalhes from './componets/Detalhes';
import lanchonete from "../../mocks/lanchonete";

export default function Lanchonete() {
  return (
    <>
  
      <Topo titulo={lanchonete.topo.titulo}/>
      <View style={estilos.lanchonete}>
        <Detalhes titulodadescricao={lanchonete.detalhe.titulodadescricao}
                  descricao={lanchonete.detalhe.descricao}
                  primeiroL={lanchonete.detalhe.primeiroL}
                  preco={lanchonete.detalhe.preco}
                  />
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
