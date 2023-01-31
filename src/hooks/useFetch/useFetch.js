import { useState,useEffect } from 'react'
import axios from 'axios';

function useFetch(url){
    const[data,setData]=useState([]);
    const[load,setLoad]=useState(true);
    const[error,setError]=useState(null);

    const fetchData=async()=>{
        try{
            const {data:responseData}=await axios.get(url);
            setData(responseData);
            setLoad(false);
        }
        catch(err){
            setError(err.message)
            setLoad(false);
        }
    }
    useEffect(()=>{
        fetchData();
    },[])

    return {data,load,error};
}

export default useFetch;