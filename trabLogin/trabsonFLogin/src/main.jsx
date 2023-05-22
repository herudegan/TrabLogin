import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Cadastrar/>
  </React.StrictMode>,
)

function Cadastrar(){
  if (window.location.href == `http://localhost:5173/home`){
    return <div><br></br><button className='buttonsC' onClick={Redirect}>Cadastrar</button></div>
  }
}

function Redirect(){
  window.location.href = `http://localhost:5173/cadastro`
}