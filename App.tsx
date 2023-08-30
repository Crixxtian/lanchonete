import{View, StatusBar, SafeAreaView} from 'react-native';
import Lanchonete from './src/pages/Lanchonete';


export default function App(){

  return(
    <SafeAreaView>
      <StatusBar/>
      <Lanchonete></Lanchonete>
      
    </SafeAreaView>
  );
}
