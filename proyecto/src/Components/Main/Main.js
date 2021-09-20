import React, {Component} from "react"
import Tarjeta from './Tarjeta/Tarjeta'
import "./Tarjetas.css"
import Header from "../Header/Header"
class Tarjetas extends Component{

    constructor(){
        super()
        this.state={
            pagina: 1,
            peliculas: [],
            peliculasOriginales:[],
            peliculasActuales: [],
            peliculasBorradas:[],
            cargando: false,
            display: "cuadricula"
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
                pagina: this.state.pagina + 1,
                peliculasActuales: data.results
            })})
            .catch( error => console.log(error));
    }

    borrarPelicula(id){
        let buenas = this.state.peliculasActuales.filter(pelicula => pelicula.id !== id)
        this.setState({
            peliculas: buenas,
            peliculasBorradas: this.state.peliculasBorradas.concat(id),
            peliculasActuales: buenas
        })
    }

    resetOriginales(){
        this.setState({
            peliculas: this.state.peliculasOriginales,
            pagina: 2,
            peliculasActuales:this.state.peliculasOriginales,
        })
    }

    resetBorrados(){
        this.state.peliculasBorradas.map(pelicula => (
           fetch (`https://api.themoviedb.org/3/movie/${pelicula}?api_key=a0959ac201dc94da76d17af9fee2bfd2&language=en-US`)
           .then (respuesta => respuesta.json())
           .then (data => {
               this.setState({
                   peliculas: this.state.peliculas.concat(data),
                   peliculasBorradas: [],
                   peliculasActuales: this.state.peliculasActuales.concat(data)

               }) 
           })
           .catch(error => console.log(error))
       )) 
   }

   verMasPelis(){
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a0959ac201dc94da76d17af9fee2bfd2&language=en-US&page=${this.state.pagina}`)
    .then( response => response.json())
    .then( data  => {
        this.setState({
        peliculas: this.state.peliculas.concat(data.results),
        pagina: this.state.pagina + 1,
        peliculasActuales: this.state.peliculasActuales.concat(data.results)
    })})
    .catch( error => console.log(error));
   }

   Filter(texto){
        let peliculasFiltradas = this.state.peliculasActuales.filter((pelicula) => pelicula.title.toLowerCase().includes(texto.toLowerCase()))
         this.setState({
            peliculas: peliculasFiltradas
        }) 
   }
   cuadriculado(){
    this.setState({
      display: "cuadricula"
    })
  }

  alineado(){
    this.setState({
      display: "lineal"
    })
  }

  ascendente(){
      let filtradas= []
      let pelicualasAscendentes = this.state.peliculas.map((pelicula)=>pelicula.title)
      pelicualasAscendentes.sort()
      pelicualasAscendentes.map((pelicula)=>(
        filtradas= filtradas.concat(this.state.peliculas.filter((peliculas) => peliculas.title.includes(pelicula)))
      ))
    this.setState({
        peliculas:filtradas
    },()=> this.setState({
        peliculasActuales: this.state.peliculas}))
  }

  descendente(){
    let filtradas= []
    let pelicualasAscendentes = this.state.peliculas.map((pelicula)=>pelicula.title)
    pelicualasAscendentes.sort()
    pelicualasAscendentes.reverse()
    pelicualasAscendentes.map((pelicula)=>(
      filtradas= filtradas.concat(this.state.peliculas.filter((peliculas) => peliculas.title.includes(pelicula)))
    ))
  this.setState({
      peliculas:filtradas
  },()=> this.setState({
      peliculasActuales: this.state.peliculas}))
    
}
    
   
   render(){
       console.log(this.state.display);

        
        return(
            <>
                <Header
                cuadriculado={()=>this.cuadriculado()}
                alineado={()=>this.alineado()}
                filtrar={(texto)=>this.Filter(texto)}
                ascendente={()=> this.ascendente()}
                descendente={()=> this.descendente()}/>
                {this.state.peliculas == "" && this.state.cargando === true ? <h2 className="noresults">Lo sentimos, No hay películas relacionadas con su búsqueda</h2> : "" }
                

                 <div  className={`${this.state.display == "cuadricula" ? 'cuadricula' : 'lista'}`} >
                
                   {
                        this.state.cargando === false ?
                          <img className="cargando"src="https://tenor.com/view/cargando-gif-7991979" alt="cargando..."/>:  
                        this.state.peliculas.map((pelicula) => 
                    <Tarjeta 
                    caracteristicas = {pelicula}
                    key={ pelicula.id} 
                    display = {this.state.display}
                    borrarPelicula={(id) => this.borrarPelicula(id)}/> )}
                </div>

                <div className="botones">
                <button className="boton" onClick={()=>this.verMasPelis()} >Mas peliculas</button>
                <button className="boton" onClick={() => this.resetOriginales()}>Reset Originales</button>
                <button className="boton" onClick={() => this.resetBorrados()}>Reset Borrados</button>
                </div>
            </>
        )
    }
}


export default Tarjetas