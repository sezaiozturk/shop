import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Config from 'react-native-config'
import Card from '../../components/productCard'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './Products.style'
 
const Products = () => {
  const[data,setData]=useState([]);

  const fetchData=async()=>{
    const {data:productData}=await axios.get(Config.API_URL);
    setData(productData);
  }

  const renderData=({item})=><Card product={item}/>
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <SafeAreaView style={styles.body}>
      <FlatList data={data} renderItem={renderData}/>
    </SafeAreaView>
  )
}

export default Products