import React from "react";

class Movie extends React.Component {
    m_name = "dedapool";
    hero_name = "arun kumar"

    render() {
        return <div>
            <h1>Movies Component</h1>
            <h2>Movie Name:{this.m_name}</h2>
            <h3>Hero Name:{this.hero_name}</h3>
        </div>
    }

}


export default Movie



