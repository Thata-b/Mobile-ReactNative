import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
 
class App extends Component{
  render(){
 
    let nome = 'Thata';
    let img = 'https://streamingsbrasil.com/wp-content/uploads/2020/09/aggretsuko-4%C2%AA-temporada-netflix.jpg';
    let formacao = 'Cursando "Tecnologia em Sistemas para Internet"';
    let experiencia = 'xxxxx';
    let projeto = 'xxxxxx'; 

    return(
      <View>
        <Text style={{color: '#46295A', fontSize: 35, margin: 35}}>
          Meu Perfil
        </Text>
 
        <Image
          source={{ uri: img }}
          style={{ width: 300, height: 300, margin: 15}}
        />

        <Text style={{ color: '#940099', fontSize: 30, margin: 15}}>
          Dados Pessoais:
        </Text>

        <Text style={{color: '#993399', fontSize: 25, margin: 5}}>{nome}</Text>
 
        <Text style={{ color: '#940099', fontSize: 30, margin: 15}}>
          Formação:
        </Text>
        
        <Text style={{color: '#993399', fontSize: 25, margin: 5}}>{formacao}</Text>

        <Text style={{ color: '#940099', fontSize: 30, margin: 15}}>
          Experiência:
        </Text>
        
        <Text style={{color: '#993399', fontSize: 25, margin: 5}}>{experiencia}</Text>

        <Text style={{ color: '#940099', fontSize: 30, margin: 15}}>
          Projeto:
        </Text>
        
        <Text style={{color: '#993399', fontSize: 25, margin: 5}}>{projeto}</Text>
        </View>
        
    )
  }
}
 
export default App;
