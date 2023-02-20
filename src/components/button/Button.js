import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Button.style'

const Button = ({ onPress, title, load }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress} disabled={load}>
            {load ? <ActivityIndicator size={30} color="white" /> : <Text style={styles.title}>{title}</Text>}
        </TouchableOpacity>
    )
}

export default Button