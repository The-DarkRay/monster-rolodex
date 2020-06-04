import React, {Component} from 'react';
import {Cardlist} from './components/card-list/card-list.component.jsx';
import './App.css';

import {SearchBox} from './components/search-box/search-box.component'
import { render } from '@testing-library/react';


class App extends Component{
  constructor(){
    super();

    this.state ={
      monsters:[],
      searchField: ''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users => this.setState({monsters: users}));
    this.handleChange=this.handleChange.bind(this);
    
  }

handleChange = e => {this.setState({searchField: e.target.value});}

  render(){
    const {monsters , searchField } = this.state;
    const filtteredMonster = monsters.filter(
      monsters => monsters.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return(
      <div className="App">
      <h1>Monsters Rolodex</h1>
    
        <SearchBox placeholder='search monsters' 
        handleChange={this.handleChange}
        />

      <Cardlist  monsters ={filtteredMonster}>
     
      </Cardlist>
   
    </div>
    );
  }
}

export default App;
