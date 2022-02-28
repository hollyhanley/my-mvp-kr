import React from "react";
import StyleCards from "../components/StyleCards";

function Explore() {
    return (
      <div className="Styles">
        <div className="title-banner">
        <h1>Explore Tattoo Styles</h1></div>
        <StyleCards />
        <a className="btn btn-primary" href="/preferences" role="button">Find a Tattoo Artist</a>
      </div>
    );
}

export default Explore;