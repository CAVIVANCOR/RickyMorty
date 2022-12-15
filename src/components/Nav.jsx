import './Nav.css';
import SearchBar from './SearchBar';

export default function Nav(props){
    return(
        <div className='nav'>
            <SearchBar onSearch={props.onSearch}/>
        </div>
    );
}