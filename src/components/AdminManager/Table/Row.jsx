import React from "react";

const Row = (props)=>{
    return(
        <tr>
            <th scope="row">{props.id}</th>
            <td>{props.fn}</td>
            <td>{props.ln}</td>
            <td>{props.email}</td>
            <td ><button type="" className="btn btn-warning" onClick={()=>props.deleter(props.id)}>Delete User</button></td>
        </tr>
    )
}

export default Row;