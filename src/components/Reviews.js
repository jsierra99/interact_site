import React from 'react';
import "./reviews.scss";
import client1 from "../img/client_1.jpg";
import client2 from "../img/client_2.jpg";
import client3 from "../img/client_3.jpg";
import client4 from "../img/client_4.jpg";
import client5 from "../img/client_5.jpg";
import client6 from "../img/client_6.jpg";

const Reviews = () => 
{
    return (
        <section class="reviews">
            <div class="container">
                <h1>what our clients say</h1>
                <div class="line_blue"></div>
                <div class="grid_reviews">
                    <div class="flex_client">
                        <img src={client1}></img>
                        <div class="quote">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo 
                            nibh ante facilisis bibendum dolor feugiat at."</p>
                            <h4>- John Doe</h4>
                        </div>
                    </div>
                    <div class="flex_client">
                        <img src={client2}></img>
                        <div class="quote">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo 
                            nibh ante facilisis bibendum dolor feugiat at."</p>
                            <h4>- Mikey Garcia</h4>
                        </div>
                    </div>
                    <div class="flex_client">
                        <img src={client3}></img>
                        <div class="quote">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo 
                            nibh ante facilisis bibendum dolor feugiat at."</p>
                            <h4>- Spence, Jr</h4>
                        </div>
                    </div>
                    <div class="flex_client">
                        <img src={client4}></img>
                        <div class="quote">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo 
                            nibh ante facilisis bibendum dolor feugiat at."</p>
                            <h4>- Suly Torres</h4>
                        </div>
                    </div>
                    <div class="flex_client">
                        <img src={client5}></img>
                        <div class="quote">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo 
                            nibh ante facilisis bibendum dolor feugiat at."</p>
                            <h4>- Brandon Rios</h4>
                        </div>
                    </div>
                    <div class="flex_client">
                        <img src={client6}></img>
                        <div class="quote">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo 
                            nibh ante facilisis bibendum dolor feugiat at."</p>
                            <h4>- Karina Garcia</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews
