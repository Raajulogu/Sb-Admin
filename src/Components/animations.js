import React, { useState } from "react";
import Base from '../Base/base';
import {IoMdArrowDropdown} from "react-icons/io";

function Animations(){
    let [state,setstate]=useState(false)
    let [drop,setdrop]=useState(false);
    let [nav,setnav]=useState(false);
    return(
        <Base>
            <div className="animations_body">
                <div className="animations_top">
                <h2>Animation Utilities</h2>
                <p>Bootstrap's default utility classes can be found on the official Bootstrap 
                Documentation page. The custom utilities below were created to extend this 
                theme past the default utility classes built into Bootstrap's framework.</p>
                </div>
                <div className="animation_box">
                    <div className="animation_box1 animation_content">
                        <h3 id="animation_h">Grow In Animation Utility</h3>
                        <p><span style={{color:"red"}}>.animated--grow-in</span></p>
                        <p>Navbar Dropdown Example:</p>
                        <div className="animation_drop">
                            <p>Navbar</p>
                            <button id="animation_but"
                            onClick={()=>setstate(!state)}
                            >Dropdown<span className="ani_icon"><IoMdArrowDropdown/></span></button>
                            {state ? <div drop_box="animation_drop_box drop_boxs">
                                <div>Action</div>
                                <div>Another action</div>
                                <div>Something else here</div>
                            </div>:""}
                        </div>
                        <p>
                        Note: This utility animates the CSS transform property, meaning it will 
                        override any existing transforms on an element being animated! In this 
                        theme, the grow in animation is only being used on dropdowns within the 
                        navbar.
                        </p>
                    </div>
                    <div className="animation_box2 animation_content">
                        <h3 id="animation_h">Fade In Animation Utility</h3>
                        <p><span style={{color:"red"}}>.animated--fade-in</span></p>
                        <p>Navbar Dropdown Example:</p>
                        <div className="animation_drop">
                            <p>Navbar</p>
                            <button id="animation_but"
                            onClick={()=>setnav(!nav)}
                            >Dropdown<span className="ani_icon"><IoMdArrowDropdown/></span></button>
                            {nav ? <div className="animation_drop_box drop_boxs">
                                <div>Action</div>
                                <div>Another action</div>
                                <div>Something else here</div>
                            </div>:""}
                        </div>
                        <p>Dropdown Button Example:</p>
                        <button id="animation_button"
                            onClick={()=>setdrop(!drop)}
                            >Dropdown<span className="ani_icon"><IoMdArrowDropdown/></span></button>
                            {drop ? <div className="animation_drop_box drop_boxd">
                                <div>Action</div>
                                <div>Another action</div>
                                <div>Something else here</div>
                            </div>:""}
                        <p>Note: This utility animates the CSS opacity property, meaning it will override 
                        any existing opacity on an element being animated!</p>
                    </div>
                </div>
            </div>
        </Base>
    );
}

export default Animations;