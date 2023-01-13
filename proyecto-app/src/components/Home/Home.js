import "./Home.css";
import ListItemHome from "../ListItemHome/ListItemHome";


/* Este componente corresponde a la pagina inicial (la del cuadrado blanco con los botones.
    La navegacion de las hojas secundarias las hacemos en el componente Navegation*/

export default function Home() {
    //header bg-primary
    return(
        
        <header className="header d-flex flex-column justify-content-center align-items-center">

            <div className="container-header justify-content-center">
                <h1 className="titulo1 row justify-content-center">Proyect - Rick & Morty</h1>
                <nav className="row navbar align-items-center">
                    <ul className="nav-pills d-flex justify-content-center ">

                        <ListItemHome dato="Characters" infoPath="/characters"/>
                        <ListItemHome dato="Contact" infoPath="/contact"/>
                        
                    </ul>
                </nav>
            </div>
        </header>
    )
}

