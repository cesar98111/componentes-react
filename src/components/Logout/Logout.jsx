import  PropTypes from 'prop-types'
const Logout =({Datos, setDatos, setSend})=>{
    
    const returnn =(e)=>{
        e.preventDefault();
        setSend("");
        setDatos({
            ...Datos,
                nombre:"",
                contraseña:""

        });
    }
    return(
        <div className="container">
            <form onSubmit={returnn}>
                <div className="row justify-content-end ">
                    <h4 className="text-white col-lg-2 Logout-title ">Logout</h4>
                    <p className="text-white-50 col-lg-4 usuario ">usuario: <spam className="name text-white">{Datos.nombre}</spam></p>
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
    setSend:PropTypes.func.isRequired
}
export default Logout;