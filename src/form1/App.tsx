import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function Form(props: { id: string, label: string, onChange: (input: string) => void }) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={"text"} id={props.id}
        onChange={e => props.onChange(e.target.value)} />
    </div>
  )
}

// function redirectTo(url: string): void {
//   window.location.href=url;
// }

function App() {
  const [username, setName] = useState("")
  const [secret, setSecret] = useState("")

  const queryString = `?username=${username}&secret=${secret}`;

  const phpURL = 'http://localhost:5173/src/form1/register.php';

  return (
    <>
      <Form id={"username"} label={"username"} onChange={setName} />
      <Form id={"secret"} label={"secret"} onChange={setSecret} />
      <div>
        <button onClick={() =>
          // window.location.href = `http://localhost:5173/src/form2/index.html?username=${ username }&secret=${ secret}`
          // fetch(`http://localhost:5173/src/ohyu/index.html?ln=${username}`)
          // redirectTo("http://localhost:5173/src/ohyu/index.html?username=${username}")
          // window.location.href="http://localhost:5173/src/ohyu/index.html?ln=${username}";
          fetch(`${phpURL}${queryString}` , {
            method: 'GET',
            headers: {
              'Content-Type' : 'application/json',
            },
            credentials: 'include',
            mode: "cors",
          })
            .then(response => {
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json();
            })
            .then(data => {
              console.log(data);

            })
            .catch(error => {
              console.error('Fetch error:', error);
            })
        }> SEND
        </button>
      </div>
    </>
  )
}

export default App