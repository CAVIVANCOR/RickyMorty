import styles from './Favorites.module.css';
import { connect, useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../../redux/actions';

export function Favorites (props){
    const dispatch = useDispatch();
    const ordenamiento=(e)=>{
        console.log('evento',e.target.value);
        dispatch(orderCards(e.target.value))
    }
    const filtrar=(e)=>{
        console.log('evento',e.target.value);
        dispatch(filterCards(e.target.value))
    }
    return (
        <div className={styles.cards}>
            <div className={styles.menu}>
                <div>
                    <select id="ordenamiento" name="orden" onChange={ordenamiento}>
                        <option value="Ascendente">Ascendente</option>
                        <option value="Descendente">Descendente</option>
                    </select>
                </div>
                <div>
                    <select id="filtrado" name="filtrar" onChange={filtrar}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="unknown">unknown</option>
                    </select>
                </div>
            </div>
            {props.myFavorites.map((fav, index)=>(
                <div className={styles.card} key={index}>
                    <h2>{fav.name}</h2>
                    <h2>{fav.species}</h2>
                    <h2>{fav.gender}</h2>
                    <img className={styles.img} src={fav.image} alt={fav.name}/>
                </div>
                )
            )}
        </div>
    )
}

export const mapStateToProps =(state)=>{
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites);