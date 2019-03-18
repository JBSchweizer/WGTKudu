import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {LIST_ANTELOPS} from'./DataSet.js';
import Antelop from './Antelop';
import Label from 'react';
import Image from 'react-image-resizer';
import Quizz from './quizz';
import ListAntelopes from './listAntelopes';
import {Bar, Line} from 'react-chartjs-2';
import Graph from './graph'




class App extends Component {


  state = {
     DATA_ANTELOPS: LIST_ANTELOPS,
     page: "entry",
     name: "personne",
  }


  handleClick = () => {
    const list = this.state.DATA_ANTELOPS

    list.sort(function (a, b) {
    return a.weight - b.weight;
    });

    this.setState({ list })
  }

  handleGoList = () => { this.setState( () => ({page: "list"}) ) }
  handleGoGraph = () => { this.setState( () => ({page: "graph"}) ) }
  handleGoQuizz= () => { this.setState( () => ({page: "quizz"}) ) }
  handleGoEntry = () => { this.setState( () => ({page: "entry"}) ) }


  handleValidForm = (int) => {
      
    }

  render() {

    let page;

    let liste = [0,1,2,3,4];
    

    if (this.state.page === "entry"){
      page = <div>
            <div className="text">We want to make you discover all the antelopes of the world. In your quest of finding the perfect group of antelope to join, we allow you to know better their characteristics. </div>
             <div className="text"> We offer you a list of the different specieses, graphs about their characteristics and a quizz based on advanced data science to find your perfect species</div>
            <div className="buttons">
            <span className="lien1">
              <button className="listButton" onClick={this.handleGoList}>Display list of antelopes</button>
            </span>
            <span className="lien2">
              <button className="graphButton" onClick={this.handleGoGraph}>Display graphs</button>
            </span>
            <span className="lien3">
              <button className="quizzButton" onClick={this.handleGoQuizz}>Which antelope are you?</button>
            </span>
            </div>
          </div>;
    }
    else if (this.state.page === "list"){
      page =<div>
           <ListAntelopes/>
          </div>
    }
    else if (this.state.page === "graph"){
     page = <div><Graph/></div>
    }
    else {

      page = <Quizz/>

    }



    return (
      
        <div>
          <span><EntryPage onClick={this.handleGoEntry} text={this.state.page}/></span>
           <span> 
             <button className="graphButton" onClick={this.handleGoEntry}>Retour</button>
            </span>

          {page}
        </div>
        
      
    );
  }
}






const EntryPage = (onClickB,text) => (
  <div className={"entryBox"}>
    <span className="title">Welcome to your world</span>

   
  </div>
)







/* <div className={"box ${name}"}>
          <span className="picture">"0"</span>
          <span className="important">
            <span className="name">
              {name}
            </span>
            <span className="continent">{continent}</span>
          </span>
          <span className="caracts">
            <span className="weight">{weight}</span>
            <span className="height">{height}</span>
            <span className="horns">{horns}</span>
          </span>
        </div>
        */


export default App;
