import { Cards } from '../cards/cards'
import './style.css'
import React, {useEffect, useState} from 'react';


function Home() {
  const [studentName, setStudentName] = useState('Nome');
  const [students, setStudents]  = useState([]);
  const [user, setUser] = useState([{name:"", avatar:""}]);

  function handleAddStudent(){

    const newStudent = {
        name: studentName,
        time: new Date().toLocaleTimeString("pt-br", {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
    }

setStudents(prevState => [...prevState, newStudent])



  }

useEffect(() => {
  fetch('https://api.github.com/users/thomasmontipo')
  .then(response => response.json())
  .then(data => {
    setUser({
      name: data.name,
      avatar: data.avatar_url,
    })
  })
},[]);

  return (
    <div className='container'>
      <header>
        <h1>Lista de presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="" />
        </div>
      </header>
      <input 
        type="text" 
        placeholder="Digite o nome"
        onChange={e => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>Adicionar</button>
      {students.map(student => <Cards key={student.time} name={student.name} time={student.time}/>)}

    </div>
  )
}

export default Home
