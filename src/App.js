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

    // console.log(this.state.currentPet);
    this.setState({
      currentPet: this.state.petList[index]
    })
    // console.log(this.state.currentPet);
  };



  render() {
    const { currentPet } = this.state;

    // console.log(currentPet);
    // if (currentPet === undefined) {
    //   console.log('current pet is undefined');
    // }

    let selectedPet = '';
    if (currentPet !== undefined) {
      selectedPet =
      <PetDetails
        currentPet={currentPet}
        />
      // console.log(selectedPet);
    };

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
        <section classname='pet-details'>
        </section>
        <section className="pet-list-wrapper">
          { /* Wave 1:  Where PetList should appear */ }
          <PetList
            pets={this.state.petList}
            onSelectPet={this.selectPet}/>
        </section>
        <section className="new-pet-form-wrapper">
          { /* Wave 3:  Where NewPetForm should appear */ }
        </section>
      </main>
    );
  }
}

export default App;
