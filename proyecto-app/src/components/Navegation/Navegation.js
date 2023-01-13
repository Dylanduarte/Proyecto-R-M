import {Link} from "react-router-dom";
import './Navegation.css';
export default function Navegation() {
    return(
       <header className="bg-blue">
        
         <nav className=" navbar navbar-expand.lg w-100 bg-blue align-items-center bg-transparent">

            <div className="container-fluid">

                <h1 className="titulo navbar-brand">Rick & Morty </h1>
                    
                <ul className="nav nav-pills">

                    <li className="mx-2 nav-item "> 
                        <Link to="/">Home</Link>  
                    </li>
                    <li className="mx-2 nav-item">
                        <Link to="/characters">Characters</Link>
                    </li>
                    <li className="mx-2 nav-item">
                         <Link to="/contact">Contact</Link>
                    </li>

                </ul>
                </div>
        </nav>
        
       </header>
    )
}

