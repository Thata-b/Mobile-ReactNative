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
      alert('Por favor, digite o peso!')
      return;
    }

    if (this.state.input2 === ''){
      alert('Por favor, digite a altura!')
      return;
    }

    this.setState({numero: 'Classificação: '+ (this.state.input1)/((this.state.input2)*(this.state.input2))});
 
  }



  

  render(){

    let img = 'https://www.ricardogozzano.com.br/wp-content/uploads/2020/03/tabela_imc-300x213.png';

    return(
      <View style={styles.container}>

      <Text style={styles.titulo}>
        Cálculo do IMC
       </Text>

       <Image 
          style={styles.imagem}
          source={{ uri: img }}
        />
    
 
      <TextInput
      style={styles.input}
      placeholder="Peso "
      onChangeText={ (texto1) => this.setState({input1: texto1})}
      />


      <TextInput
      style={styles.input}
      placeholder="Altura "
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

