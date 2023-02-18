import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Button.style'

const Button = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.title}>LOGIN</Text>
        </TouchableOpacity>
    )
}

export default Button