import { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Tarjetas from './Components/Tarjetas/Tarjetas';
import Footer from './Components/Footer/Footer';

class App extends Component {
  constructor(){
    super()
    this.state={
      display: "cuadricula"
    }
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
    /* console.log(this.state.display); */
    return (
      <div>
        <Header
        cuadriculado={()=>this.cuadriculado()}
        alineado={()=>this.alineado()}/>
        <Tarjetas display={this.state.display}/>
        <Footer/>
      </div>
    );
  }
  }
  

export default App;
