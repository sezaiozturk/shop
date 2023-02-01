import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    image_container:{
        margin:10
    },
    image:{
        width:Dimensions.get('window').width-20,
        height:Dimensions.get("window").height/3,
        resizeMode:'contain',
        backgroundColor:'white'
    },
    inner_container:{
        padding:10
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:5,
        marginTop:5
    },
    description:{
        fontSize:15,
        margin:7
    },
    price:{
        fontStyle:'italic',
        textAlign:"right",
        marginRight:10,
        fontSize:20
    }
})