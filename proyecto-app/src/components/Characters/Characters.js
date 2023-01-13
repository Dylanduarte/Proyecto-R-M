import{useEffect, useState} from 'react';
import { Fragment } from 'react';

import Navegation from '../Navegation/Navegation';
import Filters from "../FIlters/Filters";
import SectionCards from "../SectionCards/SectionCards";


export default function Characters() {
    let [datos,setDatos]=useState([]);
    let [infoCompleta,setInfoCompleta]=useState([]);
 
    const mostrarValor =(event)=>{

        if(event.target.checked){
                let datoFiltro=event.target.value;
                if(datoFiltro === "Alive" || datoFiltro === "Dead"){
                let resultado= datos.filter((ch)=> ch.status === datoFiltro)
                    setDatos(resultado)
                }
                if(datoFiltro === "Female" || datoFiltro === "Male"){
                    let resultado= datos.filter((ch)=> ch.gender === datoFiltro)
                    setDatos(resultado)
                }
                if(datoFiltro === "unknown"){
                    let resultado= datos.filter((ch)=> ch.origin.name === datoFiltro)
                    setDatos(resultado)
                } 
                
         }else{
            setDatos(infoCompleta)
         }
    }

    const traerInfo=async()=>{
 
        let info= await fetch("https://rickandmortyapi.com/api/character")
                        .then(respuesta => respuesta.json())
                        .catch(error => console.log("HAY UN ERROR!!" +error))
        return info
        
    }

    const mostarInfo =async ()=>{
        let dato= await traerInfo()
        let infoPersonajes= dato.results
        console.log(infoPersonajes)
        setDatos(infoPersonajes)
        setInfoCompleta(infoPersonajes)
    }

     useEffect(()=>{
        mostarInfo() 
     },[])

    return(
        <Fragment>
            <Navegation />

                <div className='d-flex justify-content-center'>
                    <section className='filters row section-filters py-3'>

                        <div>
                            
                        

                            <h2 className='text-success p-5'>Filters</h2>

                            <div className="filters d-flex justify-content-between flex-wrap">

                                <div className='form-check form-switch px-5 py-2'>
                                <Filters nombreFiltro="Character Alive" datoFiltro="Alive" muestraValor={mostrarValor}/> 
                                </div>

                                <div className='form-check form-switch px-5 py-2'>
                                <Filters nombreFiltro="Character Dead" datoFiltro="Dead" muestraValor={mostrarValor}/> 
                                </div>

                                <div className='form-check form-switch px-5 py-2'>
                                <Filters nombreFiltro="Female" datoFiltro="Female" muestraValor={mostrarValor}/> 
                                </div>
                                

                                <div className='form-check form-switch px-5 py-2'>
                                <Filters nombreFiltro="Male" datoFiltro="Male" muestraValor={mostrarValor}/> 
                                </div>
                            

                                <div className='form-check form-switch px-5 py-2'>
                                <Filters nombreFiltro="Origin Unknown" datoFiltro="unknown" muestraValor={mostrarValor}/> 
                                </div>
                                

                            </div>

                        </div>
                    </section>
                </div>
                          
            <SectionCards datos={datos} />
        </Fragment>
    )
}