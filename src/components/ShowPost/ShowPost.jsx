import PropTypes from 'prop-types';
const ShowPost=({Data,name})=>{
    return(
        <div className="border rounded shadow">
            <div className="bg-warning p-1">
                <p className="post-title">Datos del Post</p>
            </div>
            <div>
                <p>Autor: <span className='fw-bolder'>{name.nombre}</span></p>
                <p>Titulo: <span className='fw-bolder'>{Data.titulo}</span></p>
                <p>Texto: <span className='fw-bolder'>{Data.texto}</span></p>
            </div>
        </div>
    );
}
ShowPost.propTypes={
    Data:PropTypes.object.isRequired,
    name:PropTypes.object.isRequired
}
export default ShowPost