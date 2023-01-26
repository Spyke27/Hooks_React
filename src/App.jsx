import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState()
  const [name, setName] = useState()


  
  useEffect(() =>{
    fetch(`https://api.github.com/users/${name}`)
    .then((res) => res.json())
    .then((json)=> setUser(json));
  }, [name])

  const pesquisar = () => {
    const perfil = document.querySelector(".perfil")
    const form = document.querySelector(".form")

    perfil.style.display = "flex";
    form.style.display = "none";
  }

  return (
    <div className="App">
      
      <div className='form'>
      <h3>Github</h3>
      <label htmlFor="name">Nome de Usuário: </label>
      <input placeholder='Digite seu nome de usuario' type="text" value={name} onChange={(e)=> setName(e.target.value)} />
      <button onClick={pesquisar}>Pesquisar</button>
      </div>

      {user && (
        <div className='perfil'>
        <div className='avatar'><img src={user.avatar_url} alt="Foto Perfil" /></div>
        
        <div>
        <h1>{user.name}</h1>
        <h2>{user.bio}</h2>

        <div className='seguidores'>
         <div className='followers'>
         <p>Followers</p>
          <button>{user.followers}</button>
         </div>
         <div className='following'>
         <p>Following</p>
          <button>{user.following}</button>
         </div>
        </div>
        </div>

      </div>
      )}
    </div>
  )
}
export default App