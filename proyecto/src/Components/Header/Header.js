import React  from "react"
import "./Header.css"

//por ahora es sin estado, seguro despues hay que cambiarlo
function Header(props) {
    return (
        <header>
        <h1>Título/ Nombre de la app</h1>
        <section>
            <p>Ordenar ASC/ DESC</p>
            <i className="fas fa-th"onClick={()=>props.cuadriculado()}></i>
            <br></br>
            <i className="fas fa-align-justify" onClick={()=>props.alineado()}></i>
            <form action="">
                <input type="text" name="search" id="" placeholder="Search"/>
                <button type="submit"><i className="fas fa-search"></i></button>
            </form>
        </section>
    </header>
   
    );
  }
  
  export default Header;