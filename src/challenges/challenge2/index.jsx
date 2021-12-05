import {React, useState} from 'react';
import './styles.css';

const Challenge2 = () =>{
    const  [closed, setClosed] = useState(true);
    return(
        <div id="challenge-2">
            <nav onClick={()=>{setClosed(!closed)}} class={closed ? "closed" : "not-closed"}>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </nav>
        </div>
    )
}

export default Challenge2;