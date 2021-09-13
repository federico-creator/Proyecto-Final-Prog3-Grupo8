import React, {Component} from "react"
import Tarjeta from './Tarjeta/Tarjeta'
import "./Tarjetas.css"
class Tarjetas extends Component{

    constructor(){
        super()
        this.state={
            pagina: 1,
            peliculas: [],
            peliculasOriginales:[],
            peliculasEnExposición: [],
            peliculasBorradas:[],
            cargando: false,
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a0959ac201dc94da76d17af9fee2bfd2&language=en-US&page=${this.state.pagina}`)
            .then( response => response.json())
            .then( data  => {
                this.setState({
                cargando: true,
                peliculas: data.results,
                peliculasOriginales: data.results,
                pagina: this.state.pagina + 1
            })})
            .catch( error => console.log(error));
    }

    borrarPelicula(id){
        let buenas = this.state.peliculas.filter(pelicula => pelicula.id !== id)
        this.setState({
            peliculas: buenas,
            peliculasBorradas: this.state.peliculasBorradas.concat(id) 
        })
    }

    resetOriginales(){
        this.setState({
            peliculas: this.state.peliculasOriginales,
            pagina: 2
        })
    }

    resetBorrados(){
        this.state.peliculasBorradas.map(pelicula => (
           fetch (`https://api.themoviedb.org/3/movie/${pelicula}?api_key=a0959ac201dc94da76d17af9fee2bfd2&language=en-US`)
           .then (respuesta => respuesta.json())
           .then (data => {
               this.setState({
                   peliculas: this.state.peliculas.concat(data),
                   peliculasBorradas: []

               }) 
           })
           .catch(error => console.log(error))
       )) 
   }

   verMas(){
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a0959ac201dc94da76d17af9fee2bfd2&language=en-US&page=${this.state.pagina}`)
    .then( response => response.json())
    .then( data  => {
        this.setState({
        cargando: true,
        peliculas: this.state.peliculas.concat(data.results),
        pagina: this.state.pagina + 1
    })})
    .catch( error => console.log(error));
   }

    render(){
        
        return(
            <>

                <h1>parte de tarjetas</h1>
                

                <div className="movie">
                   {
                        this.state.cargando === false ?
                          <img src="https://tenor.com/view/cargando-gif-7991979" alt="cargando..."/>:  
                        this.state.peliculas.map((character) => 
                    <Tarjeta 
                    caracteristicas = {character}
                    key={ character.id} 
                    borrarPelicula={(id) => this.borrarPelicula(id)}/> )}
                </div>

                <button onClick={()=>this.verMas()} >Mas peliculas</button>
                <button onClick={() => this.resetOriginales()}>Reset Originales</button>
                <button onClick={() => this.resetBorrados()}>Reset Borrados</button>
                
            </>
        )
    }
}


export default Tarjetas