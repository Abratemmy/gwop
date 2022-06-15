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
    constructor(props) {
        super(props)
    
        this.state = {
            scrolled: false
        }
        this.changeBackground = this.changeBackground.bind(this);
    }
  
    changeBackground(e){
        // the 200 below means where you want the background to change when scroll
        // it is advisable to put the background at the height of the navbar
        if(window.scrollY >=500){
            this.setState({
                scrolled: true
              });
        }else{
            this.setState({
                scrolled: false
              });
        }
    }
   
    componentDidMount() {
        window.addEventListener('scroll', this.changeBackground);
        new WOW.WOW().init();
      }
    
    render(){
        return(
            <div>
               <Navbar />
                <a href="https://us20.list-manage.com/contact-form?u=2080aebe8d57f05901717ffc6&form_id=d98a92d344db8f30b7ca3f5ddcf79bd4" target="_blank" rel="noreferrer" className="popup-link">        
                    <div className={this.state.scrolled ?'no-show popup': 'no-show'}>
                        Join GWOP
                   </div>
                </a>
                <Gwop />
                <Successtories />
                <Faqs />
                <Footer /> 
            </div>
        )
    }
    
}

export default App;
