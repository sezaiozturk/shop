import { useState,useEffect } from 'react'
import axios from 'axios';

function useFetch(url){
    const[data,setData]=useState([]);
    const[load,setLoad]=useState(true);
    const[error,setError]=useState(false);

    const fetchData=async()=>{
        try{
            const {data:responseData}=await axios.get(url);
            setData(responseData);
            setLoad(false);
        }
        catch(err){
            setError(true)
            setLoad(false);
        }
    }
    useEffect(()=>{
        fetchData();
    },[])

    return {data,load,error};
}

export default useFetch;