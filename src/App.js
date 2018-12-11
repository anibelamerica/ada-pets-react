import React, { Component } from 'react';
import PetList from './components/PetList';
import PetCard from './components/PetCard'
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import pets from './data/pets.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: undefined,
    };
  }

  selectPet = (petId) => {
    const newPets = this.state.petList;
    const index = newPets.findIndex(k => k.id === petId);

    this.setState({
      currentPet: this.state.petList[index]
    })
  };

  removePet = (petId) => {
    const newPets = this.state.petList;
    const index = newPets.findIndex(k => k.id === petId);

    if (this.state.currentPet.id !== undefined && this.state.currentPet.id === petId) {
      this.setState({
        currentPet: undefined
      })
    }

    newPets.splice(index, 1);

    this.setState({
      petList: newPets
    })
  };


  render() {
    const { currentPet } = this.state;

    let selectedPet = currentPet ? <PetDetails currentPet={currentPet} /> : '';

    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */ }
          <SearchBar />
        </section>
          { /* Wave 2:  Where Pet Details should appear */ }
          { selectedPet }
        <section className='pet-details'>
        </section>
        <section className="pet-list-wrapper">
          { /* Wave 1:  Where PetList should appear */ }
          <PetList
            pets={this.state.petList}
            onSelectPet={this.selectPet}
            onRemovePet={this.removePet}/>
        </section>
        <section className="new-pet-form-wrapper">
          { /* Wave 3:  Where NewPetForm should appear */ }
        </section>
      </main>
    );
  }
}

export default App;
