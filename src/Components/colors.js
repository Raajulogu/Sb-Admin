import React from "react";
import Base from "../Base/base";

function Colors(){
    return(
        <Base>
        <div>
            <h2>Color Utilities</h2>
            <p>Bootstrap's default utility classes can be found on the official Bootstrap 
                Documentation page. The custom utilities below were created to extend 
                this theme past the default utility classes built into Bootstrap's 
                framework.</p>
            <div className="color_box">
                <div className="color_box1">
                <div className="color_text">
                    <h3 id="color_h">Custom Text Color Utilities</h3>
                    <div className="text text_100">
                    <p>.text-gray-100</p>
                    </div>
                    <div className="text text_200">
                    <p>.text-gray-200</p>
                    </div>
                    <div className="text text_300">
                    <p>.text-gray-300</p>
                    </div>
                    <div className="text text_400">
                    <p>.text-gray-400</p>
                    </div>
                    <div className="text text_500">
                    <p>.text-gray-500</p>
                    </div>
                    <div className="text text_600">
                    <p>.text-gray-600</p>
                    </div>
                    <div className="text text_700">
                    <p>.text-gray-700</p>
                    </div>
                    <div className="text text_800">
                    <p>.text-gray-800</p>
                    </div>
                    <div className="text text_900">
                    <p>.text-gray-900</p>
                    </div>
                    
                </div>
                    <div className="text_custom">
                        <h3 id="color_h">Custom Font Size Utilities</h3>
                        <h6>.text-xs</h6>
                        <h4>.text-lg</h4>
                    </div>
                </div>

                <div className="color_background">
                    <h3 id="color_h">Custom Background Gradient Utilities</h3>
                    <div className="background background_primary">
                        .bg-gradient-primary
                    </div>
                    <div className="background background_secondary">
                        .bg-gradient-secondary
                    </div>
                    <div className="background background_success">
                        .bg-gradient-success
                    </div>
                    <div className="background background_info">
                        .bg-gradient-info
                    </div>
                    <div className="background background_warning">
                        .bg-gradient-warning
                    </div>
                    <div className="background background_danger">
                        .bg-gradient-danger
                    </div>
                    <div className="background background_light">
                        .bg-gradient-light
                    </div>
                    <div className="background background_dark">
                        .bg-gradient-dark
                    </div>
                </div>
                <div className="color_grayscale">
                    <h3 id="color_h">Custom Grayscale Background utilities</h3>
                    <div className="grayscale grayscale_100">
                        .bg-gray-100
                    </div>
                    <div className="grayscale grayscale_200">
                        .bg-gray-200
                    </div>
                    <div className="grayscale grayscale_300">
                        .bg-gray-300
                    </div>
                    <div className="grayscale grayscale_400">
                        .bg-gray-400
                    </div>
                    <div className="grayscale grayscale_500">
                        .bg-gray-500
                    </div>
                    <div className="grayscale grayscale_600">
                        .bg-gray-600
                    </div>
                    <div className="grayscale grayscale_700">
                        .bg-gray-700
                    </div>
                    <div className="grayscale grayscale_800">
                        .bg-gray-800
                    </div>
                    <div className="grayscale grayscale_900">
                        .bg-gray-900
                    </div>
                </div>
            </div>
        </div>
        </Base>
    );
}

export default Colors;