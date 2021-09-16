import React  from "react"
import "./Footer.css"

//por ahora es sin estado, seguro despues hay que cambiarlo
function Footer() {
    return (

        

   /* <footer className= 'prueba'>
        
        <div className='footer'>
            <ul className='team'>
                <li>Federico Bornico</li>
                <li>Isaac Yoon</li>
                <li>Nicolas Bellomo</li>
            </ul>
        </div>

        <div className='udesa'>
            <img src="https://udesa.edu.ar/sites/all/themes/udesa/images/logo.jpg?v=01" alt=""/> 
        </div>


    </footer> 

    */



   <footer className='piedep'> 

        <footer>
            Federico Bornico - Isaac  Yoon - Nicolas Bellomo 
        </footer>
        
        <footer>
            WEB &copy; 2021
        </footer>

        <footer>
            Programacion 3
        </footer>

        <p  text-align='center'>
                <img className='udesa' src="https://udesa.edu.ar/sites/all/themes/udesa/images/logo.jpg?v=01" alt="" />
        </p>
   
    </footer>



   
    );
  }
  
  export default Footer;