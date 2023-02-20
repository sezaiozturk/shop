import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './Input.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Input = ({ placeHolder, value, onChange, icon }) => {
    return (
        <View style={styles.container}>
            <Icon name={icon} size={30} />
            <TextInput
                style={styles.input}
                placeholder={placeHolder}
                value={value}
                onChangeText={onChange} />
        </View>
    )
}

export default Input