import  PropTypes from 'prop-types'
const Logout =({Datos, setDatos, setSend,post ,setpost})=>{
    
    const returnn =(e)=>{
        e.preventDefault();
        setSend("");
        setDatos({
            ...Datos,
                nombre:"",
                contraseña:""

        });
        setpost({
            ...post,
            titulo:"",
            texto:""
        })
    }
    return(
        <div className="container">
            <form onSubmit={returnn}>
                <div className="row justify-content-end ">
                    <h4 className="text-white col-lg-2 Logout-title ">Logout</h4>
                    <p className="text-white-50 col-sm-4 usuario ">usuario: <span className="name text-white">{Datos.nombre}</span></p>
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
    setSend:PropTypes.func.isRequired,
    setpost:PropTypes.func.isRequired,
    post:PropTypes.object.isRequired
}
export default Logout;