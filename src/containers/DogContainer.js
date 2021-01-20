import React, { Component } from "react";
import Select from "../components/Select";
import ImgMed from "../components/ImgMed";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getBreeds, getImages, addToFavorites } from "../redux/actionCreator";

class DogContainer extends Component {
    componentDidMount() {
        this.props.getBreeds();
    }
    renderImages = () => {
        return this.props.images.map((url) => {
            return (
                <div className="image-container">
                    <ImgMed url={url} altText={"a dog"} />
                    <button
                        className="like-button"
                        onClick={() => this.props.addToFavorites(url)}
                    >
                        Like
                    </button>
                </div>
            );
        });
    };
    render() {
        return (
            <div className="container">
                <h1>Doggo browser</h1>
                <Link to="/favorites">Favorites</Link>
                <h3>Select a Breed to Begin: </h3>
                <Select />
                {this.props.images.length > 0 ? (
                    this.renderImages()
                ) : (
                    <p>Select a breed to see some super cute pics</p>
                )}
            </div>
        );
    }
}

const mapStateToProps = ({ breeds, images, favorites }) => ({
    breeds,
    images,
    favorites,
});

export default connect(mapStateToProps, {
    getBreeds,
    getImages,
    addToFavorites,
})(DogContainer);
