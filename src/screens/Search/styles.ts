import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
        marginTop: 20,
       
    },
    content: {
        width: 110,
        height: 80,
        backgroundColor: '#37474F',
        borderRadius: 8,
        padding: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',

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