import React, {Component} from "react";
import "./App.css";
import Footer from "./components/newfooter/Footer";
import Navbar from "./components/Navbar/Navbar";
import Gwop from "./components/gwop/gwop";
import WOW from 'wowjs';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Successtories from "./components/SuccessStory/Success";
import Faqs from "./components/Faqs/Faqs";


class App extends Component{
    componentDidMount(){
        new WOW.WOW().init();
    }
   
    render(){
        return(
            <div>
               <Navbar />
                 <Gwop />
                 <Successtories />
                 <Faqs />
                <Footer /> 
            </div>
        )
    }
    
}

export default App;
