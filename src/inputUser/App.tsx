import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function Form(props: { id: string, label: string, onChange: (input: string) => void }) {
  return (
  <div>
    <label htmlFor={ props.id }>{ props.label }</label>
      <input
        type={ "text" } id={ props.id }
        onChange={ e => props.onChange(e.target.value) }/>
  </div>
  )
  }


function App() {
 const [username, setName] = useState("")

 function Register(){
  if(username === ""){
    console.log("a")
  }else{
    window.location.href = `../ysekiya/index.html?username=${ username }`
  }
 }

 function Login(){
  if(username === ""){
    console.log("a")
  }else{
    window.location.href = `../Login/index.html?username=${ username }`
  }
 }
 
 
  return (
    <>
      <h3>ユーザ名を記入してください</h3>
      <Form id={ "username" } label={ "" } onChange={ setName }/>
      
      <div>
        <button onClick={Register}> Register </button>
      </div>

      
      <div>
        <button onClick={Login}> Login </button>
      </div>


    </>
  )
}

export default App
