import {useState} from 'react';

export default function Card({info}) {
    const[ocultar,setOcultar]=useState(true);

    const mostrar =()=>{
        console.log(info)
        setOcultar(false)
    }

    const ocularInfo=()=>{
        setOcultar(true)
    }

    return(
        

        <div className='d-flex justify-content-center w-auto'>

        
        <div className="bg-blue card m-2 d-flex flex-row justify-content-between align-items-center cardCaracter w-auto ">

            <div className='bg-blue d-flex flex-column justify-content-evenly align-items-center fondo p-3'>
                <img src={info.image} alt={info.name}/>
                <h2 >{info.name}</h2>

                <button onClick={mostrar} className={ ocultar === true ?"btn btn-success":"d-none"}>Más info..</button>  

                      
            </div>
            {ocultar ==false?
                <div className='caracter-extra bg-blue'>
                    <button className="btn btn-success" onClick={ocularInfo}>X</button>

                    <ul className="list-group">

                        <li className="list-group-item bg-blue text-light ">Character Status {info.status}</li>
                        <li className="list-group-item bg-blue text-light">Species {info.species}</li>
                        <li className="list-group-item bg-blue text-light">Origin {info.origin.name}</li>
                        <li className="list-group-item bg-blue text-light">Gender {info.gender}</li>
                        
                    </ul>
                </div>:''
            }
        </div>

</div>
    )
}