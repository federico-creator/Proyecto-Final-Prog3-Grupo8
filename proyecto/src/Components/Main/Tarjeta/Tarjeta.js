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
            <>
            <div  className={`${this.props.display == "cuadricula" ? 'tarjeta' : 'tarjeta2'}`} >
                        <div className="uper">
                            <i className="fas fa-chevron-left"></i>
                            <i className="fas fa-trash" onClick={()=> this.props.borrarPelicula(id)}></i>
                            <i className="fas fa-chevron-right"></i>
                        </div>
                        <div className={`${this.props.display == "cuadricula" ? '' : 'tarjetasub2'}`}>
                                <img className={`${this.props.display == "cuadricula" ? 'imagen' : 'imagen2'}`} src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={poster_path} />
                                <h1 className="titulo">{title}</h1>
                                <div className={`${this.state.verMas ? 'mostrar' : 'ocultar'}`}>
                                    <div className={`${this.state.display == "cuadricula" ? '' : "viewmorelista"}`}>
                                        <h3 className="elementos">Resumen: {overview}</h3>
                                        <h3 className="elementos">Rating: {vote_average}</h3>
                                        <h3 className="elementos">Clasificación: {`${adult ? 'Para adultos' : 'Para todas las edades'}`}</h3>
                                    </div>
                                </div>
                                <p className="viewmore" onClick={()=>this.verMas()}>{this.state.text}</p>
                        </div>
            </div>
            </>
        );
    }
    
  }
  
  export default Tarjeta;