import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
const Error =({Data,setData})=>{
    const[loading,setloading]= useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setloading(false);
            setData({
                ...Data,
                    nombre:"",
                    contraseña:"",
                    first:false
            })
        },3800)
        
    },[])
    return(
        <>
        {(loading)?<div className='alert alert-danger error ' role="alert">Credenciales no válidas</div>:null}
        </>
        
    )
}
Error.propTypes={
    Data:PropTypes.object,
    setData:PropTypes.func
}
export default Error;