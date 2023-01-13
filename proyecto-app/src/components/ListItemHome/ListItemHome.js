import {Link} from "react-router-dom";

export default function ListItemHome ({dato,infoPath}){
  


    return(
        <li  className="listItem  btn  botones m-2 p-2" >
            <Link to={infoPath}>{dato}</Link>
        </li>
    )
} 


