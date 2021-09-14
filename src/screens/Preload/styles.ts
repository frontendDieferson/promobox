import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#263238',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    logo: {
      width: 160,
      height: 160,
      marginBottom: 10,
    },
    
    description: {
      fontSize: 14,
      textAlign: 'center',
      color: '#ECEFF1',
      padding: 18,
    },
    button: {
        width: '60%',
        height: 50,
        backgroundColor: '#4DB6AC',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    text: {
        color: '#4DB6AC', 
        fontSize: 18, 
        fontWeight: 'bold'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ECEFF1',
    },
   
  });

export default styles