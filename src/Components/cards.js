import React, { useState } from "react";
import Base from "../Base/base";
import {BsCurrencyDollar} from "react-icons/bs";
import {BiTask} from "react-icons/bi";
import {TbMessageCircle2} from "react-icons/tb";
import {RiShoppingBagFill} from "react-icons/ri";

function Cards(){
    let [state,setstate]=useState(false);
    let [collapse,setcollapse]=useState(true);
    return(
        <Base>
        <div className="card_body">
        <h1>Cards</h1>
        <div className='topics'>
                    <div className='topics_content monthly'><p>EARNINGS (MONTHLY)<div>$40,000</div></p>
                    <div className='dash_icon'><RiShoppingBagFill/></div></div>
                    <div className='topics_content annual'><p>EARNINGS (Annual)<div>$215,000</div></p>
                    <div className='dash_icon'><BsCurrencyDollar/></div></div>
                    <div className='topics_content task-50'><p>TASKS<b> 50%</b><div>
                        <div className='empty_top'><div className='coloured task'></div></div>
                        </div></p><div className='dash_icon'><BiTask/></div></div>
                    <div className='topics_content pending'><p>PENDING REQUESTS<div>18</div></p>
                    <div className='dash_icon'><TbMessageCircle2/></div></div>
                </div>
            <div className='card_box2'>
                <div className="card_content">
                    <h3 className="card_h2">Default Card Example</h3>
                    <p>
                    This card uses Bootstrap's default styling with no utility classes added. 
                    Global styles are the only things modifying the look and feel of this 
                    default card example.
                    </p>
                </div>
                <div className="card_content">
                    <div className="card_h2">
                    <h3 id="card_h1">Dropdown Card Example</h3>
                    <button onClick={()=>setstate(!state)}id="dot_but">...</button>
                    </div>
                    {state ? 
                    <div className="card_drop">
                        <div id="drop_head">DROPDOWN HEADER</div>
                        <div>Action</div>
                        <div>Another action</div>
                        <div>Something else here</div>
                    </div>:""}
                    
                    <p>
                    Dropdown menus can be placed in the card header in order to extend the 
                    functionality of a basic card. In this dropdown card example, the Font 
                    Awesome vertical ellipsis icon in the card header can be clicked on in 
                    order to toggle a dropdown menu.
                    </p>
                </div>
            </div>
            <div className="card_box2">
                <div className="card_content">
                    <h3 className="card_h2">Basic Card Example</h3>
                    <p>
                    The styling for this basic card example is created by using default 
                    Bootstrap utility classes. By using utility classes, the style of 
                    the card component can be easily modified with no need for any 
                    custom CSS!
                    </p>
                </div>
                <div className="card_content collapse">
                <div className="card_h2">
                <h3 id="card_h1">Collapsable Card Example</h3>
                    <button onClick={()=>setcollapse(!collapse)}id="dot_but">...</button>
                    </div>
                    {collapse ?<p className="collapse_p">
                    The styling for this basic card example is created by using default 
                    Bootstrap utility classes. By using utility classes, the style of 
                    the card component can be easily modified with no need for any 
                    custom CSS!
                    </p>:""}
                </div>
            </div>
        </div>
        </Base>
    );
}

export default Cards;