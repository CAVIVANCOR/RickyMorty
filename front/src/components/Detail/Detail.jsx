import styles from './Detail.module.css';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Detail() {
  const {id} = useParams();
  const [character,setCharacter] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    console.log(id);
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
       .then((response) => response.json())
       .then((char) => {
          if (char.name) {
             setCharacter(char);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       })
       .catch((err) => {
          window.alert('No hay personajes con ese ID');
       });
    return setCharacter({});
 }, [id]);
const handleBack =()=>{
  navigate('/');
}
  return (
    <div>
      <button onClick={handleBack}>Volver</button>
      <h2>{character.id}</h2>
      <h2>{character.name}</h2>
      <h2>{character.status}</h2>
      <h2>{character.species}</h2>
      <h2>{character.gender}</h2>
      <img className={styles.img} src={character.image} alt={character.name} />
    </div>
  )
}
