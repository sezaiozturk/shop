import { FlatList, Text,View } from 'react-native'
import React from 'react'
import Config from 'react-native-config'
import Card from '../../components/productCard'
import styles from './Products.style'
import useFetch from '../../hooks/useFetch'
import Load from '../../components/load'
import Error from '../../components/error'
 
const Products = ({navigation}) => {
  const {data,load,error}=useFetch(Config.API_URL);

  const handleProductSelect=(id)=>{
    navigation.navigate('DetailScreen',{id});
  }
  const renderData=({item})=><Card product={item} onSelect={()=>handleProductSelect(item.id)}/>

  if(load){
    return <Load/>
  }
  if(error){
    return <Error/>
  }
  
  return (
    <View style={styles.body}>
      <FlatList data={data} renderItem={renderData}/>
    </View>
  )
}

export default Products