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

// function redirectTo(url: string): void {
//   window.location.href=url;
// }

function App() {
 const [username, setName] = useState("")
 
  return (
    <>
      <Form id={ "username" } label={ "username" } onChange={ setName }/>
      <div>
        <button onClick={ () =>
          window.location.href = `http://localhost:5173/src/ysekiya/index.html?username=${ username }`
          // fetch(`http://localhost:5173/src/ohyu/index.html?ln=${username}`)
          // redirectTo("http://localhost:5173/src/ohyu/index.html?username=${username}")
          // window.location.href="http://localhost:5173/src/ohyu/index.html?ln=${username}";
          
        }> SEND
        </button>
      </div>
    </>
  )
}

export default App
