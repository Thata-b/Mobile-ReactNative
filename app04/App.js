import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, Image} from 'react-native';
import { styles } from './styles'; 

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      numero: '',
      input1: '',
      input2: ''
    };
       
    this.verificar = this.verificar.bind(this);
  }


  verificar(){
    if (this.state.input1 === ''){
      alert('Por favor, digite o preço do álcool!')
      return;
    }

    if (this.state.input2 === ''){
      alert('Por favor, digite o preço da gasolina!')
      return;
    }

    this.setState({numero: 'Resultado: '+ ((this.state.input1)/100)/((this.state.input2)/100)});
  }
 

  

  render(){

    let img = 'https://i1.wp.com/veiculosnaweb.com.br/wp-content/uploads/2019/07/gasolina-alcool-min-1.jpg?fit=772%2C323&ssl=1';

    return(
      <View style={styles.container}>

      <Text style={styles.titulo}>
        Álcool ou Gasolina
       </Text>

       <Image 
          style={styles.imagem}
          source={{ uri: img }}
        />
    
 
      <TextInput
      style={styles.input}
      placeholder="Preço do álcool "
      onChangeText={ (texto1) => this.setState({input1: texto1})}
      />


      <TextInput
      style={styles.input}
      placeholder="Preço da gasolina "
      onChangeText={ (texto2) => this.setState({input2: texto2})}
      />
 
      <Pressable 
      style={styles.botao}
      onPress={this.verificar}>
        <Text 
        style={styles.textBotao}>Verificar</Text> 
      </Pressable>
 
      <Text style={styles.texto}> {this.state.numero} </Text>
      </View>
    );
  }
}
 


 
export default App;
