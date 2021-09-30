import React, {Component} from "react";
import "./App.css";
import Footer from "./components/newfooter/Footer";
import Navbar from "./components/Navigation/Navbar";
import Router from "./components/router";


class App extends Component{
   
    render(){
        return(
            <div>
               <Navbar />
                <Router />
                <Footer /> 
            </div>
        )
    }
    
}

export default App;
