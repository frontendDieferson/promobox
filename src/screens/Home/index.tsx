import React from 'react'
import { View, Image, Text, TouchableOpacity  } from 'react-native'
import Search from '../Search'
import styles from './styles'




export default function Home () {

    return (
        <View style={styles.container}>
            <View style={styles.content}>

            <Image style={styles.imageDescription} source={require('../../assets/local.png')} />
            <Text style={styles.description}>
            O comércio local sempre busca por atender melhor seus clientes.
            Por isso, estamos sempre abertos a ouvir a sua opinião.
            </Text>
               
         </View>
            <Text style={{
                fontSize: 18,
                color: '#B0BEC5',
                marginTop: 20,
            }}>
               Selecione a Empresa:

            </Text>
            <Search />
        </View>
    )
}