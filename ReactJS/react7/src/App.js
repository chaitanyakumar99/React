import React from "react";
import Footer from './website/Footer'
import Header from './website/Header'
import Slider from './website/Slider'
import Movie from "./Movies/Movie";
import Movie1 from "./Movies/Movie1";

class App extends React.Component{
    render(){
        return <div>
            <h1>App Component</h1>
            <Movie/>
            <Movie1/>
            <Footer/>
            <Header/>
            <Slider/>
        </div>
    }
}

export default App