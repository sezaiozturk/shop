import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    logo_container: {
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 3,
        resizeMode: 'contain',
        tintColor: 'purple',
        alignSelf: 'center'
    },
    body_container: {
        flex: 1
    }
})