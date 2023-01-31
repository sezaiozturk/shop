import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Products from './src/pages/products'
import Details from './src/pages/details'

const Stack=createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='ProductsScreen' component={Products}/>
        <Stack.Screen name='DetailScreen' component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router