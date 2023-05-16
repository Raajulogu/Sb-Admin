import React from 'react';
import Base from '../Base/base.js';
import {BsCurrencyDollar} from "react-icons/bs";
import {BiTask} from "react-icons/bi";
import {TbMessageCircle2} from "react-icons/tb";
import {RiShoppingBagFill} from "react-icons/ri";
import {MdDownload} from "react-icons/md";

function Dashboard() {
    return (
        <Base>
            <div className='dashboard_content'>
                <span className='dash_head'><h1>Dashboard</h1><p id="generate"><span className='generate_icon'><MdDownload/></span>Generate Report</p></span>
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
                <div className='box_2'>
                    <div className='box_2_left'>
                    <div className='percentage'>
                        <h3 id="project">Projects</h3>
                        <div>
                            <p>Server Migration <span id="percent_end1">20%</span></p>
                            <div>
                                <div className='empty '>
                                <div className='coloured server'></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Sales Tracking<span id="percent_end2">40%</span></p>
                            <div>
                                <div className='empty '>
                                <div className='coloured sales'></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Customer Database <span id="percent_end3">60%</span></p>
                            <div>
                                <div className='empty '>
                                <div className='coloured customer'></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Payout Details<span id="percent_end4">80%</span></p>
                            <div>
                                <div className='empty '>
                                <div className='coloured payout'></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Account Setup<span id="percent_end5">Complete</span></p>
                            <div>
                                <div className='empty '>
                                <div className='coloured account'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='boxes'>
                        <div id="box-1">
                        <div className='primary'>
                            <h2>Primary</h2>
                            <p>#4e73df</p>
                        </div>
                        <div className='success'>
                            <h2>Success</h2>
                            <p>#1cc88a</p>
                        </div>
                        </div>
                       <div id="box-1">
                       <div className='info'>
                            <h2>Info</h2>
                            <p>#36b9cc</p>
                        </div>
                        <div className='warning'>
                            <h2>Warning</h2>
                            <p>#f6c23e</p>
                        </div>
                       </div>
                        <div id="box-1">
                        <div className='danger'>
                            <h2>Danger</h2>
                            <p>#e74a3b</p>
                        </div>
                        <div className='secondary'>
                            <h2>Secondary</h2>
                            <p>#858796</p>
                        </div>
                        </div>
                        <div id="box-1">
                        <div className='light'>
                            <h2>Light</h2>
                            <p>#f8f9fc</p>
                        </div>
                        <div className='dark'>
                            <h2>Dark</h2>
                            <p>#5a5c69</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className='box_2_right'>
                    <div className='illustration'>
                        <h3 id="illustration">Illustration</h3>
                        <img id="dash_img" src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"
                         alt="Image"/>
                        <p>
                        Add some quality, svg illustrations to your project courtesy of unDraw,
                        a constantly updated collection of beautiful svg images that you can use
                        completely free and without attribution!
                        </p>
                        <a href="https://undraw.co/">Browse Illustrations on unDraw</a>
                    </div>
                        <div className="development">
                            <h3 id="development">Development approach</h3>
                            <p>
                            SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order 
                            to reduce CSS bloat and poor page performance. Custom CSS classes are used 
                            to create custom components and custom utility classes.
                            </p>
                            <p>
                            Before working with this theme, you should become familiar with the Bootstrap 
                            framework, especially the utility classes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    );
}

export default Dashboard;