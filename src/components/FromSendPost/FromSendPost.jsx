import PropTypes from 'prop-types'
import { useState } from 'react'

const FromSendPost=({Data,Post,setPost})=>{
    const post={
        titulo:Post.titulo,
        texto:Post.texto,
        send:Post.send
    }
    const [form, setform]=useState(post);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setPost({
            ...form,
                send:true
        });
    }
    const handleInputChange=(e)=>{
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    return(
        <div className="border rounded shadow">
            <div className="bg-warning p-1 ">
                <p className="post-title ">Autor:  <span className="fw-bolder">{Data.nombre}</span></p>
            </div>
            <div>
                <form onSubmit={handleSubmit}  className="form-send">
                    <div className="mb-3">
                        <p>
                            <label htmlFor="titulo"  className="from-label fw-bold">Titulo</label>
                        </p>
                        <input type="text" name="titulo" className="form-input" id="titulo" onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <p>
                            <label htmlFor="texto" className="from-label fw-bold" >Texto</label>
                        </p>
                        
                        <textarea id="texto" name="texto"  rows="6" cols="70" onChange={handleInputChange}/>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary" type="submit" disabled={(!form.texto)||(!form.titulo)} >Nuevo Post</button>
                    </div>
                </form>
                    
                
            </div>
        </div>
    )
}
FromSendPost.propTypes={
    Data:PropTypes.object.isRequired,
    Post:PropTypes.object.isRequired,
    setPost:PropTypes.func.isRequired,
    
}

export default FromSendPost;