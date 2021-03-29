import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffb6c1'
    },
    img:{
      width: 250,
      height: 250,
    },
    textoFrase:{
      fontSize: 20,
      color: '#20b2aa',
      margin: 30,
      fontStyle: 'italic',
      textAlign: 'center'
    },
    botao:{
      width: 230,
      height: 50,
      backgroundColor: 'white',
      marginTop: 10,
      borderColor: '#dd7b22',
      borderRadius: 25 
    },
    btnArea:{
      flex:1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    btnTexto:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#f08080'
    }
  });
  
  