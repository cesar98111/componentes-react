
import PropTypes from 'prop-types';
import Login from "../Login/Login";
import Logout from "../Logout/Logout";

const Navbar =({Datas,setData,setSend,setPost,post,setfirst,first})=>{
    
    
    return(
        <>
                
                <nav className="bg-dark  container ">
                    <div>
                        
                        <div className="row justify-content-beteewn fix">
                    
                        <div className="nav col">
                       
                            <ul className="nav nav-item option">
                                <li className="nav-item">
                                    <img className="img-fluid" src="./logo.png" alt="" />
                                </li>
                                <li className="nav-item">
                                    <a  className="nav-link text-white " href="#">Inicio</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link text-white-50 " href="#">Acerca de</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link text-white-50 " href="#">Contactos</a>
                                </li>
                        
                                <li className="nav-item nav ">
                                
                                </li>
                            </ul>
                        </div>
                            <div className="nav col login">
                                {((Datas.contraseña==='123')&&(Datas.nombre!==""))?<Logout Datos={Datas} setDatos={setData} setSend={setSend} post={post} setpost={setPost}/>:(<><Login Datos={Datas} setDatos={setData}first={first} setfirst={setfirst} className="nav-item"/></>)}
                            </div>
                        </div>
                    </div> 
                    
                        
               
            </nav>
        </>
    )
}
Navbar.propTypes={
    Datas:PropTypes.object.isRequired,
    setData:PropTypes.func.isRequired,
    setSend:PropTypes.func.isRequired,
    setPost:PropTypes.func.isRequired,
    post:PropTypes.object.isRequired,
    setfirst:PropTypes.func.isRequired,
    first:PropTypes.string.isRequired
}
export default Navbar;