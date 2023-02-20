import { View, Text, Image, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import Input from '../../components/Input'
import Button from '../../components/button'
import styles from './Login.style'
import { Formik } from 'formik'
import usePost from '../../hooks/usePost'

const Login = ({ navigation }) => {
    const { data, load, error, post } = usePost();
    function handleLogin(values) {
        post("https://fakestoreapi.com/auth/login", values);
    }
    if (error) {
        Alert.alert("Error...", "Shop");
    }
    if (data) {
        navigation.navigate("ProductsScreen");
    }
    console.log(data);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require("../../asstes/logo.png")} />
            </View>
            <Formik initialValues={{ username: '', password: '' }} onSubmit={handleLogin}>
                {({ handleChange, handleSubmit, values }) => (
                    <View style={styles.body_container}>
                        <Input placeHolder="enter username" onChange={handleChange('username')} value={values.username} icon={"account"} />
                        <Input placeHolder="enter password" onChange={handleChange('password')} value={values.password} icon={"key"} />
                        <Button title="LOGIN" onPress={handleSubmit} load={load} />
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    )
}

export default Login