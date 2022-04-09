import React, { Component } from 'react';
import { View, Text, TextInput, Pressable} from 'react-native';
import { styles } from './styles'; 

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      numero: '',
      input1: '',
      input2: ''
    };
    
    this.calcular = this.calcular.bind(this);
  }
 
  calcular(){
    if (this.state.input1 === ''){
      alert('Por favor, digite o primeiro número!')
      return;
    }

    if (this.state.input2 === ''){
      alert('Por favor, digite o segundo número!')
      return;
    }

    this.setState({numero: 'Resultado: '+ (this.state.input1)*(this.state.input2)});
  }
 
  render(){
    return(
      <View style={styles.container}>

      <Text style={styles.titulo}>
       Multiplicador de Números   
       </Text>

    
 
      <TextInput
      style={styles.input}
      placeholder="Digite o primeiro nº "
      onChangeText={ (texto1) => this.setState({input1: texto1})}
      />


      <TextInput
      style={styles.input}
      placeholder="Digite o segundo nº "
      onChangeText={ (texto2) => this.setState({input2: texto2})}
      />
 
      <Pressable 
      style={styles.botao}
      onPress={this.calcular}>
        <Text 
        style={styles.textBotao}>Calcular</Text> 
      </Pressable>
 
      <Text style={styles.texto}> {this.state.numero} </Text>
      </View>
    );
  }
}
 


 
export default App;
