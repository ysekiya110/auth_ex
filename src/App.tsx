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
 const [ln, setLn] = useState("")
 const [fn, setFn] = useState("")
  return (
    <>
      <Form id={ "lastname" } label={ "lastname" } onChange={ setLn }/>
      <Form id={ "firstname" } label={ "firstname" } onChange={ setFn }/>
      <div>
        <button onClick={ () =>
          fetch(`https://example.com/form?ln=${ ln }&fn=${ fn }`)
        }> SEND
        </button>
      </div>
    </>
  )
}

export default App
