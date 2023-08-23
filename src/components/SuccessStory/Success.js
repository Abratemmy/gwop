import React, { Component } from 'react';
import "./Success.css";
import { BsArrowDown } from "react-icons/bs";
import { Link } from "react-scroll";
import Slider from 'react-slick';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

export class Successtories extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);

        this.state = {
            data: [],
            loading: false,
        }
    }
    componentDidMount() {
        this.setState({
            loading: true,
        })
        return fetch(`https://joyagunbiadeserver.onrender.com/gwopfeedback`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    data: responseJson,
                    loading: false
                });
            })
            .catch((error) => {
                console.log(error)
            })
    }

    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    render() {
        const successStories = {
            dots: false,
            arrows: false,
            infinite: true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 10000,
            slidesToShow: 3,
            slidesToScroll: 1,
            draggable: false,
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        }


        return (
            <div className="successStories-container" id="story">
                <div className="container">
                    <div className="success-bg">
                        <div className="suceessimg-container">
                            <div className="success-img"></div>
                        </div>
                        <div className="success2bg">
                            <h1 >Our success stories</h1>
                            <div className="success-text">
                                I have had the privilege of meeting with these ladies from different walks of life and
                                it has been an exciting experience. Want to know what they think about my programs?
                            </div>
                            <Link to='successStories' spy={true} smooth={false} className="success-link" style={{ cursor: "pointer" }}> Read More
                                <span><BsArrowDown className="speaking-arrow" /> </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {this.state.loading ? (<div>
                    <div className="loading" style={{ paddingBottom: "30px" }}></div>
                </div>) : (
                    <div className="slider-testimony">
                        <div className="container">
                            <Slider ref={c => (this.slider = c)} {...successStories} className="Testimony-container" >

                                {this.state.data.sort((a, b) => (new Date(b.id)) - (new Date(a.id))).map((gwopfeedback, i) => {
                                    return (
                                        <div className="slider-container" key={i} >

                                            <div className="slide-img">

                                                {gwopfeedback.image === "" ? <img src="https://res.cloudinary.com/hayteetech/image/upload/v1641762029/Joyagunbiade.com/avatar_k8x5l3.png" alt="loading" /> :
                                                    <img src={gwopfeedback.image} width="50%" alt="loading" />}

                                            </div>
                                            <div className="content-container">
                                                <div className="names">{gwopfeedback.name}</div>
                                                <div className="location">{gwopfeedback.location}</div>
                                                <div className="tesstimony" >{gwopfeedback.testimony}</div>
                                            </div>

                                        </div>
                                    )
                                })}
                            </Slider>
                            {this.state.data.length > 3 ? (
                                <div className="slider-arrow" style={{ textAlign: 'right' }}>
                                    <button className="arrow-btn prev" onClick={() => this.slider.slickPrev()}><BsArrowLeft className="slider-arrow-left" /></button>
                                    <button className="arrow-btn next" onClick={() => this.slider.slickNext()}><BsArrowRight className="slider-arrow-right" /></button>
                                </div>
                            ) : ("")}


                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Successtories
