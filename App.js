import React, { Component } from 'react';
import './App.css';
import Labo from './components/labo'

class App extends Component {
  static defaultProps= {
    labs : [
      {
          nom: "Laboratoire Saint COME",
          adresse:"9 rue jean jacques bernard 69200 compiègne", 
          parking: true, 
          qualite: ['blabla', 'blabb', 'fff'],
          img: 'https://images.unsplash.com/photo-1544552866-112f7e46923f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
      },
      {
          nom: "Laboratoire Hotel de ville",
          adresse:"9 rue jean legendre  69200 compiègne", 
          parking: false,
          qualite: ['blabla', 'blabb', 'fff'],
          img:'https://images.unsplash.com/photo-1544552866-112f7e46923f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
      },
      {
          nom: "Laboratoire Puy du Roy",
          adresse:"Square du Puy du Roy 69200 compiègne", 
          parking: true,
          qualite: ['blabla', 'blabb', 'fff'],
          img:'https://images.unsplash.com/photo-1544552866-112f7e46923f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
      }
    ]
  } 



  render() {
    return (
      <div className="App">
       {this.props.labs.map((lab, index)=> {
           return <Labo key={index} title={lab.nom} adresse={lab.adresse} parking={lab.parking}
           img={lab.img} qualite={lab.qualite} />
         } )}
      </div>
    );
  }
}
export default App;
