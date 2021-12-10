import {React} from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Menu = () =>{
    const navigate = useNavigate();
    const getActualChallenge = () => {
        const regx = /\d+/;
        var v = window.location.pathname.match(regx)[0];
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
                    <h1>Challenge {getActualChallenge()}</h1>
                    <button onClick={handleNext}><span className="material-icons">arrow_forward</span></button>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;