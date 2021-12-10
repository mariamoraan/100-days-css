import {React} from 'react';
import Avatar from '../../icons/Avatar';
import Github from '../../icons/Github';
import Linkedin from '../../icons/Linkedin';
import Twitter from '../../icons/Twitter';
import './styles.css';

const SecondaryMenu = ({active}) =>{
    console.log(active);
    return(
        <nav id="secondary-menu" className={active ? "active" : "inactive"}>
           <a href="https://www.linkedin.com/in/maria-moran-luaces/"><Avatar/>LinkedIn</a>
           <a href="https://github.com/mia-moran"><Github/>Github</a>
           <a href="https://mariamoran.es/"><Linkedin/>Proyectos</a>
           <a href="https://twitter.com/_mariamoraan"><Twitter/>Twitter</a>

        </nav>
    )
}

export default SecondaryMenu;