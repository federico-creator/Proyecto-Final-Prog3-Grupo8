import React, {Component} from "react"
import Tarjeta from './Tarjeta/Tarjeta'

class Tarjetas extends Component{

    constructor(){
        super()
        this.state={
            info: []
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=a0959ac201dc94da76d17af9fee2bfd2&language=en-US&page=1')
            .then( response => response.json())
            .then( data  => {
                console.log(data)
                this.setState({
                info: data.results
            })})
            .catch( error => console.log(error));
    }
    render(){
        
        return(
            <>

                <h1>parte de tarjetas</h1>
                

                <div>
                    { this.state.info.map((character) => 
                    <Tarjeta 
                    caracteristicas = {character}
                    key={ character.id} /> )}

                </div>



            </>
        )
    }
}


export default Tarjetas