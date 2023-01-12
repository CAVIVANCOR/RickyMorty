import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { agregarPersonaje, eliminarPersonaje } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

export function Card(props) {
   const [isFav, setIsFav] = useState(false);
   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   const handleFavorite = ()=>{
      if (isFav){
         setIsFav(false);
         props.eliminarPersonaje(props.id);
      }else{
         setIsFav(true);
         props.agregarPersonaje(props);
      }
   }
   return (
      <div key={props.id} className={styles.card}>
         {isFav ? (<button onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>)}
         <button onClick={props.onClose}>X</button>
         <Link to={`/detail/${props.id}`}>
            <h2>{props.name}</h2>
         </Link>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img className={styles.img} src={props.image} alt={props.name} />
      </div>
   );
}

export function mapStateToProps (state){
   return {
      myFavorites : state.myFavorites
   }
}



export function mapDispatchToProps (dispatch){
   return {
      agregarPersonaje: (personaje)=>{dispatch(agregarPersonaje(personaje))},
      eliminarPersonaje: (id)=>{dispatch(eliminarPersonaje(id))}
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
