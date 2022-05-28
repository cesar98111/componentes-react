import { useState } from "react"
import Navbar from "./components/Navbar";

import Error from "./components/Error";
import ContainerPost from "./components/ContainerPost";
const App =()=>{
    const content={
        titulo:"",
        texto:"",
        display:false
    }
    const user={
        nombre:"",
        contraseña:"",
        send:false
    }
    
    const[post, setPost]=useState(content);
    const[Datas, setEstate]=useState(user);
    
    return(
        <>
            {((Datas.contraseña!=="123"&&Datas.contraseña!=="")||(Datas.nombre===""&&Datas.first===true))?<Error Datas={Datas} setData={setEstate}/>:null}
            <Navbar Datas={Datas} setData={setEstate}  setPost={setPost} post={post}  />
            <ContainerPost post={post} setPost={setPost} Datas={Datas}    setEstate={setEstate}/>     
        </>
    );
}

export default App;