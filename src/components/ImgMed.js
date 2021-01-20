import React from "react";

function ImgMed(props) {
    const style = {
        height: "150px",
        width: "100px",
    };
    return <img style={style} src={props.url} alt={props.altText} />;
}

export default ImgMed;
