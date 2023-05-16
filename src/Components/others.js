import React, { useState } from "react";
import Base from "../Base/base";


function Others() {
    let [state, setstate] = useState(false);
    return (
        <Base>
            <div className="other_body">
                <div className="other_top">
                    <h2>Other Utilities</h2>
                    <p>Bootstrap's default utility classes can be found on the
                        official Bootstrap Documentation page. The custom
                        utilities below were created to extend this theme past
                        the default utility classes built into Bootstrap's
                        framework.</p>
                </div>
                <div className="other_box">
                    <div className="other_box1">
                        <div className="other_overflow other_content">
                            <h5 id="other_h">Overflow Hidden Utility</h5>
                            <p>Use <span style={{ color: "red" }}>.o-hidden</span> to set the
                                overflow property of any element to hidden.</p>
                        </div>
                        <div className="other_progress other_content">
                            <h5 id="other_h">Progress Small Utility</h5>
                            <p>Normal Progress Bar</p>
                            <div id="other_normal">
                                <div id="other_normal_in"></div>
                            </div>
                            <p>Small Progress Bar</p>
                            <div id="other_small">
                                <div id="other_small_in"></div>
                            </div>
                            <p>Use the <span style={{ color: "red" }}> .progress-sm</span>class along with
                                <span style={{ color: "red" }}>.progress</span> </p>
                        </div>
                        <div className="other_drop other_content">
                            <h4 id="other_h">Dropdown-No Arrow</h4>
                            <button id="other_but" 
                            onClick={() => setstate(!state)}>Dropdown (no arrow)</button>
                            {state ? <div className="other_dropdown">
                                <div>Action</div>
                                <div>Another action</div>
                                <div>Something else here</div>
                            </div> : ""}
                            <p>Add the <span style={{ color: "red" }}>.no-arrow</span> 
                            class alongside the <span style={{ color: "red" }}>.dropdown</span></p>
                        </div>
                </div>
                <div className="other_box2">
                    <div className="other_rotatio other_content">
                    <h2 id="other_h">Rotation Utilities</h2>
                    <div className="other_box2_half">
                        <div className="other_box2_rotate">.rotate-15</div>
                    </div>
                    <div className="other_box2_half">
                        <div className="other_box2_n_rotate">.rotate-n-15</div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </Base >
    );
}
export default Others;