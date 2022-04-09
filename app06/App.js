import React, { Component } from 'react';
import { View, Text, Pressable, Image} from 'react-native';
import { styles } from './styles'; 

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      numero: '',
    };
       
    this.descobrir = this.descobrir.bind(this);
  }


  descobrir(){
 

    this.setState({numero: 'Seu número é: '});
 
  }



  

  render(){

    let img = 'https://m.media-amazon.com/images/I/41hDGkEtsNL._SL500_.jpg';

    return(
      <View style={styles.container}>

      <Text style={styles.titulo}>
        Jogo do número aleatório
       </Text>

       <Image 
          style={styles.imagem}
          source={{ uri: img }}
        />
    
 
      <Text style={styles.texto}>
        Pense em um número de 0 a 10
      </Text>

      <br></br>
      <br></br>

      <Text style={styles.texto}> {this.state.numero} </Text>
   
      <br></br>
      <br></br>
      
      <Pressable 
      style={styles.botao}
      onPress={this.descobrir}>
        <Text 
        style={styles.textBotao}>Descobrir</Text> 
      </Pressable>
 
      </View>
    );
  }
}
 


 
export default App;

  
 