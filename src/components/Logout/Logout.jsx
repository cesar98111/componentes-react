import  PropTypes from 'prop-types'
const Logout =({Datos, setDatos,post ,setpost})=>{
    
    const returnn =(e)=>{
        e.preventDefault();
        
        

        setDatos({
            ...Datos,
                nombre:"",
                contraseña:"",
                first:false

        });
        setpost({
            ...post,
            titulo:"",
            texto:"",
            send:false
        })
    }
    return(
        <div className="container">
            <form onSubmit={returnn}>
                <div className="row justify-content-end ">
                    
                    <p className="text-white-50 col-md-auto usuario ">usuario: <span className="name text-white">{Datos.nombre}</span></p>
                    <div className="col-lg-2">
                        <button className="btn btn-warning" type="submit">logout</button>
                    </div>   
                </div>
            </form>
            
                
        </div>
    );
}
Logout.propTypes={
    Datos:PropTypes.object.isRequired,
    setDatos:PropTypes.func.isRequired,
    
    setpost:PropTypes.func.isRequired,
    post:PropTypes.object.isRequired,
    
    
}
export default Logout;