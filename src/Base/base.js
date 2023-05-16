import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import { BiSearchAlt2 } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import {GrMail} from "react-icons/gr";
import {BiWinkSmile} from "react-icons/bi";
import {BsSpeedometer2} from "react-icons/bs";
import {AiFillSetting} from "react-icons/ai";
import {AiFillTool} from "react-icons/ai";
import {AiFillFolder} from "react-icons/ai";
import {AiOutlineBarChart} from "react-icons/ai";
import {AiOutlineTable} from "react-icons/ai";
import {CgProfile} from "react-icons/cg";
import {AiOutlineBars} from "react-icons/ai";
import {RiLogoutBoxRFill} from "react-icons/ri";

function Base({ children }) {
    let [comp, setcomp] = useState(false);
    let [util, setutil] = useState(false);
    let [page, setpage] = useState(false);
    let [alarm,setalarm]=useState(false);
    let [msg,setmsg]=useState(false);
    let [user,setuser]=useState(false);
    let [log,setlog]=useState(false);

    let history = useHistory();
    return (
        <div className="container">
            <div className="row">
            {log?
                <div className="alert">
                    <Alert variant="danger" onClose={() => setlog(false)} dismissible>
                    <Alert.Heading>Ready to Leave?</Alert.Heading>
                    <p>
                    Select "Logout" below if you are ready to end 
                    your current session
                    </p>
                    <button className="base_cancel base_but"
                    onClick={()=>setlog(false)}
                    >Cancel</button>
                    <button className="base_logout base_but"
                    onClick={()=>history.push("/login")}
                    >Logut</button>
                </Alert>
                </div>
                :""}
                <div className="left_side">
                    <button onClick={() => history.push("/")} id="admin"><div className="top_icon"><BiWinkSmile/></div>SB ADMIN<sup>2</sup></button>
                    <button onClick={() => history.push("/")} id="words"><div className="base_icon"><BsSpeedometer2/></div>Dashboard</button>
                    <h5 id="interface">INTERFACE</h5>
                    <div className="components">
                        <button id="words"
                            onClick={() => {
                                setcomp(!comp)
                                setutil(false)
                                setpage(false)
                                
                            }}><div className="base_icon"><AiFillSetting/></div>Components</button>
                        {comp ? <div className="components_content">
                            <button onClick={() => history.push("/button")} id="words">Buttons</button>
                            <button onClick={() => history.push("/cards")} id="words">Cards</button>
                        </div> : ""}
                    </div>
                    <div className="utilities">
                        <button id="words"
                            onClick={() => {
                                setutil(!util)
                                setcomp(false)
                                setpage(false)
                            }}><div className="base_icon"><AiFillTool/></div>Utilities</button>
                        {util ? <div className="utilities_content">
                            <button onClick={() => history.push("/colors")} id="words">Colors</button>
                            <button onClick={() => history.push("/borders")} id="words">Borders</button>
                            <button onClick={() => history.push("/animations")} id="words">Animations</button>
                            <button onClick={() => history.push("/others")} id="words">Other</button>
                        </div> : ""}
                    </div>
                    <h5 id="addon">ADDONS</h5>
                    <div className="page">
                        <button id="words"
                            onClick={() => {
                                setpage(!page)
                                setutil(false)
                                setcomp(false)
                            }}><div className="base_icon"><AiFillFolder/></div>Pages</button>
                        {page ? <div className="page_content">
                            <button onClick={() => history.push("/login")} id="words">Login</button>
                            <button onClick={() => history.push("/register")} id="words">Register</button>
                            <button onClick={() => history.push("/forget")} id="words">Forgot Password</button>
                            <button onClick={() => history.push("/errors")} id="words">404 Page</button>
                            <button onClick={() => history.push("/blank")} id="words">Blank Page</button>
                        </div> : ""}
                    </div>
                    <button onClick={() => history.push("/chart")} id="word" className="chart">
                        <div className="base_icon"><AiOutlineBarChart/></div>Charts</button>
                    <button onClick={() => history.push("/table")} id="word" className="table">
                        <div className="base_icon"><AiOutlineTable/></div>Tabels</button>
                </div>
                <div className="search_head">
                    <div className="search_font_box">
                    <input
                        id="search"
                        placeholder="Search for"
                    />< BiSearchAlt2 className="search_font"/>
                    </div>
                    <div className="base_top">
                        <button id="base_alarm" onClick={()=>{setalarm(!alarm) 
                            setmsg(false)
                            setuser(false)}}><IoIosNotifications/><sup className="base_sup">3+</sup></button>
                        {alarm ?<div id="alarm_content">
                            <h6 id="base_sidehead">ALERTS CENTER</h6>
                            <div id="alarm_body">
                                <p id="body_dup">December 12,2019</p>
                                <button id="body_main">A new monthly report is ready to download !</button>
                                <p id="body_dup">December 7,2019</p>
                                <button id="body_main">$290.29 has been deposited into your account!</button>
                                <p id="body_dup">December 2,2019</p>
                                <button id="body_main">Spending Alert : We've noticed unusually high spending
                                    for your account
                                </button>
                                <button id="body_dup">Show All Alerts</button>
                            </div>
                        </div>:""
                        }
                        <button id="base_alarm" clsaaName="base_logo"onClick={()=>{setmsg(!msg)
                        setalarm(false)
                        setuser(false)
                        }}><GrMail/><sup className="base_sup">7</sup></button>
                        {msg ?<div id="alarm_content">
                            <h6 id="base_sidehead">MESSAGE CENTER</h6>
                            <div id="alarm_body">
                                <button id="body_main">Hi there! I am wondering if you...
                                <p id="body_dup">Emily Fowler-58m</p>
                                </button>
                                <button id="body_main">I have the photos that you ordere....
                                <p id="body_dup">Jae Chun-1d</p></button>
                                <button id="body_main">Last month's report looks great,I...
                                <p id="body_dup">Morgan Alvarez-2d</p>
                                </button>
                                <button id="body_main">Am I a good boy? The reason I as...
                                <p id="body_dup">Chicken the Dog-2w</p>
                                </button>
                                <button id="body_dup">Read More Messages</button>
                            </div>
                        </div>:""
                        }
                        <button id="base_alarm" onClick={()=>{setuser(!user)
                        setalarm(false)
                        setmsg(false)
                        }}>Douglas McGee<BsFillPersonFill/></button>
                        {user?<div id="base_user">
                                <div id="base_user_top">
                                <button 
                                onClick={()=>{setuser(!user)}}
                                id="body_user"><span className="base_log_icon"><CgProfile/></span>Profile</button>
                                <br/>
                                <button 
                                onClick={()=>{setuser(!user)}}
                                id="body_user"><span className="base_log_icon"><AiFillSetting/></span>Settings</button>
                                <br/>
                                <button id="body_user"
                                onClick={()=>{setuser(!user)}} 
                                ><span className="base_log_icon"><AiOutlineBars/></span>Activity Log</button>
                                </div>
                                <button onClick={()=>
                                    {setlog(true)
                                    setuser(!user)}
                                    } id="body_user"><span className="base_log_icon"><RiLogoutBoxRFill/></span>Logout</button>
                            </div>:""}
                    </div>
                </div>
                <br />
                <div className="right_side">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Base;