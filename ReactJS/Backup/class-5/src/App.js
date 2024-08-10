import React from "react";
// import Footer from './website/Footer'
// import Header from './website/Header'
// import Slider from './website/Slider'
import Movie from "./Movies/Movie";

class App extends React.Component{
    render(){
        return <div>
            <h1>App Component</h1>
            <Movie/>
        </div>
    }
}

export default App