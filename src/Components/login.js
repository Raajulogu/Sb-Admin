import React from "react";
import { useHistory } from "react-router-dom";
import {AiOutlineGoogle} from "react-icons/ai";
import {ImFacebook} from "react-icons/im";

function Login(){
    let history=useHistory()
    return(
        <div className="login_body">
        <div className="login">
            <img id="login_img" src="https://source.unsplash.com/K4mSJ7kc0As/600x800"
             alt="Login"/>
            <div className="login_content">
                <h1 id="login_head">Welcome Back!</h1>
                <input id="login_int" type="text" placeholder="Enter Email Address"/>
                <br/>
                <input id="login_int" type="password" placeholder="Password"
                />
                <br/>
                <input type="checkbox" id="remember" name="remember" value="remember"/>
                <label for="remember"> Remember me</label>
                <br/>
                <button 
                onClick={()=>history.push("/")}
                className="login_but  login_login">Login</button>
                <div>
                <button 
                onClick={()=>history.push("/")}
                className="login_but login_google "><span className="log_icon"><AiOutlineGoogle/></span>
                Login with Google</button>
                <br/>
                <button 
                onClick={()=>history.push("/")}
                className="login_but login_facebook "><span className="log_icon"><ImFacebook/></span>
                Login with Facebook</button>
                </div>
                <div>
                <button 
                onClick={()=>history.push("/forget")}
                className="login_but login_forget ">Forgot Password ?</button>
                <br/>
                <button
                onClick={()=>history.push("/register")}
                className="login_but login_forget ">Create an Account !</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Login;