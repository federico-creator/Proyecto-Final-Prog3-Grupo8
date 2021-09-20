import React, {Component} from "react"
import "./Filtrado.css"


class Filtrado extends Component{

    constructor(props){
        super(props)
        this.state={
            filter: ""
           
        }
    }

     evitarSubmit(e){
        e.preventDefault()
    }

    cambios(e){
        this.setState({
            filter: e.target.value
        }, ()=> this.props.filtrar(this.state.filter)) 
    }
 

    

    render(){
        console.log(this.state.personajes);
        return(
            <form className="filtro" onSubmit={(e)=>this.evitarSubmit(e)}>
                <input type="text" name= "name" onChange={(e)=>this.cambios(e)} value={this.state.filter}  />
            </form> 
            
             
        )
    }
}


export default Filtrado