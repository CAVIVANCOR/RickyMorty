import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(props) {
   const [inputID,setInputID] = useState("");
   const handleValorId=(event)=>{
      setInputID(event.target.value);
   };
   return (
      <div className={styles.search}>
         <input type="text" id="id" placeholder='ID' value={inputID} on onChange={handleValorId}/>
         <button className='boton' onClick={()=>props.onSearch(inputID)}>Agregar</button>
      </div>
   );
}
