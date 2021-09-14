import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#263238',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        width: '99%',
        flexDirection: 'row',
        justifyContent: 'center',
       
  
    },
    imageDescription: {
        width: 60,
        height: 60,
        marginTop: 12,
        marginLeft: 10,
        
       
    },
    description: {
        width: '80%',
        fontSize: 14,
        color: '#B0BEC5',
        textAlign: 'center',
        backgroundColor: '#37474F',
        borderRadius: 8,
        padding: 10,
        margin: 5,
        marginRight: 10,
       
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },

})

export default styles