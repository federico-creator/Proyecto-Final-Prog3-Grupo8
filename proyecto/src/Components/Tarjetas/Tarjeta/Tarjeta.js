import React  from "react"
import "./Tarjeta.css"

//por ahora es sin estado, seguro despues hay que cambiarlo
function Tarjeta(props) {
    console.log(props)
    const{
        title, overview, poster_path, vote_average, adult
        } = props.caracteristicas
    return (
    <div>
    <img className='imagen' src={`https://image.tmdb.org/t/p/original/${poster_path}`} />
    <h1>{title}</h1>
    <h3>{overview}</h3>
    <h3>{vote_average}</h3>
    <h3>{adult}</h3>
   </div>
    );
  }
  
  export default Tarjeta;