import "./Home.css";
import ListItemHome from "../ListItemHome/ListItemHome";

export default function Home() {
    
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

