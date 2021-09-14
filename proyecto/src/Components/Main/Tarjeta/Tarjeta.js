import React, {Component}  from "react"
import "./Tarjeta.css"

class Tarjeta extends Component {
    constructor(props){
        super(props)
        this.state={
            verMas: false,
            text:'Ver más',
        }
    }
    
    verMas(){
        if(this.state.verMas){
            this.setState({
                verMas: false,
                text: 'Ver más'
            })
        } else {
            this.setState({
                verMas: true,
                text: 'Ver menos'
            })            
        }
    }

    render(){
        const{ title, overview, poster_path, vote_average, adult, id } = this.props.caracteristicas
        return (
            <div className="tarjeta">
            
                <p className="borrar" onClick={()=> this.props.borrarPelicula(id)}>borrar</p>
                <img className='imagen' src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={poster_path} />
                <h1>{title}</h1>
                <div className={`${this.state.verMas ? 'mostrar' : 'ocultar'}`}>
                    <h3>Resumen: {overview}</h3>
                    <h3>Clasificación: {vote_average}</h3>
                    <h3>Clasificación: {`${adult ? 'Para adultos' : 'Para todas las edades'}`}</h3>
                </div>
                <p className="viewmore" onClick={()=>this.verMas()}>{this.state.text}</p>
            
            </div>
        );
    }
    
  }
  
  export default Tarjeta;