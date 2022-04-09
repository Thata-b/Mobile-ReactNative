import {StyleSheet} from 'react-native';
 
const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',  
    },

    input:{
      height: 45,
      borderWidth: 1,
      borderColor: '#222',
      margin: 10,
      fontSize: 18,
      padding: 10,
      color: '#462969',
      fontWeight: 'bold',
    },

    texto:{
      textAlign: 'center',
      fontSize: 25,
      color: 'red',
    },

    titulo:{
        color: '#46295A', 
        fontSize: 32, 
        margin: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    textBotao:{
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 45,
        fontSize: 25,
        margin: 6,
        fontWeight: 'bold',
        color: '#fff',
       },

    botao:{
        width: 200,
        height: 50,
        margin: 30,
        backgroundColor: 'green',
    },

     imagem:{ 
         width: 310, 
         height: 220, 
         margin: 15,
    }

  });
 
  export {styles};