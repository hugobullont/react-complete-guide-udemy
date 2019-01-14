import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Hugo', age: 21 },
      { name: 'Victor', age: 19 },
      { name: 'Rebeca', age:22 }
    ],
    otherState: 'some other value'
  }  

  switchNameHandler = () => {
    //console.log('Was clicked!');
    //DON'T DO THIS: this.state.persons[0].name = 'Hugo Alejandro';
    this.setState({persons: [
      { name: 'Hugo Alejandro', age: 21 },
      { name: 'Victor', age: 19 },
      { name: 'Rebeca', age:20 }
    ] });
  }

  render() {
     return (
       <div className="App">
         <h1>Hi, I'm a React App</h1>
         <p>This is really working!</p>
         <button onClick={this.switchNameHandler}>Switch Name</button>
         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
         <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
       </div>       
     );
    //return React.createElement('div',{className: 'App'},React.createElement('h1',null, 'Does this work now?'));
  }
}

export default App;
