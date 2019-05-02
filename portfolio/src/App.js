  //importing the React class and The component class from the react module
  import React, { Component } from 'react';
  //by doing this! now we have a bunch of methods and properties that the replaceWith
  //component class has like render!!! woo
  //react component has the same name as its file
  class App extends Component {
    //we are going to change the state of the page using the constructor method
    constructor(){
      //this is saying the state object for this component is an empty object
      super(); // this allows this.state to locate the parent class in index

      this.state = { displayBio : false }; //this sets the bio to hidden

    }

    render() {

      let bio = (
      <div>
        <p> A passionate software engineering student at General Assembly. I am based in Sydney and enjoy building things that live on your electronic devices ♥.</p>
        <p> I have over 8 years experience in both engineering drafting and graphic design, so I thought why not combined these skills gained from both roles to create great applications!</p>
        <p> Here's a few things I love </p>
        <ul> JavaScript
          <li> HTML & CSS </li>
          <li> SASS </li>
          <li> Node.js  </li>
          <li> Java </li>
          <li> SQL  </li>
          <li> Adobe Illustrator </li>
        </ul>
      </div>
    );
    //if (this.state.displayBio === false) //
    if (!this.state.displayBio) { //if this.state = { displayBio : false };
      bio = null;                 //bio = null;
    }

      //make sure to return the component return() otherwise you wont get any output
      return (
        <div>
        <h1>Hello!</h1>
        <p>I am Luke</p>
        {bio}
        </div>
      )
    }
  }
  //now we export the component
  export default App;
