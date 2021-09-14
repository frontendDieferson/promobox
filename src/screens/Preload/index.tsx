import * as React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons/'
import styles from './styles'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../RootStackParams'

type Screen = StackNavigationProp<RootStackParamList, 'Preload'>



export default function Preload() {
    const navigation = useNavigation<Screen>()
    return (
        <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/logopromobox.png')} />
        <Text style={styles.text}>Bem vindo(a) ao promoBox!</Text>
        <Text style={styles.description}>
            Ao dar sua opinião e/ou sugestão, 
            ganhe 10% na sua próxima compra.
        </Text>
        <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
        </View>
    )
}