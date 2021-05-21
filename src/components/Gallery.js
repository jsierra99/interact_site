import React from 'react';
import "./gallery.scss";
import Gal1 from "../img/gallery_1.jpg";
import Gal2 from "../img/gallery_2.jpg";
import Gal3 from "../img/gallery_3.jpg";
import Gal4 from "../img/gallery_4.jpg";
import Gal5 from "../img/gallery_5.jpg";
import Gal6 from "../img/gallery_6.jpg";
import Gal7 from "../img/gallery_7.jpg";
import Gal8 from "../img/gallery_8.jpg";
import Gal9 from "../img/gallery_9.jpg";

const Gallery = () => 
{
    return (
        <section class="gallery">
            <div class="container">
                <h1>Gallery</h1>
                <div class="line_blue"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
                <div class="grid_gallery">
                    <div class="gallery_1">
                        <img src={Gal1} alt="imac"></img>
                        <div class="more">
                            <p class="text">First Image</p>
                        </div>
                    </div>
                    <div class="gallery_2">
                        <img src={Gal2} alt="samsung laptop"></img>
                        <div class="more">
                            <p class="text">Second Image</p>
                        </div>
                    </div>
                    <div class="gallery_3">
                        <img src={Gal3} alt="ipad"></img>
                        <div class="more">
                            <p class="text">Third Image</p>
                        </div>
                    </div>
                    <div class="gallery_4">
                        <img src={Gal4} alt="two imacs"></img>
                        <div class="more">
                            <p class="text">Fourth Image</p>
                        </div>
                    </div>
                    <div class="gallery_5">
                        <img src={Gal5} alt="imac plus ipad"></img>
                        <div class="more">
                            <p class="text">Fifth Image</p>
                        </div>
                    </div>
                    <div class="gallery_6">
                        <img src={Gal6} alt="iphone"></img>
                        <div class="more">
                            <p class="text">Sixth Image</p>
                        </div>
                    </div>
                    <div class="gallery_7">
                        <img src={Gal7} alt="mug and glasses"></img>
                        <div class="more">
                            <p class="text">Seventh Image</p>
                        </div>
                    </div>
                    <div class="gallery_8">
                        <img src={Gal8} alt="monitor"></img>
                        <div class="more">
                            <p class="text">Eigth Image</p>
                        </div>
                    </div>
                    <div class="gallery_9">
                        <img src={Gal9} alt="sticky notes"></img>
                        <div class="more">
                            <p class="text">Nineth Image</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery
