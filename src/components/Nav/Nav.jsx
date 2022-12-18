import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link } from 'react-router-dom';

export default function Nav(props){
    return(
        <div className={styles.nav}>  
            <div><Link to="/home">Home</Link></div>
            <div><Link to="/about">About</Link></div>
            <div><SearchBar onSearch={props.onSearch}/></div>
            <div> <button onClick={props.logout}>Logout</button> </div>
        </div>
    );
}