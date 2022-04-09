import React, { Component } from 'react';
import { View, Text, Pressable} from 'react-native';
import { styles } from './styles'; 
 
class App extends Component{
  clicou(){
    
  }

  clicoudois(){
    
  }
 
  render(){
    return(
      <View style={styles.container}>
 
      <Text style={styles.titulo}>
       Contador de pessoas   
       </Text>

      <Pressable 
      style={styles.botao} 
      onPress={() => this.clicou()}>
            <Text style={styles.textoBotao}>+</Text>
      </Pressable>

      <Pressable 
      style={styles.botaodois} 
      onPress={() => this.clicoudois()}>
            <Text style={styles.textoBotao}>-</Text>
      </Pressable>
 
      </View>
    );
  }
}
 




 
export default App;
