import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {LIST_ANTELOPS} from'./DataSet.js';
import Antelop from './Antelop';
import Label from 'react';
import Image from 'react-image-resizer';


class ListAntelopes extends Component {
  state = { 
    listAntilopes: LIST_ANTELOPS,
    }

classByWeight = () => {
	let listeIntermediate1 = this.state.listAntilopes;
	listeIntermediate1.sort(function (a, b) {
   							return a.weight - b.weight;
							});
	this.setState({listAntilopes: listeIntermediate1})
}
  
classByHeight = () => {
	let listeIntermediate2 = this.state.listAntilopes;
	listeIntermediate2.sort(function (a, b) {
   							return a.height - b.height;
							});
	
	this.setState({listAntilopes: listeIntermediate2})
}

classByName = () => {
	let listeIntermediate3 = this.state.listAntilopes;
	listeIntermediate3.sort(function tri(a,b)
		{
	if (a.name < b.name) return -1;
	else if (a.name == b.name) return 0;
	else return 1;
		});
	
	this.setState({listAntilopes: listeIntermediate3})
}

classByHorns = () => {
	let listeIntermediate4 = this.state.listAntilopes;
	listeIntermediate4.sort(function tri(a,b)
		{
	if (a.horns < b.horns) return -1;
	else if (a.horns == b.horns) return 0;
	else return 1;
		});
	
	this.setState({listAntilopes: listeIntermediate4})
}

classByContinent = () => {
	let listeIntermediate5 = this.state.listAntilopes;
	listeIntermediate5.sort(function tri(a,b)
		{
	if (a.continent < b.continent) return -1;
	else if (a.continent == b.continent) return 0;
	else return 1;
		});
	
	this.setState({listAntilopes: listeIntermediate5})
}


  render() {

const list  = this.state.listAntilopes

    return (
    	<div>
    	<div className={"firstBox"}>
   			 <span className="pictureTop"></span>
   			 <span className="nameTop" onClick={this.classByName}>Name</span>
      		 <span className="continentTop" onClick={this.classByContinent}>Continent</span>
      		 <span className="weightTop" onClick={this.classByWeight}>Weight (lb)</span>
      		 <span className="heightTop" onClick={this.classByHeight}>Height (in)</span>
      		 <span className="hornsTop" onClick={this.classByHorns}>Horns</span>
 		</div>
      
      	<table className="listAntelops">
    		<tbody className="general">
     		 {list.map(({name, continent, weight, height, horns, picture,key}) => (
         		<Antelop
              name={name} 
              continent={continent} 
              weight={weight} 
              height={height}
              horns={horns}
              picture={picture}
              />
       		   ))}
   			 </tbody>
 		 </table>


      </div>
    )    
  }
}


export default ListAntelopes