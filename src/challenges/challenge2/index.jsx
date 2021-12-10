import {React, useState} from 'react';
import './styles.css';

const Challenge2 = () =>{
    const  [closed, setClosed] = useState(true);
    return(
        <div id="challenge-2">
            <nav onClick={()=>{setClosed(!closed)}} className={closed ? "closed" : "not-closed"}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </nav>
        </div>
    )
}

export default Challenge2;