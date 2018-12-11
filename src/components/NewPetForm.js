import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      species: '',
      image: '',
      location: '',
      about: ''
    };
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  };

  onSpeciesChange = (event) => {
    console.log(event.target.value);
    this.setState({species: event.target.value})
  };

  onImageChange = (event) => {
    // console.log(event.target);
    this.setState({image: event.target.value})
  };

  onLocationChange = (event) => {
    this.setState({location: event.target.value})
  };

  onAboutChange = (event) => {
    console.log(event.target);
    this.setState({about: event.target.value})
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    const newPet = {
      name: this.state.name,
      species: this.state.species,
      images: [this.state.image],
      location: this.state.location,
      about: this.state.about
    };

    this.setState({
      name: '',
      species: '',
      image: '',
      location: '',
      about: ''
    })

    console.log(newPet);
    this.props.addPetCallback(newPet);
  };


  render() {
    return (
      <form
        className="new-pet-form"
        onSubmit={this.onFormSubmit}>
        <h3>Add a Pet</h3>
        <div>
          <label htmlFor="name" className="new-pet-form--label">Name:</label>
          <input
            name="name"
            value={this.state.name}
            onChange={this.onNameChange} />
        </div>
        <div>
          <label htmlFor="species" className="new-pet-form--label">Species:</label>
          <input
            name="species"
            value={this.state.species}
            onChange={this.onSpeciesChange} />
        </div>
        <div>
          <label htmlFor="image" className="new-pet-form--label">Image:</label>
          <input
            name="image"
            value={this.state.image}
            onChange={this.onImageChange} />
        </div>
        <div>
          <label htmlFor="location" className="new-pet-form--label">Location:</label>
          <input
            name="location"
            value={this.state.location}
            onChange={this.onLocationChange} />
        </div>
        <div>
          <label htmlFor="about" className="new-pet-form--label">About:</label>
        </div>
        <div>
          <textarea
            name="about"
            className="new-pet-form--about"
            value={this.state.about}
            onChange={this.onAboutChange} />
        </div>
        { /* A form should go here! */ }
        <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      </form>
    );
  }


}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;
