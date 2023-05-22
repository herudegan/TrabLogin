import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import './App.css'

export default function App() {
  const [livre, setLivre] = useState([])
  const [id, setId] = useState([])
  const [login, setLogins] = useState([])
  const [cpf, setCpf] = useState([])
  const [email, setEmail] = useState([])
  const [loginM, setLoginsM] = useState([])
  const [cpfM, setCpfM] = useState([])
  const [nomes, setNomes] = useState([])

  function Redirect(){
    window.location.href = `http://localhost:5173/home`
  }

  const getAllNomes = () => {
    axios.get("http://127.0.0.1:8000/pessoas/")
    .then((response) => {
      setNomes(response.data)
    })
    .catch(error => console.error(`Error: ${error}`))
  }

  const Map = () => {
    nomes.map((user) => {
      if((user.nome == login) && (user.cpf == cpf)){
        setLoginsM(user.nome)
        setCpfM(user.cpf)
        setLoginsM(user.nome)
        setCpfM(user.cpf)
      }
    })
  }

  const Logar = () => {
      Map()
      if((login == loginM) && (cpf == cpfM)){
        console.log("Logado")
        console.log(login)
        window.location.href = `http://localhost:5173/home`
      }
      else{
        console.log("Deslogado")
        window.location.href = `http://localhost:5173/login`  
      }    
  }

  async function Cadastrar(){
    MapDel()
    MapDel()
    if (window.location.href == `http://localhost:5173/home`){
      window.location.href = `http://localhost:5173/cadastro`
    }
    else{
      if(livre == 1){
        const response = await axios.post("http://127.0.0.1:8000/pessoas/",{
          nome: login,
          cpf: cpf,
          email: email,
        })
        if(response.status == 201){
          window.location.href = `http://localhost:5173/home`
          console.log('Cadastrado')
        }
      }
    }
  }

  const MapDel = () => {
    if(nomes.length > 0){
      nomes.map((user) => {
        if(user.nome == login){
          setId(user.id)
        }
        if((user.cpf == cpf)){
          setLivre(0)
          console.log('Impossível cadastrar, já existe uma conta com esse cadastro.')
        }
        else{
          setLivre(1)
        }
      })
    }
    else{
      setLivre(1)
    }
  }

  async function Teste(ide){
    var url = `http://127.0.0.1:8000/pessoas/${ide}`
    const response = await axios.delete(url)
    if(response.status){
      window.location.href = `http://localhost:5173/home`
      console.log('Deletado')
    }
  }

  async function Deletar(){
    getAllNomes()
    console.log(id)
    var url = `http://127.0.0.1:8000/pessoas/${id}`
    const response = await axios.delete(url)
    if(response.status){
      window.location.href = `http://localhost:5173/home`
      console.log('Deletado')
    }
  }

  useEffect(() => {
    getAllNomes()
  }, [])

  useEffect(() => {
    MapDel()
  }, [login, cpf])

  useEffect(() => {
    Map()
  }, [login, cpf])

  if((window.location.href == 'http://localhost:5173/login') || (window.location.href == 'http://localhost:5173/')){
    return(
      <>
        <div class='container'>
          <br></br><e class='bold'>Nome:</e><br></br>
          <input type="text" name="name" onChange={(e) => setLogins(e.target.value)}/><br></br>
          <e class='bold'>CPF:</e><br></br>
          <input type="text" name="cpf" onChange={(e) => setCpf(e.target.value)}/>
          <br></br><br></br>
          <button class='buttonsC' onClick={Logar}>
            Logar
          </button>
        </div>
      </>
    )
  }
  else if (window.location.href == `http://localhost:5173/home`){
    return(
      nomes.map((user) => {
        return(
          <>
            <div class='container'>
              <div key={user.id}>
                <br></br><h3>{user.nome}</h3>
                <div class='align'>
                  <p class='left'><e class='bold'>CPF:</e> <e class='cpf'>{user.cpf}</e></p>
                  <p class='left'><e class='bold'>E-Mail:</e> {user.email}</p>
                </div>
              </div>
              <button class='buttonsC' onClick={() => Teste(user.id)}>Deletar</button><br></br><br></br>
            </div><br></br>
          </>
        )
      })
    )
  }
  else if (window.location.href == `http://localhost:5173/cadastro`){
    return(
      <div class='container'>
        <br></br><e class='bold'>Nome:</e><br></br>
        <input type="text" name="name" onChange={(e) => setLogins(e.target.value)}/><br></br>
        <e class='bold'>CPF:</e><br></br>
        <input type="text" name="cpf" onChange={(e) => setCpf(e.target.value)}/><br></br>
        <e class='bold'>E-mail:</e><br></br>
        <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>
        <br></br><br></br>
        <button class='buttonsC' onClick={Cadastrar}>
          Cadastrar
        </button>
        <button class='buttonsC' onClick={Deletar}>
          Deletar
        </button>
        <button class='buttonsC' onClick={Redirect}>
          Voltar
        </button>
      </div>
    )
  }
  else{
    console.log(window.location.href)
    return(
      <button onClick={Logar}>
        AOPA
      </button>
    )
  }
}
