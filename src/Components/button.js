import React from "react";
import Base from "../Base/base";
import {ImFacebook} from "react-icons/im";
import {AiOutlineCheck} from "react-icons/ai";
import {TbAlertCircleFilled} from "react-icons/tb";
import {AiFillWarning} from "react-icons/ai";
import {AiFillDelete} from "react-icons/ai";
import {BsFillFlagFill} from "react-icons/bs";
import {FiArrowRight} from "react-icons/fi";
import {AiOutlineGoogle} from "react-icons/ai";

function Button(){
    return(
        <Base>
        <div className="button_body">
            <h1>Buttons</h1>
            <div className="button_box">
            <div className="button_left">
                <div className="button_circle">
                    <h3 className="button_h">Circle Buttons</h3>
                    <p>Use Font Awesome Icons (included with this theme package) along with the 
                        circle buttons as shown in the examples below!</p>
                    <br/>
                    <p><span style={{color:"red"}}>.btn-circle</span></p>
                    <div id="btn_circle">
                        <button className="button_but fb"><div><ImFacebook/></div></button>
                        <button className="button_but correct"><div><AiOutlineCheck/></div></button>
                        <button className="button_but i"><div><TbAlertCircleFilled/></div></button>
                        <button className="button_but alert_but"><div><AiFillWarning/></div></button>
                        <button className="button_but delete"><div><AiFillDelete/></div></button>
                    </div>
                    <br/>
                    <p><span style={{color:"red"}}>.btn-circle .btn-sm</span></p>
                    <div id="btn_small">
                        <button className="button_but but_sm fb"><div><ImFacebook/></div></button>
                        <button className="button_but but_sm correct"><div><AiOutlineCheck/></div></button>
                        <button className="button_but but_sm i"><div><TbAlertCircleFilled/></div></button>
                        <button className="button_but but_sm alert_but"><div><AiFillWarning/></div></button>
                        <button className="button_but but_sm delete"><div><AiFillDelete/></div></button>
                    </div>
                    <br/>
                    <p><span style={{color:"red"}}>.btn-circle .btn-lg</span></p>
                    <div id="btn_large">
                        <button className="button_but but_la fb"><div><ImFacebook/></div></button>
                        <button className="button_but but_la correct"><div><AiOutlineCheck/></div></button>
                        <button className="button_but but_la i"><div><TbAlertCircleFilled/></div></button>
                        <button className="button_but but_la alert_but"><div><AiFillWarning/></div></button>
                        <button className="button_but but_la delete"><div><AiFillDelete/></div></button>
                    </div>
                </div>
                <div className="button_brand">
                    <h3 className="button_h">Brand Buttons</h3>
                    <p>Google and Facebook buttons are available featuring each company's 
                    respective brand color. They are used on the user login and 
                    registration pages.</p>
                    <br/>
                    <p>You can create more custom buttons by adding a new color variable 
                    in the <span style={{color:"red"}}>_variables.scss</span> file and then 
                    using the Bootstrap button variant mixin to create a new style, as 
                    demonstrated in the <span style={{color:"red"}}>_buttons.scss</span> file.</p>
                    <button id="button_google"><span className="but_icon"><AiOutlineGoogle/></span>.btn-google</button>
                    <button id="button_facebook"><span className="but_icon"><ImFacebook/></span>.btn-facebook</button>
                </div>
            </div>
            <div className="button_right">
                <div className="button_split">
                    <h3 className="button_h">Split Buttons with Icon</h3>
                    <p>Works with any button colors, just use the <span style={{color:"red"}}>
                    .btn-icon-split</span> class and the markup in the examples below. The 
                    examples below also use the <span style={{color:"red"}}>.text-white-50</span> 
                    helper class on the icons for additional styling, but it is not required.</p>
                    <button className="buton_primary"><span className="but_icon"><BsFillFlagFill/></span>
                    Split Button Primary</button>
                    <button className="buton_success"><span className="but_icon"><AiOutlineCheck/></span>
                    Split Button Success</button>
                    <button className="buton_info"><span className="but_icon"><TbAlertCircleFilled/></span>
                    Split Button Info</button>
                    <button className="buton_warning"><span className="but_icon"><AiFillWarning/></span>
                    Split Button Warning</button>
                    <button className="buton_danger"><span className="but_icon"><AiFillDelete/></span>
                    Split Button Danger</button>
                    <button className="buton_secondary"><span className="but_icon"><FiArrowRight/></span>
                    Split Button Secondary</button>
                    <button className="buton_light"><span className="but_icon"><FiArrowRight/></span>
                    Split Button Light</button>
                    <p>Also works with small and large button classes !</p>
                    <button className="buton_split_small"><span className="but_icon"><BsFillFlagFill/></span>
                    Split Button Small</button>
                    <button className="buton_split_large"><span className="but_icon"><BsFillFlagFill/></span>
                    Split Button Large</button>
                </div>
            </div>
            </div>
        </div>
        </Base>
    );
}

export default Button;