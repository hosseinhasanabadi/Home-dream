import React, { useEffect, useState } from 'react'

function useFeachData(url, method = "GET", requestBody = null,authToken = null) {
const [data ,setData]=useState([])
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(()=>{
  const fetchData=async()=>{
  try{
    const options ={
      method:method,
      header:{
        "Content-Type": "application/json",

      }
    }
    if (authToken) {
      options.header["Authorization"] = `Bearer ${authToken}`;
    }
    if((method==='POST'||method==="PUT")&&requestBody){
      options.body =JSON.stringify(requestBody)
    }
    const response =await fetch(url,options);
    if(!response.ok){
      throw new Error(`خطا در دریافت داده‌ها: ${response.status}`);

    }
    const responseData =await response.json()
    setData(responseData)
  }catch(error
  ){
    setError(error.message)
  }finally{
    setLoading(false)
  }
}
fetchData();
},[url ,method,requestBody])

return {data,loading,error}
}

export default useFeachData
