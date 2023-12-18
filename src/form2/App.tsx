import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [username, setName] = useState("")
  // const [secret, setSecret] = useState("")

  const username = (new URL(location.href)).searchParams.get("username")
  const secret = (new URL(location.href)).searchParams.get("secret")
  

  const queryString = `?username=${encodeURIComponent(username)}&secret=${encodeURIComponent(secret)}`

  const phpURL = 'http://localhost:5173/src/form2/register.php'



  return (
    <>
      <h3>
        {(new URL(location.href)).searchParams.get("username")}
      </h3>

      <h3>
        {(new URL(location.href)).searchParams.get("secret")}
      </h3>

      <button onClick={() =>
        
        fetch(`${phpURL}${queryString}`, {
          method: 'GET',
          credentials: 'include'
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data =>{
            console.log(data);

          })
          .catch(error=>{
            console.error('Fetch error:', error);
          })
      }>Register
      </button>


    </>
  )
}

export default App