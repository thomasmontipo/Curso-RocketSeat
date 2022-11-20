import { Cards } from '../cards/cards'
import './style.css'
import React, {useState} from 'react';

function Home() {
  const [studentName, setStudentName] = useState('Nome');
  return (
    <div className='container'>
      <h1>Nome: {studentName} </h1>
      <input 
        type="text" 
        placeholder="Digite o nome"
        onChange={e => setStudentName(e.target.value)}
      />
      <button type="button">Adicionar</button>
      <Cards name="Thomas Henrique" time="11:27:45"/>
      <Cards name="Jonatas" time="17:32:58"/>

    </div>
  )
}

export default Home
