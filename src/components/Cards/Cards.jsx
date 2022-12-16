import styles from './Cards.module.css';
import Card from '../Card/Card';

export default function Cards(props) {
   const { characters } = props;
   return (
   <div className={styles.cards}>
      {characters.map((character,index)=>(
      <Card 
      id={character.id}
      name={character.name} 
      species={character.species} 
      gender={character.gender} 
      image={character.image} 
      onClose={()=>props.onClose(character.id)}/>
      ))}
   </div>
   );
}
