import LogoUnifranz from './assets/LogoUnifranz.png'
import './App.css'
import React from 'react'

function App() {



  return (
    
    <div className="App">
    <a href="https://unifranz.edu.bo/" target="_blank" >
      <img src={LogoUnifranz} className="logo" alt="logo unifranz" />
    </a>
    <h1>Métodos de Investigación Operativa II</h1>
    <button className='PL' >Programación Lineal</button>
    <button className='AHP' >Método AHP</button>

  </div>
    
  )
}

export default App
