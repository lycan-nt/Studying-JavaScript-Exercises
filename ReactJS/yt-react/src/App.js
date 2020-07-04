import React, { Component } from 'react';

import './App.css';

import { listRepositories } from "./api/github"


class App extends Component {

  constructor(props) {
    super(props);

  this.state = {
    data: []
  }
 
  }

  componentDidMount() {
    listRepositories()
      .then( data => {
        this.setState( state: { data })
      })
  }

  render() {
    const { data } = this.state

    return (
      <div className="App">
        <ul>
        { data.map(item => <li>{item.fu}</li> ) }
        </ul>
      </div>
    )

   }
}

export default App;
