import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState()
  
  useEffect(() =>{
    fetch("https://api.github.com/users/Spyke27")
    .then((res) => res.json())
    .then((json)=> setUser(json));
  }, [])



  return (
    <div className="App">

      {user && (
        
        <div className='perfil'>
        
        <div className='avatar'><img src={user.avatar_url} alt="Foto Perfil" /></div>
        <h1>{user.name}</h1>
        <h2>{user.bio}</h2>

        <div className='seguidores'>
         <div className='followers'>
         <p>seguidores</p>
          <button>{user.followers}</button>
         </div>
         <div className='following'>
         <p>seguindo</p>
          <button>{user.following}</button>
         </div>
        </div>

      </div>
        
      )}
    </div>
  )
}
export default App