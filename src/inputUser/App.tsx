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
          window.location.href = `../ysekiya/index.html?username=${ username }`
          
          
        }> Register
        </button>
      </div>

      <Form id={ "username" } label={ "username" } onChange={ setName }/>
      <div>
        <button onClick={ () =>
          window.location.href = `../Login/index.html?username=${ username }`
          
          
        }> Login
        </button>
      </div>


    </>
  )
}

export default App
