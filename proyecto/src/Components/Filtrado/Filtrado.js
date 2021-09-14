import React, {Component} from "react"


class Filtrado extends Component{

    constructor(props){
        super(props)
        this.state={
            filter: ""
           
        }
    }

     enviarSubmit(e){
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
            <form onSubmit={(e)=>this.enviarSubmit(e)}>

                <label>Filtrar Peliculas</label>
                <input type="text" name= "name" onChange={(e)=>this.cambios(e)} value={this.state.filter}  />
                <button type= "submit" ></button>
            </form> 
            
             
        )
    }
}


export default Filtrado