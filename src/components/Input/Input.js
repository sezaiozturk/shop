import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './Input.style'

const Input = ({ placeHolder, value, onChange }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeHolder}
                value={value}
                onChangeText={onChange} />
        </View>
    )
}

export default Input