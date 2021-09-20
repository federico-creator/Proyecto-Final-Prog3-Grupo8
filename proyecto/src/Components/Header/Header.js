import React  from "react"
import "./Header.css"
import Filtrado from "../Filtrado/Filtrado"

//por ahora es sin estado, seguro despues hay que cambiarlo
function Header(props) {
    return (
        <header>
        <h1 className="titulo1">PopcornTime</h1>
        <section className="infoHeader">
            <p className="orden">Ordenar <span className="ordenando" onClick={props.ascendente}>ASC</span> / <span className="ordenando" onClick={props.descendente}>DESC</span> </p>
            <div className="vista"><i className="fas fa-th"onClick={props.cuadriculado}></i><i className="fas fa-align-justify" onClick={props.alineado}></i></div>
            <Filtrado className="filtrado" filtrar={(texto)=> props.filtrar(texto)}/>
        </section>
    </header>
   
    );
}
  
  export default Header;