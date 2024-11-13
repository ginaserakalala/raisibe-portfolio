import React from "react";
import art_gallery_mock from '../assets/images/art_gallery_mock.png';
import recipe_finder_mock from '../assets/images/recipe_finder_mock.png';
import currency_converter from '../assets/images/currency_converter_mock.png';
import space_mock from '../assets/images/space_mock.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://github.com/ginaserakalala/ecommerce-ui" target="_blank" rel="noreferrer"><img
                        src={art_gallery_mock}
                        className="zoom"
                        alt="thumbnail"
                        width="100%"/></a>
                    <a href="https://github.com/ginaserakalala/ecommerce-ui" target="_blank" rel="noreferrer"><h2>SnowySky
                        Art
                        Gallery</h2></a>
                    <p>Inspired by a vision of accessible digital art,
                        I created SnowySky to showcase AI-generated artwork. Using Java and Angular,
                        I developed a dynamic,
                        curated gallery that provides a fresh visual experience each visit,
                        merging tech and creativity for an engaging user journey.</p>
                </div>

                <div className="project">
                    <a href="https://github.com/ginaserakalala/currency-converter" target="_blank" rel="noreferrer"><img
                        src={currency_converter}
                        className="zoom"
                        alt="thumbnail"
                        width="100%"/></a>
                    <a href="https://github.com/ginaserakalala/currency-converter" target="_blank" rel="noreferrer"><h2>Currency Converter</h2></a>
                    <p> The Currency Converter project came from the need for simplicity in international transactions.
                        I wanted a tool that could offer real-time, accurate conversion rates without the unnecessary
                        features of many online converters using Vue.js and Node.js</p>
                </div>

                <div className="project">
                    <a href="https://github.com/ginaserakalala/recipe-finder" target="_blank" rel="noreferrer"><img
                        src={recipe_finder_mock}
                        className="zoom"
                        alt="thumbnail"
                        width="100%"/></a>
                    <a href="https://github.com/ginaserakalala/recipe-finder" target="_blank" rel="noreferrer"><h2>Taste
                        Quest</h2></a>
                    <p>Taste Quest was born from the challenge of cooking with limited ingredients.
                        With Angular and Node.js, I created a user-friendly app to suggest recipes
                        based on what’s on hand,
                        encouraging resourcefulness and creativity in the kitchen.</p></div>

                <div className="project">
                    <a href="https://github.com/ginaserakalala/space-images-explorer" target="_blank" rel="noreferrer"><img
                        src={space_mock}
                        className="zoom"
                        alt="thumbnail"
                        width="100%"/></a>
                    <a href="https://github.com/ginaserakalala/space-images-explorer" target="_blank" rel="noreferrer"><h2>Space
                        Explorer</h2></a>
                    <p>Fascinated by space, I developed Space Explorer to bring NASA’s incredible images
                        to users. Built with React.js and Node.js, the app lets users explore the cosmos
                        from their screens,
                        making the wonders of space both accessible and captivating</p>
                </div>
            </div>


        </div>
    );
}

export default Project;