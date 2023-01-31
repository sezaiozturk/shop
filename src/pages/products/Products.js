import { ActivityIndicator, FlatList, Text } from 'react-native'
import React from 'react'
import Config from 'react-native-config'
import Card from '../../components/productCard'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './Products.style'
import useFetch from '../../hooks/useFetch'
 
const Products = () => {
  const {data,load,error}=useFetch(Config.API_URL);
  const renderData=({item})=><Card product={item}/>

  if(load){
    return <SafeAreaView><ActivityIndicator size={'large'}/></SafeAreaView>
  }
  if(error){
    return <SafeAreaView><Text>{error}</Text></SafeAreaView>
  }
  
  return (
    <SafeAreaView style={styles.body}>
      <FlatList data={data} renderItem={renderData}/>
    </SafeAreaView>
  )
}

export default Products