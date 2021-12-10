import {React} from 'react';
import './styles.css';
import error from '../../assets/404.png';
const NotFound = () =>{
   
    return(
        <div id="not-found">
           <img src={error} alt="Error 404 : Page not found" />
        </div>
    )
}

export default NotFound;