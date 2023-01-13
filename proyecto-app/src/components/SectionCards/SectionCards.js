import Card from "../Card/Card";
import './SectionCards.css'




export default function SectionCards({datos}) {

   
    return(

        <div className="section-card">

            <section className="row section-cards p-5 m-4 ">

                {datos.map((dato)=>{ 
                    return <Card key={dato.id} info={dato}/>
                })} 
            
            </section>

        </div>
    )
}
