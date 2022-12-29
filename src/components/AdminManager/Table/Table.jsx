import React from "react";
import Row from "./Row";

const Table = (props)=>{
    return(
        <div className="tableContainer">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"># User Id</th>
                        <th scope="col">Username</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.usersList.map((item, key) => {
                            return (
                                <Row key={key} id={item.id} fn={item.firstName} ln={item.lastName} email={item.email} deleter={props.deleter}/>
                            )
                        })
                    }
                </tbody>
                      
                    
                                     
             
            </table>
        </div>
    )
}

export default Table;