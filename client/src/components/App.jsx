import React from 'react';
import List from './List.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPokemon: [],
      allTypes: [],
      type: ''
    }
    this.getPokemon = this.getPokemon.bind(this);
    this.handleOptionsChange = this.handleOptionsChange.bind(this);
    this.renderOptions = this.renderOptions.bind(this);
    this.handleShowAll = this.handleShowAll.bind(this);
  }

  getPokemon() {
    let type = this.state.type;
    axios.get('/api')
    .then((response) => {
      if (type.length === 0 || type === 'Sort by Type') {
        this.setState({
          allPokemon: response.data
        })
      } else {
        let filtered = response.data.filter(pokemon => {
          if (pokemon.type === type) {
            return pokemon;
          }
        })
        console.log('Filtered: ', filtered);
        this.setState({
          allPokemon: filtered
        })
      }

    })
    .catch((err) => {
      console.error(err);
    })
  }

  getType() {
    axios.get('/api/type')
    .then((response) => {
      this.setState({
        allTypes: response.data
      })
    })
  }

  renderOptions() {
    let types = this.state.allTypes;
    return types.map((type, index) => {
      return (
        <option key={index} value={type.type}>{type.type}</option>
      )
    })
  }

  handleOptionsChange(e) {
    e.preventDefault();
    this.setState({
      type: e.target.value
    }, () => {
      this.getPokemon();
    })
  }

  handleShowAll() {
    this.setState({
      type: 'Sort by Type'
    }, () => {
      this.getPokemon();
    })
  }

  componentDidMount() {
    this.getPokemon();
    this.getType();
  }

  render() {
    return(
      <div>
      <h1>Fullstack Pokedex!</h1>
      <button onClick={this.handleShowAll}>Show All</button>
      <select id="types" value={this.state.type} onChange={this.handleOptionsChange}>
        <option>Sort by Type</option>
        {this.renderOptions()}
      </select>
      <div>
        <List allPokemon={this.state.allPokemon} getPokemon={this.getPokemon}/>
      </div>

    </div>
    )
  }

}

export default App;