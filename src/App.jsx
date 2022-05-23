import { useState } from "react"
import Navbar from "./components/Navbar";
import FromSendPost from "./components/FromSendPost";
import ShowPost from "./components/ShowPost";
import Error from "./components/Error";
const App =()=>{
    const content={
        titulo:"",
        texto:""
    }
    const user={
        nombre:"",
        contraseña:""
    }
    const[post, setPost]=useState(content);
    const[Datas, setEstate]=useState(user);
    const[send, setSend]=useState("");
    return(
        <>
            {(Datas.contraseña!=="1234"&&Datas.contraseña!=="")?<Error Datas={Datas} setData={setEstate}/>:null}
            <Navbar Datas={Datas} setData={setEstate} setSend={setSend} setPost={setPost} post={post} />
            <div className="container">
                <div className="row justify-content-evenly">
                    <div className="col-6">
                        {(Datas.contraseña==="1234")?<FromSendPost Data={Datas} Post={post} setPost={setPost} setSend={setSend} />:null}
                    </div>
                    
                    <div className="col-6">
                        {(send==="a")?<ShowPost Data={post} name={Datas} />:null}
                    </div>
                </div>
            </div>
                 
                
            
                
        </>
    );
}

export default App;