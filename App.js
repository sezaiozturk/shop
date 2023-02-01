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
      <Stack.Navigator>
        <Stack.Screen
          name='ProductsScreen'
          component={Products}
          options={{
            title:'SHOP',
            headerStyle:{backgroundColor:'#d05ce3'},
            headerTitleStyle:{color:'white',fontSize:20,fontWeight:'bold'}
          }}
        />
        <Stack.Screen
          name='DetailScreen' 
          component={Details}
          options={{
            title:'DETAİL',
            headerStyle:{backgroundColor:'#d05ce3'},
            headerTitleStyle:{color:'white',fontSize:20,fontWeight:'bold'},
            headerTintColor:'white'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router