import React, {Component} from "react"
import Tarjeta from './Tarjeta/Tarjeta'

class Tarjetas extends Component{

    constructor(){
        super()
        this.state={
            
        }
    }


    render(){
        
        return(
            <>

                <h1>parte de tarjetas</h1>
                

                <div>
                    { info.map((character) => 
                    <Tarjeta 
                    caracteristicas = {character}
                    key={idx + character.name} /> )}

                </div>



            </>
        )
    }
}


export default Tarjetas