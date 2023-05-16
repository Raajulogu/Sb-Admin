import React from "react";
import Base from "../Base/base"
function Chart(){
    return(
        <Base>
        <div className="chart_body">
            <div className="chart_top">
                <h2>Charts</h2>
                <p>Chart.js is a third party plugin that is used to generate the charts 
                in this theme. The charts below have been customized - for further 
                customization options, please visit the official Chart.js documentation.</p>
            </div>
            <div className="chart_box">
                <div className="chart_box_left">
                    <div className="chart_box_area chart_content">
                        <h3 id="chart_h">Area Chart</h3>
                        <img id="img_area"src="https://pandas-xlsxwriter-charts.readthedocs.io/_images/chart_area.png" alt="Area Chart" />
                        <p>Styling for the area chart be found in the <span style={{color:"red"}}>/js/demo/chart-area-demo.js</span> file</p>
                    </div>
                    <div className="chart_box_bar chart_content">
                        <h3 id="chart_h">Bar Chart</h3>
                        <img id="img_bar"src="https://google.github.io/charts/flutter/example/bar_charts/simple_full.png"
                        alt="Bar Chart" />
                        <p>Styling for the bar chart be found in the <span style={{color:"red"}}>/js/demo/chart-bar-demo.js</span> file</p>
                    </div>
                </div>
                <div className="chart_box_right">
                <div className="chart_box_donut chart_content">
                        <h3 id="chart_h">Donut Chart</h3>
                        <img src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2018/11/donut-chart.jpg?fit=1200%2C600&ssl=1"
                        alt="Donut Chart" id="img_donut" />
                        <p>Styling for the donut chart be found in the 
                        <span style={{color:"red"}}>/js/demo/chart-donut-demo.js</span> file</p>
                    </div>
                </div>
            </div>
        </div>
        </Base>
    );
}

export default Chart;