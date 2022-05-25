import { useState } from "react"
import Navbar from "./components/Navbar";

import Error from "./components/Error";
import ContainerPost from "./components/ContainerPost";
const App =()=>{
    const content={
        titulo:"",
        texto:""
    }
    const user={
        nombre:"",
        contraseña:""
    }
    const [first, setfirst]=useState("");
    const[post, setPost]=useState(content);
    const[Datas, setEstate]=useState(user);
    const[send, setSend]=useState("");
    return(
        <>
            {((Datas.contraseña!=="123"&&Datas.contraseña!=="")||(Datas.nombre===""&&first==="a"))?<Error Datas={Datas} setData={setEstate}/>:null}
            <Navbar Datas={Datas} setData={setEstate} setSend={setSend} setPost={setPost} post={post} setfirst={setfirst} first={first} />
            <ContainerPost post={post} setPost={setPost} Datas={Datas} send={send} setSend={setSend}  setEstate={setEstate}/>
            
                 
                
            
                
        </>
    );
}

export default App;