import PropTypes from 'prop-types'
const FromSendPost=({Data})=>{
    return(
        <div className="border rounded shadow">
            <div className="bg-warning p-1 ">
                <p className="send-post-title ">Autor:  <spam className="fw-bolder">{Data.nombre}</spam></p>
            </div>
            <div>
                <form className="form-send">
                    <div className="mb-3">
                        <p>
                            <label htmlFor="titulo" className="from-label fw-bold">Titulo</label>
                        </p>
                        <input type="text" className="form-control" id="titulo" />
                    </div>
                    <div className="mb-3">
                        <p>
                            <label htmlFor="texto" className="from-label fw-bold" >Texto</label>
                        </p>
                        
                        <textarea id="texto"  rows="6" cols="70"/>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary" disabled>Nuevo Post</button>
                    </div>
                </form>
                    
                
            </div>
        </div>
    )
}
FromSendPost.propTypes={
    Data:PropTypes.object.isRequired
}
export default FromSendPost;