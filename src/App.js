import React, { Component } from "react";
import "./App.css";
import Footer from "./components/newfooter/Footer";
import Navbar from "./components/Navbar/Navbar";
import Gwop from "./components/gwop/gwop";
import WOW from 'wowjs';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Successtories from "./components/SuccessStory/Success";
import Faqs from "./components/Faqs/Faqs";

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            scrolled: false,
            data: [],
            loading: false,
        }
        this.changeBackground = this.changeBackground.bind(this);
    }

    changeBackground(e) {
        // the 200 below means where you want the background to change when scroll
        // it is advisable to put the background at the height of the navbar
        if (window.scrollY >= 500) {
            this.setState({
                scrolled: true
            });
        } else {
            this.setState({
                scrolled: false
            });
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.changeBackground);
        new WOW.WOW().init();

        this.setState({
            loading: true,
        })
        return fetch(`https://joyagunbiadeserver.onrender.com/gwop_resources`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    data: responseJson,
                    loading: false,
                });
            })
            .catch((error) => {
                console.log(error)
            })
    }



    render() {
        return (
            <div>
                <Navbar />
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeJtlzsaF-Any6BAKpQe2XsOJ5k1DGz7eRp8eDb_pA8wVPGRQ/viewform" target="_blank" rel="noreferrer" className="popup-link">
                    <div className={this.state.scrolled ? 'no-show popup' : 'no-show'}>
                        Join GWOP
                    </div>
                </a>
                <Gwop data={this.state.data} loading={this.state.loading} />
                <Successtories />
                <Faqs data={this.state.data} loading={this.state.loading} />
                <Footer />
            </div>
        )
    }

}

export default App;
