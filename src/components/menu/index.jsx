import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import SecondaryMenu from '../secondaryMenu';
import './styles.css';

const Menu = () =>{
    const [active, setActive] = useState(false);
    const navigate = useNavigate();
    const getActualChallenge = () => {
        const regx = /\d+/;
        var v = window.location.pathname.match(regx) != null ? window.location.pathname.match(regx)[0] : 1;
        return parseInt(v);
    }
    const handlePrev = () => {
        const actual = getActualChallenge();
        var prev = actual > 1 ? actual - 1 : 100;
        challengeNavigate(prev);
    }
    const handleNext = () => {
        const actual = getActualChallenge();
        challengeNavigate(actual < 100 ? actual + 1 : 1);
    }
    const challengeNavigate = (pt) => {
        navigate('/challenge-'+pt)
    }
    return(
        <nav id="main-menu">
            <ul>
                <li className="arrow-navigator">
                    <button onClick={handlePrev}><span className="material-icons">arrow_back</span></button>
                    <p>Challenge {getActualChallenge()}</p>
                    <button onClick={handleNext}><span className="material-icons">arrow_forward</span></button>
                </li>
                <li>
                    <button onClick={()=>{setActive(!active)}}><span className="material-icons">menu</span></button>
                </li>
            </ul>
            <SecondaryMenu active={active}/>
        </nav>
    )
}

export default Menu;