import React from "react";
import { connect } from "react-redux";
import { getImages } from "../redux/actionCreator";
function Select(props) {
    return (
        <select onChange={props.getImages}>
            {props.breeds.map((element, index) => (
                <option key={index} value={element}>
                    {element}
                </option>
            ))}
        </select>
    );
}
const mapStateToProps = ({ breeds }) => ({ breeds });
export default connect(mapStateToProps, { getImages })(Select);
