import React from 'react'
import Lottie from 'lottie-react-native'
const Load=()=>{
    return(
        <Lottie source={require('../../asstes/loading.json') } autoPlay/>
    )
}
export default Load;