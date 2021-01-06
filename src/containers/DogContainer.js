import React, { Component } from "react";
import BreedOption from "../components/BreedOption";

class DogContainer extends Component {
    state = {
        breeds: [],
    };

    componentDidMount() {
        fetch("https://dog.ceo/api/breeds/list/all")
            .then((res) => res.json())
            .then(({ message }) => {
                const breeds = Object.keys(message);
                this.setState({ breeds });
            });
    }

    handleOnChange = (event) => {
        const breed = event.target.value;
        //const url = `https://dog.ceo/api/breed/${breed}/images`
        // fetch(url)
        //.then.then -> update state with new list of breeds
    };
    renderBreedSelect = () => {
        return (
            <select name="selectedBreed" onChange={this.handleOnChange}>
                {this.state.breeds.map((breedName) => (
                    <BreedOption breedName={breedName} />
                ))}
            </select>
        );
    };

    render() {
        return (
            <div className="container">
                <h1>Doggo browser</h1>
                <h3>Select a Breed to Begin: </h3>
                {this.renderBreedSelect()}
            </div>
        );
    }
}

export default DogContainer;
