import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("Rodrigo")
  const [number, setNumber] = useState(0)

  const contLike = () => {
    setNumber(number + 1)
  }

  return (
    <div className="App">
      <h1>Meu nome é: {name}</h1>
      <label htmlFor="name">Nome: </label>
      <input type="text" name="name" id="name" onChange={e => setName(e.target.value)}/>
      <div>
        <p>Likes: {number}</p>
        <button onClick={contLike}>Like</button>
      </div>
    </div>
  )
}

export default App
