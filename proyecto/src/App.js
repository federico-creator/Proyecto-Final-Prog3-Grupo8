import { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Tarjetas from './Components/Tarjetas/Tarjetas';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render(){
    return (
      <div>
        <Header/>
        <Tarjetas/>
        <Footer/>
      </div>
    );
  }
  }
  

export default App;
