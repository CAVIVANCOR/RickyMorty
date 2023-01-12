import styles from './App.module.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'
import { useDispatch } from 'react-redux'
import { eliminarPersonaje } from './redux/actions'

function App () {
  const [access, setAccess] = useState(false);
  const username = "sistemas.cavr@gmail.com";
  const password = "123456";
  const ruta = 'http://localhost:3001/rickandmorty/character';
  const [characters,setCharacters]=useState([]);

const dispatch = useDispatch();

  let ubicacion = useLocation();
  let navigate = useNavigate();
  console.log('ubicacion',ubicacion);
  
  const onSearch = (id)=>{
    console.log("front Id",id)
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

  useEffect(()=>{
      fetch(ruta)
      .then((res) => res.json())
      .then(({results}) => {setCharacters(results)})
      .catch((error) => console.log(error));
  },[]);

  useEffect(() => {
    !access && navigate('/');
    //eslint-disable-next-line react-hooks/exhaustive-deps
 }, [access]);

const onClose = (id)=>{
  dispatch(eliminarPersonaje(id));
  setCharacters((chars)=>chars.filter(e=>e.id !==id));
};

  function actualiza(){
    setActualizate(!actualizate)
  }

  function popChars(){
    characters.pop();
    actualiza();
  };
  
const login = (userData) =>{
  if (userData.username===username && userData.password===password){
    setAccess(true);
    navigate('/home');
  }else{
    setAccess(false);
  }
};
const logout=()=>{
  setAccess(false);
  navigate('/');
}
  return (
    <div className={styles.App} style={{ padding: '25px' }}>
      {ubicacion.pathname!=="/" ? <Nav onSearch={onSearch} logout={logout}/>:null}
      <Routes>
        <Route path="/" element={<Form login={login}/>}></Route>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/detail/:id" element={<Detail/>}></Route>
        <Route path="/favorites" element={<Favorites/>}></Route>
      </Routes>
      <button onClick={popChars}>Pop character</button>
    </div>
  )
}

export default App