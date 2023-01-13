
export default function Filters({nombreFiltro,datoFiltro,muestraValor}) {

    return(
            
        
            <section className= "section-filters row  py-1 p-5 btn botones">
                   
                <div className="form-check form-switch btn botones ">

                <input className="form-check-input" type="checkbox" role="switch" id={datoFiltro} value={datoFiltro} onChange={muestraValor}/>
                <label className="form-check-label text-success" htmlFor={nombreFiltro}>{nombreFiltro}</label>

                </div>

            </section>
            
    )
}