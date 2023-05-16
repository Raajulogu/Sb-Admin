import React from "react";
import { useHistory } from "react-router-dom";

function Forget(){
    let history = useHistory()
    return(
        <div className="forget_body">
            <div className="forget">
            <div>
                <img className="forget_img" src="https://source.unsplash.com/oWTW-jNGl9I/600x800"
                alt="forget password" />
            </div>
            <div className="forget_content">
                <h2>Forgot Your Password?</h2>
                <p id="forget_p">We get it, stuff happens. Just enter
                 your email address below and we'll send you
                 a link to reset your password !</p>
                <input id="forget_input" type="text" placeholder="Enter Email Address..."/>
                <button id="forget_reset"
                onClick={()=>history.push("/login")}
                >Reset Password</button>
                <div>
                    <button
                    onClick={()=>history.push("/register")}
                    id="forget_but"
                    >Create an Account !</button>
                    <br/>
                    <button
                    onClick={()=>history.push("/login")}
                    id="forget_but"
                    >Already have an account? Login !</button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Forget;