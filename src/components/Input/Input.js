import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './Input.style'

const Input = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} />
        </View>
    )
}

export default Input