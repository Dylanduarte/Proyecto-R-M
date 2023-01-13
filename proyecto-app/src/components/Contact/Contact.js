import { Fragment } from 'react';

import Navegation from '../Navegation/Navegation'

export default function Contact(){
    
    return(
        <Fragment>
            <Navegation/>

                <div className='container'>
                    <main className ="container-fluid container-main h-75">

                        <div className="d-flex flex-column justify-content-center align-items-center m-auto mt-5 w-75 h-75 container-contact bg-blue">

                            <h3 className='row mt-5'>Contacto</h3>
                            <h4 className='row mt-3'>Dejanos tus datos para que podamos contactarte</h4>
                        



                            <form className="row g-3 p-4 w-100" action=''>

                                <div className="col-md-6">
                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="nombre" />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="correo" className="form-label">Correo Electrónico</label>
                                    <input type="email" className="form-control" id="correo" />
                                </div>  

                                <div className="col-12">
                                    <label htmlFor="mensaje" className="form-label">Mensaje</label>
                                    <textarea id="mensaje" className="form-control"></textarea>
                                </div>
                                
                                <div className="col-12 mb-5">
                                <button type="submit" className="btn btn-primary">Registrarse</button>
                                </div>
                                
                            </form>
                        </div>
                    </main>
                </div>
        </Fragment>
        
    )
} 
