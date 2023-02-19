import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import Input from '../../components/Input'
import Button from '../../components/button'
import styles from './Login.style'
import { Formik } from 'formik'

const Login = () => {
    function handleLogin(values) {
        console.log(values);
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require("../../asstes/logo.png")} />
            </View>
            <Formik initialValues={{ username: '', password: '' }} onSubmit={handleLogin}>
                {({ handleChange, handleSubmit, values }) => (
                    <View style={styles.body_container}>
                        <Input placeHolder="enter username" onChange={handleChange('username')} value={values.username} />
                        <Input placeHolder="enter password" onChange={handleChange('password')} value={values.password} />
                        <Button title="LOGIN" onPress={handleSubmit} />
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    )
}

export default Login