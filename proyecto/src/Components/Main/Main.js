import React, {Component} from "react"
import Tarjeta from './Tarjeta/Tarjeta'
import "./Tarjetas.css"
import Header from "../Header/Header"
class Tarjetas extends Component{

    constructor(props){
        super(props)
        this.state={
            pagina: 1,
            peliculas: [],
            peliculasOriginales:[],
            peliculasEnExposición: [],
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
                pagina: this.state.pagina + 1
            }, ()=> this.setState({
                peliculasActuales: this.state.peliculas })
            )})
            .catch( error => console.log(error));
    }

    borrarPelicula(id){
        let buenas = this.state.peliculas.filter(pelicula => pelicula.id !== id)
        this.setState({
            peliculas: buenas,
            peliculasBorradas: this.state.peliculasBorradas.concat(id) 
        }, ()=> this.setState({
            peliculasActuales: this.state.peliculas }))
    }

    resetOriginales(){
        this.setState({
            peliculas: this.state.peliculasOriginales,
            pagina: 2
        }, ()=> this.setState({
            peliculasActuales: this.state.peliculas }))
    }

    resetBorrados(){
        this.state.peliculasBorradas.map(pelicula => (
           fetch (`https://api.themoviedb.org/3/movie/${pelicula}?api_key=a0959ac201dc94da76d17af9fee2bfd2&language=en-US`)
           .then (respuesta => respuesta.json())
           .then (data => {
               this.setState({
                   peliculas: this.state.peliculas.concat(data),
                   peliculasBorradas: []

               }, ()=> this.setState({
                peliculasActuales: this.state.peliculas })) 
           })
           .catch(error => console.log(error))
       )) 
   }

   verMasPelis(){
        this.setState({
            cargando: false
        })
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a0959ac201dc94da76d17af9fee2bfd2&language=en-US&page=${this.state.pagina}`)
    .then( response => response.json())
    .then( data  => {
        this.setState({
        cargando: true,
        peliculas: this.state.peliculas.concat(data.results),
        pagina: this.state.pagina + 1
    }, ()=> this.setState({
        peliculasActuales: this.state.peliculas, cargando: true }))})
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
    
   
   render(){
       console.log(this.state.display);

        
        return(
            <>
                <Header
                cuadriculado={()=>this.cuadriculado()}
                alineado={()=>this.alineado()}
                filtrar={(texto)=>this.Filter(texto)}/>
                
                <h1>parte de tarjetas</h1>

                {this.state.peliculas == "" && this.state.cargando === true ? <h2>Lo sentimos, No hay pelicuals relacionadas con su busqueda</h2> : "" }
                

                {/* <div className="movie" */ /* className={`${this.state.display == "cuadricula" ? 'true' : 'false'}`} */}
                <div className="lista">
                   {
                        this.state.cargando === false ?
                          <img src="https://tenor.com/view/cargando-gif-7991979" alt="cargando..."/>:  
                        this.state.peliculas.map((pelicula) => 
                    <Tarjeta 
                    caracteristicas = {pelicula}
                    key={ pelicula.id} 
                    borrarPelicula={(id) => this.borrarPelicula(id)}/> )}
                </div>

                <button onClick={()=>this.verMasPelis()} >Mas peliculas</button>
                <button onClick={() => this.resetOriginales()}>Reset Originales</button>
                <button onClick={() => this.resetBorrados()}>Reset Borrados</button>
            </>
        )
    }
}


export default Tarjetas