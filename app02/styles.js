import {StyleSheet} from 'react-native';
 
const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
    },
    
  
    texto:{
      textAlign: 'center',
      fontSize: 25,
    },

    botao:{
        width: 200,
        height: 50,
        margin: 20,
        backgroundColor: 'green',
      },

      botaodois:{
        width: 200,
        height: 50,
        margin: 20,
        backgroundColor: 'red',
      },

      textoBotao:{
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 35,
        color: 'white', 
      },

      titulo:{
        color: '#46295A', 
        fontSize: 29, 
        margin: 35,
        fontWeight: 'bold',
        textAlign: 'center',
    },
  });
 
  export {styles};
