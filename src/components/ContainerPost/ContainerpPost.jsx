import FromSendPost from '../FromSendPost';
import ShowPost from '../ShowPost';
import PropTypes from 'prop-types' 
const ContainerPost=({post,setPost,Datas,send,setSend,setEstate})=>{
    return(
        <div>
            <div className="container">
                <div className="row justify-content-evenly">
                    <div className="col-6">
                        {((Datas.nombre!=="")&&(Datas.contraseña==="123"))?<FromSendPost Data={Datas} Post={post} setPost={setPost} setSend={setSend} />:null}
                    </div>
                    <div className="col-6">
                        {(send==="a")?<ShowPost Data={post} name={Datas} />:null}
                    </div>
                </div>
            </div>
        </div>
    );
}
ContainerPost.propTypes={
    Datas:PropTypes.object.isRequired,
    setEstate:PropTypes.func.isRequired,
    post:PropTypes.object.isRequired,
    setPost:PropTypes.func.isRequired,
    send:PropTypes.string.isRequired,
    setSend:PropTypes.func.isRequired
}
export default ContainerPost;

