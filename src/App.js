import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import React, { useState } from 'react'

function App () {

  const ruta = 'https://rickandmortyapi.com/api/character';

  const [characters,setCharacters]=useState([{
    name:'',
    species:'',
    gender:'',
    image:''
  }]);

  const onSearch = (id)=>{
    console.log('eventoClick',id);
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.json())
    .then((data) => {
          setCharacters((chars)=>[...chars,data]);
        }
 )
 .catch((error) => console.log(error));
  }
  const [actualizate, setActualizate]=useState(true);

// React.useEffect(()=>{},[]) // mount
// React.useEffect(()=>{})//update
// React.useEffect(()=>{return})//dismount



  React.useEffect(()=>{
    // axios.get(ruta)
    // .then(({results})=>{
    //   console.log('results', results);
    //   //setCharacters(results)
    // })
    // .catch((error)=>{console.log('Error:',error)});

    fetch(ruta)
    .then((res) => res.json())
    .then(({results}) => {
          setCharacters(results);
        }
 )
 .catch((error) => console.log(error));
 
 },[]);

  function actualiza(){
    setActualizate(!actualizate)
  }
  function popChars(){
    characters.pop();
    console.log('characters',characters);
    actualiza();
  }
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav onSearch={onSearch}/>
      </div>
      <div>
        <Cards
          characters={characters}
        />
      </div>
      <button onClick={popChars}>Pop character</button>
    </div>
  )
}

export default App
