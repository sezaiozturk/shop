import { View, Text, Image } from 'react-native'
import React from 'react'
import useFetch from '../../hooks/useFetch'
import Config from 'react-native-config'
import styles from './Details.style'
import Load from '../../components/load'
import Error from '../../components/error'

const Details = ({route}) => {
  const {id}=route.params
  const{data,load,error}=useFetch(`${Config.API_URL}/${id}`);

  if(load){
    return <Load/>
  }
  if(error){
    return <Error/>
  }
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image source={{uri:data.image}} style={styles.image}/>
      </View>
      <View style={styles.inner_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.price}>{data.price} TL</Text>
      </View>
    </View>
  )
}

export default Details