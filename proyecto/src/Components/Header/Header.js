import React  from "react"
import "./Header.css"
import Filtrado from "../Filtrado/Filtrado"

//por ahora es sin estado, seguro despues hay que cambiarlo
function Header(props) {
    return (
        <header>
        <h1 className="titulo1">PopcornTime</h1>
        <section>
            <p className="orden">Ordenar <span onClick={()=>props.ascendente()}>ASC</span> / <span onClick={()=>props.descendente()}>DESC</span> </p>
            <i className="fas fa-th"onClick={()=>props.cuadriculado()}></i>
            <br></br>
            <i className="fas fa-align-justify" onClick={()=>props.alineado()}></i>
            <Filtrado filtrar={(texto)=> props.filtrar(texto)}/>
        </section>
    </header>
   
    );
  }
  
  export default Header;