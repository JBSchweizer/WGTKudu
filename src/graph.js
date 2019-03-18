import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {LIST_ANTELOPS} from'./DataSet.js';
import Antelop from './Antelop';
import Label from 'react';
import Image from 'react-image-resizer';
import Quizz from './quizz';
import ListAntelopes from './listAntelopes';

import {Bar, Line, Scatter} from 'react-chartjs-2';

class Graph extends Component {
	


	render() {

		let antelopes = LIST_ANTELOPS.sort(function (a, b) {
   							return a.weight - b.weight;
							});
		
		let weight =[];
		let height =[];

		for(let i=0; i<LIST_ANTELOPS.length; i++){
			weight[i] = antelopes[i].weight;
			height[i] = antelopes[i].height;
		}

		let data = [];

		for(let i=0; i<LIST_ANTELOPS.length; i++){
			data[i] = {x: weight[i], y: height[i]}
		}


		let antelopes2 = LIST_ANTELOPS.sort(function tri(a,b)
							{
						if (a.horns < b.horns) return -1;
						else if (a.horns == b.horns) return 0;
						else return 1;
							});

		
		let height2 =[];
		let weight2=[];
		let horns = [];

		for(let i=0; i<LIST_ANTELOPS.length; i++){
			height2[i] = antelopes2[i].height;
			weight2[i] = antelopes2[i].weight;
			horns[i] = antelopes2[i].horns;
		}









		return (
		<div className="graphic">
			<Scatter data={{
			        label: "Height (in) in function of the weight (lb)",
			        datasets: [{
				            label: 'Height (in) in fuction of the weight (lb)',
				            data: data,
				            pointBackgroundColor: 'rgba(255, 0, 0, 0.7)'

				        }],
				    options: {
       					scales: {
           					 xAxes: [{
				                type: 'linear',
				                position: 'bottom'
           							 }]
       							 }
			        		}
			  	 }}
		    	height={400}
          		width={1000}

			/>

			<Line data= {{
					        labels: horns,
					        datasets: [{
					        label: "Weight (lb) in function of the type of horns",
					        backgroundColor: 'rgb(255, 99, 132)',
					        borderColor: 'rgb(255, 99, 132)',
					        data: weight2,
					        }],
					    }}
		    	height={400}
          		width={1000}

			/>

			<Line data= {{
					        labels: horns,
					        datasets: [{
					        label: "Height (in) in function of the type of horns",
					        backgroundColor: 'rgb(255, 99, 132)',
					        borderColor: 'rgb(255, 99, 132)',
					        data: height2,
					        }],
					    }}
		    	height={400}
          		width={1000}

			/>

		</div>
		);
	}
}
 
export default Graph;