import styles from './App.module.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Login from './components/Login/Login'

function App () {
  const [acceso,setAcceso] = useState({
    usuario:"sistemas.cavr@gmail.com",
    password:"12345"
  });
  const ruta = 'https://rickandmortyapi.com/api/character';
  const [characters,setCharacters]=useState([]);
  const onSearch = (id)=>{
    fetch(`${ruta}/${id}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.name){
        let existe = characters.find(e=>e.id === data.id)
        if (!existe){
          setCharacters((chars)=>[...chars,data]);
        }
      }else{
        window.alert('No hay personajes con ese ID');
      }
        }
 )
 .catch((error) => console.log(error));
  }
  const [actualizate, setActualizate]=useState(true);
// React.useEffect(()=>{},[]) // mount
// React.useEffect(()=>{})//update
// React.useEffect(()=>{return})//dismount
  React.useEffect(()=>{
      fetch(ruta)
      .then((res) => res.json())
      .then(({results}) => {setCharacters(results)})
      .catch((error) => console.log(error));
  },[]);

const onClose = (id)=>{
  setCharacters((chars)=>chars.filter(e=>e.id !==id));
}
  function actualiza(){
    setActualizate(!actualizate)
  }
  function popChars(){
    characters.pop();
    actualiza();
  }

  return (
    <div className={styles.App} style={{ padding: '25px' }}>
      <Nav onSearch={onSearch}/>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/detail/:id" element={<Detail/>}></Route>
      </Routes>
      <button onClick={popChars}>Pop character</button>
    </div>
  )
}

export default App