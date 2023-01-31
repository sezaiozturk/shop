import React from 'react'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        backgroundColor:'#e3e3e3',
        margin:10,
        flexDirection:'row'
        ,borderRadius:10,
        borderWidth:1,
        borderColor:'gray'
    },
    inner_container:{
        flex:1,
        justifyContent:'space-between',

    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:5,
        marginTop:2
    },
    price:{
        textAlign:'right',
        marginHorizontal:8,
        marginVertical:5,
        fontStyle:'italic'
    },
    image:{
        width:100,
        minHeight:100,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        resizeMode:'contain',
        backgroundColor:'white'
    }
})