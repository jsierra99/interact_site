import React from 'react';
import "./about.scss";
import image from "../img/about.jpg";

const About = () => 
{
    return (
        <section class="about">
            <div class="container">
                <div class="grid_about">
                    <div class="about_1">
                        <img src={image} alt="office"></img>
                    </div>
                    <div class="about_2">
                        <h1>About Us</h1>
                        <div class="line_blue"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua.</p>
                        <h3>Why Choose Us?</h3>
                        <div class="grid_choose">
                            <div class="choose_1">
                                <li>Lorem ipsum dolor</li>
                                <li>Tempor incididunt</li>
                                <li>Lorem ipsum dolor</li>
                                <li>Incididunt ut labore</li>
                            </div>
                            <div class="choose_2">
                                <li>Aliquip ex ea commodo</li>
                                <li>Lorem ipsum dolor</li>
                                <li>Exercitation ullamco</li>
                                <li>Lorem ipsum dolor</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
