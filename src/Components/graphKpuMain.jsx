import React, { Component } from 'react';


import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class AnimatedChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "dark2", // "light1", "dark1", "dark2"
			title:{
				text: "Real Count 2019"
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}%",		
				startAngle: -90,
				dataPoints: [
          { y: 70, label: "02 H Prabowo Subianto" },
          { y: 30, label: "01 Ir. H Joko Wododo" }
					// { y: 20, label: "Accomodation" },
					// { y: 14, label: "Transportation" },
					// { y: 12, label: "Activities" },
					// { y: 10, label: "Misc" }	
				]
			}]
		}
		
		return (
		<div>
      <div className="row">
        <div className="col">
        <h5>Terpercaya</h5>
          <CanvasJSChart options = {options} 
            /* onRef={ref => this.chart = ref} */
          />
          {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
      </div>
		</div>
		);
	}
}

export default AnimatedChart;    