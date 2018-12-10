import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';


const PetList = (props) => {

  const pets = props.pets.map((pet, i) => {
    return (
      <PetCard
        key={i}
        {...pet}
        selectPetCallback={props.onSelectPet} />
    )
  });


  return (
    <div className="card-group">
      { pets }
    </div>
  )
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
};

export default PetList;
