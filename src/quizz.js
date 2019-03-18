import React, { Component } from 'react'
import {LIST_ANTELOPS} from './DataSet.js'
import Antelop from './Antelop'

class Quizz extends Component {
  state = { 
    name: '',
    weight: 0,
    height: 0,
    carac: '',
    pref: '',
    antelope:'',
    antelopeTotal: {
          "name": "Addax",
          "continent": "Africa",
          "weight": 220,
          "height": 41,
          "horns": "Twisted",
          "picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/A_big_male_Addax_showing_as_the_power_of_his_horns.jpg/1280px-A_big_male_Addax_showing_as_the_power_of_his_horns.jpg"
        },
    anwsered: 'false',
    }

  // Arrow fx for binding
  handleSummitN= event => {this.setState({ name: event.target.value })}
  handleSummitW= event => {this.setState({ weight: event.target.value })}
  handleSummitH= event => {this.setState({ height: event.target.value })}
  handleSummitC= event => {this.setState({ carac: event.target.value })}

  // Arrow fx for binding
 validateQuizz = event => {


    let tab = [];
      for(var i=0; i<LIST_ANTELOPS.length ;i++){
        tab[i]=(LIST_ANTELOPS[i].weight-this.state.weight)**2
        + (LIST_ANTELOPS[i].height-this.state.height)**2;

        if(this.state.carac === 3){
          if(LIST_ANTELOPS[i].horns === "Spiraled" || LIST_ANTELOPS[i].horns === "Curved" || LIST_ANTELOPS[i].horns === "Twisted"){
            tab[i]=tab[i]/1.5
          }
        }
        if(this.state.carac === 1){
          if(LIST_ANTELOPS[i].horns === "Straight"){
            tab[i]=tab[i]/1.5
          }
        }
        if(this.state.carac === 2){
          if(LIST_ANTELOPS[i].horns === "Spiky"  || LIST_ANTELOPS[i].horns === "Lyre-shaped"){
            tab[i]=tab[i]/1.5
          }
        }


        

      }
      let min = tab[0];
      let indexMin = 0;
      for(var i =1;i<LIST_ANTELOPS.length;i++){
        if(tab[i]<min){
          min=tab[i];
          indexMin =i;
        }
      }






    this.setState({ antelope: LIST_ANTELOPS[indexMin].name , anwsered: 'true', antelopeTotal: LIST_ANTELOPS[indexMin]})
  }

  render() {

    let page;

    if(this.state.anwsered === 'false'){

        page = <form className="quizz" onSubmit={this.validateQuizz}>
        <p>
          <label>
            <p>A few questions to know which is your antelope type: </p>
            <p>Name :<input
              autoComplete="given-name"
              type="text"
              onChange={this.handleSummitN}
              value={this.state.name}
            />
          </p>
          <p>Weight (lb) :<input
              autoComplete="given-name"
              type="number"
              onChange={this.handleSummitW}
              value={this.state.weight}
            />
          </p>
          <p>Height (in) :<input
              autoComplete="given-name"
              type="number"
              onChange={this.handleSummitH}
              value={this.state.height}
            />
          </p>
          <p>Your are more: 1. Strict  2. Impulsive  3. Dreamer  :<input
              autoComplete="given-name"
              type="number"
              onChange={this.handleSummitC}
              value={this.state.carac}
            />
          </p>
          
          </label>
          <button type="submit">Summit the quizz</button>
        </p>
        <p>Current data : {this.state.name}, weight {this.state.weight} , height {this.state.height}, caracter {this.state.carac}</p>
      </form>

    }
    else{
      page =<div> <p>Your type of antelope is {this.state.antelope}</p>
      <Antelop
              name={this.state.antelopeTotal.name} 
              continent={this.state.antelopeTotal.continent} 
              weight={this.state.antelopeTotal.weight} 
              height={this.state.antelopeTotal.height}
              horns={this.state.antelopeTotal.horns}
              picture={this.state.antelopeTotal.picture}
              /></div>
    }


    return (
      <div>
      {page}
      </div>
    )

{/*
      <div className="quizz">
  

                <div>Rentrez votre nom: <input type="text"  name={this.state.name} value={this.state.name} /></div>
                <div>Rentrez votre taille: <input type="text"  name={this.state.name} value={this.state.name} /></div>
                <div>Rentrez votre poids: <input type="text"  name={this.state.name} value={this.state.name} /></div>
                <div>Vous êtes plutôt: (rigoureux, impulsif, lunatique)<input type="text"  name={this.state.name} value={this.state.name} /></div>
                <div>Vous êtes plutôt: (sportif, sédentaire) <input type="text"  name={this.state.name} value={this.state.name} /></div>
                <button className="validButton" onClick={this.handleValidForm(40)}>Confirmer</button>
                <p>{this.state.name}</p>
             </div>
*/}



    
  }
}


export default Quizz