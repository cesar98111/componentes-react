import { useState } from "react"
import Navbar from "./components/Navbar";
import FromSendPost from "./components/FromSendPost";
const App =()=>{
    const user={
        nombre:"",
        contraseña:""
    }
    const[Datas, setEstate]=useState(user);
    return(
        <>
            <Navbar Datas={Datas} setData={setEstate} />
            <div className="container">
                <div className="row justify-content-evenly">
                    <div className="col-6">
                        {(Datas.contraseña==="1234")?<FromSendPost Data={Datas}  />:null}
                    </div>
                    
                    <div className="col-6">
                        
                    </div>
                </div>
            </div>
                 
                
            
                
        </>
    );
}

export default App;