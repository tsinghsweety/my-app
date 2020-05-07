import React from 'react';
import logo from './logo.svg';
import './App.css';



export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: "Vihaan"
    };

    this.changeName = this.changeName.bind(this);
  }

  changeName(name){
    this.setState({
      user: name
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hey </h1>
        <Welcome user = {this.state.user}/>
        <FormData handleClick={this.changeName}/>
        <h2>Other Routes</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
};
export class Welcome extends React.Component{
  constructor(props){
    super(props);
    
  }
  render(){
    return(
      <div>
        <h1>Hello {this.props.user}</h1>
      </div>
    );
  }
}

export class FormData  extends React.Component {
  constructor(props){
    super(props);
    this.takeName = this.takeName.bind(this);
  }
  takeName(){
    let name = this.refs.name.value;
    console.log("name ", name);
    this.props.handleClick(name);
  }
  
  render() {
   return (
     <div>
      <input type="text" ref="name"/>
      <button onClick={this.takeName}>Click me</button>
     </div>
   );
  }
}

