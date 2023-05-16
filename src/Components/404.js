import React from "react";
import Base from "../Base/base";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Error(){
    let history=useHistory();
    return(
        <Base>
        <div className="error">
            <h1 id="error_h">404</h1>
            <p id="error_p">Page Not Found</p>
            <div>
                <p>It looks like you found a glitch in the matrix...</p>
                <button id="error_but" onClick={()=>history.push("/")}>Back to Dashboard</button>
            </div>
        </div>
        </Base>
    );
}

export default Error;