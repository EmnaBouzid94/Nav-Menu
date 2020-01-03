import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      display:true,
      blue:true
     }
  }
  Show=()=> {
    this.setState({
      display:!this.state.display , 
      
      

    })}
   
   
  
  render() { 
    return ( 
      <div >
        <ul className="App">
          <li className={"blue"}>Home</li>
          <li  onClick={this.Show} style={{color:!this.state.display?"rgb(33,150,239)":"black"}}  >Services
          
          </li>
          <li className={"blue"}>Contact</li>
        </ul>
        <ul className={this.state.display ?"hide":"display"} >
            <li>For Entrepreneurs</li>
            <li>For Students</li>
            <li>For Hobbyists</li>
            </ul>

    </div>
     );
  }
}
 
export default App;