import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
const Error =({Data,setData})=>{
    const[loading,setloading]= useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setloading(false);
            setData({
                ...Data,
                contraseña:""
            })
        },3900)
        
    },[])
    return(
        <>
        {(loading)?<div className='alert alert-danger error ' role="alert">credenciales no validas</div>:null}
        </>
        
    )
}
Error.propTypes={
    Data:PropTypes.object.isRequired,
    setData:PropTypes.func.isRequired
}
export default Error;