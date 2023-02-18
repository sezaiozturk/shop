import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import Input from '../../components/Input'
import Button from '../../components/button'
import styles from './Login.style'

const Login = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require("../../asstes/logo.png")} />
            </View>
            <View style={styles.body_container}>
                <Input />
                <Input />
                <Button />
            </View>
        </SafeAreaView>
    )
}

export default Login