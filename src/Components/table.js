import React from "react";
import Base from "../Base/base";
import { useState } from "react";
import data from '../Base/table_data.js'

function Table(){
    let [num,setnum]=useState(1);
    let limit=[];
    for(var i=num;i<num+10;i++){
        if(data[i]){
            limit.push(data[i])
        }
    }


    return(
        <Base>
        <div className="table_body">
            <div className="table_head">
                <h2>Tables</h2>
                <p>DataTables is a third party plugin that is used to generate 
                the demo table below. For more information about DataTables, 
                please visit the official DataTables documentation.</p>
            </div>
            <div className="table_box">
                <h5 id="table_h">Datatables Example</h5>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                    </tr>
                    {limit.map((value)=>
                    (<tr>
                        <td>{value.name}</td>
                        <td>{value.position}</td>
                        <td>{value.office}</td>
                        <td>{value.age}</td>
                        <td>{value.start}</td>
                        <td>{value.salary}</td>
                    </tr>)
                    )}

                </table>
                <div className="table_bottom">
                    <p>Showing {num} to {num+9} of {data.length} entries</p>
                    <div className="table_button">
                       <button className="table_but table_change"onClick={()=>{
                            if(num>10){
                                setnum(num-10)
                            }
                        }}>Previuos</button>
                       <button className="table_but " onClick={()=>setnum(1)}>1</button>
                       <button className="table_but " onClick={()=>setnum(11)}>2</button>
                       <button className="table_but " onClick={()=>setnum(21)}>3</button>
                       <button className="table_but " onClick={()=>setnum(31)}>4</button>
                       <button className="table_but " onClick={()=>setnum(41)}>5</button>
                       <button className="table_but table_change"onClick={()=>{
                         console.log(num+10)
                         console.log(data.length)
                            if(num+10<(data.length)){
                                setnum(num+10)
                            }
                        }}>Next</button>
                    </div>
                </div>
            </div>
        </div>
        </Base>
    );
}

export default Table;