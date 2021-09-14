import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

export default function Search () {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.content}>
                <Text>Empresa 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.content}>
                <Text>Empresa 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.content}>
                <Text>Empresa 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.content}>
                <Text>Empresa 4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.content}>
                <Text>Empresa 5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.content}>
                <Text>Empresa 6</Text>
            </TouchableOpacity>
        </View>
    )
}