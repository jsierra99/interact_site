import React from 'react';
import "./home.scss";
import Image from "../img/home.jpg";

const Home = () => 
{
    return (
        <section class="home">
            <img src={Image} alt="background"></img>
            <div class="container">
                <h1>we are interact</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed 
                commodo nibh ante facilisis bibendum.</p>
                <button class="learn">learn more</button>
            </div>
        </section>
    )
}

export default Home
