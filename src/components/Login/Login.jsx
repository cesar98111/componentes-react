import { useState } from "react"
import PropTypes from 'prop-types';
const Login =({Datos, setDatos})=>{
    const inituser ={
        nombre: Datos.nombre,
        contraseña: Datos.contraseña
    }
    const [user, setUser]= useState(inituser);
    const handleinput=(e)=>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
        
    }
    const handleSubmit=(e)=>{
        if(user.contraseña!=="1234"){
            window.alert("la contraseña es invalida");
        }
        e.preventDefault();
        setDatos(user);
    }
    return(
          <div className="container" >
              
              <form onSubmit={handleSubmit} className="row g-3 justify-content-end" >
                <div className="col-auto">
                    <h4 className="text-white">Login</h4>
                </div>
                
                <div className="col-auto">
                    <input type="text" placeholder="name" name="nombre" onChange={handleinput} />
                </div>
                <div className="col-auto">
                    <input type="password" name="contraseña" placeholder="contraseña" onChange={handleinput} />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-warning btn-sm">Login</button>
                </div>     
              </form>
              
          </div> 
    )
}
Login.propTypes={
    Datos:PropTypes.object.isRequired,
    setDatos:PropTypes.func.isRequired
}
export default Login