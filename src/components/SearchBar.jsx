import { useState } from 'react';
import './SearchBar.css';

export default function SearchBar(props) {
   const [inputID,setInputID] = useState("");
   const handleValorId=(event)=>{
      setInputID(event.target.value);
   };
   return (
      <div className='search'>
         <input id="id" onChange={handleValorId}/>
         <button className='boton' onClick={()=>props.onSearch(inputID)}>Agregar</button>
      </div>
   );
}
