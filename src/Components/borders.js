import React from "react";
import Base from "../Base/base";

function Borders(){
    return(
        <Base>
            <div className="border_body">
                <div className="border_top">
                    <h2>Border Utilities</h2>
                    <p>
                    Bootstrap's default utility classes can be found on the official 
                    Bootstrap Documentation page. The custom utilities below were 
                    created to extend this theme past the default utility classes 
                    built into Bootstrap's framework.
                    </p>
                </div>
                <div className="border_box">
                <div className="border_box_left ">
                    <div className="border_blue border_content">
                        <p>.border-left-primary</p>
                    </div>
                    <div className="border_brown border_content">
                        <p>.border-left-secondary</p>
                    </div>
                    <div className="border_green border_content">
                        <p>.border-left-success</p>
                    </div>
                    <div className="border_pgreen border_content">
                        <p>.border-left-info</p>
                    </div>
                    <div className="border_yellow border_content">
                        <p>.border-left-warning</p>
                    </div>
                    <div className="border_red border_content">
                        <p>.border-left-danger</p>
                    </div>
                    <div className="border_darkblue border_content">
                        <p>.border-left-dark</p>
                    </div>
                </div>
                <div className="border_box_right">
                    <div className="border_bluer border_content">
                        <p>.border-bottom-primary</p>
                    </div>
                    <div className="border_brownr border_content">
                        <p>.border-bottom-secondary</p>
                    </div>
                    <div className="border_greenr border_content">
                        <p>.border-bottom-success</p>
                    </div>
                    <div className="border_pgreenr border_content">
                        <p>.border-bottom-info</p>
                    </div>
                    <div className="border_yellowr border_content">
                        <p>.border-bottom-warning</p>
                    </div>
                    <div className="border_redr border_content">
                        <p>.border-bottom-danger</p>
                    </div>
                    <div className="border_darkbluer border_content">
                        <p>.border-bottom-dark</p>
                    </div>
                </div>
                </div>
            </div>
        </Base>
    );
}

export default Borders;