import React from "react";
import { useHistory } from "react-router-dom";
import {AiOutlineGoogle} from "react-icons/ai";
import {ImFacebook} from "react-icons/im";


function Register(){
    let history=useHistory();
    return(
        <div className="register_body">
            <div className="register">
                <img id="register_img" src="https://source.unsplash.com/Mv9hjnEUHR4/600x800"
                 alt="Register"/>
                <div className="register_content">
                    <h1 id="register_head">Create an account!</h1>
                    <div className="register_input">
                    <input id="register_int"
                    type="text" placeholder="First Name"
                    />
                    <input id="register_int"
                    type="text" placeholder="Last name"
                    />
                    </div>
                    <input id="register_mail" type="text" placeholder="Email Address"/>
                    <div className="register_input">
                    <input id="register_int"
                    type="password" placeholder="Enter Password"
                    />
                    <input id="register_int"
                    type="password" placeholder="Confirm Password"
                    />
                    </div>
                    <button 
                    onClick={()=>history.push("/login")}
                    className="register_but  register_register">Register</button>
                    <div>
                    <button 
                    onClick={()=>history.push("/")}
                    className="register_but register_google "><span className="log_icon"><AiOutlineGoogle/></span>
                    Register with Google</button>
                    <br/>
                    <button 
                    onClick={()=>history.push("/")}
                    className="register_but register_facebook "><span className="log_icon"><ImFacebook/></span>
                    Register with Facebook</button>
                    </div>
                    <div>
                    <button 
                    onClick={()=>history.push("/forget")}
                    className="register_but register_forget ">Forgot Password ?</button>
                    <br/>
                    <button
                    onClick={()=>history.push("/login")}
                    className="register_but register_forget ">Already have an account? Login!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;