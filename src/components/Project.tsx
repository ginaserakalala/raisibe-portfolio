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
                    <p>Developed a web application using Java and Angular that runs an ai generated art gallery</p>
                </div>

                <div className="project">
                    <a href="https://github.com/ginaserakalala/currency-converter" target="_blank" rel="noreferrer"><img
                        src={currency_converter}
                        className="zoom"
                        alt="thumbnail"
                        width="100%"/></a>
                    <a href="https://github.com/ginaserakalala/currency-converter" target="_blank" rel="noreferrer"><h2>Currency Converter</h2></a>
                    <p>Developed a web application that converts currencies using Vuejs and Nodejs that runs</p>
                </div>

                <div className="project">
                    <a href="https://github.com/ginaserakalala/recipe-finder" target="_blank" rel="noreferrer"><img
                        src={recipe_finder_mock}
                        className="zoom"
                        alt="thumbnail"
                        width="100%"/></a>
                    <a href="https://github.com/ginaserakalala/recipe-finder" target="_blank" rel="noreferrer"><h2>Taste
                        Quest</h2></a>
                    <p>Developed a web application that returns recipes based on the ingredients that a user enters
                        using Angular and Nodejs</p></div>

                <div className="project">
                    <a href="https://github.com/ginaserakalala/space-images-explorer" target="_blank" rel="noreferrer"><img
                        src={space_mock}
                        className="zoom"
                        alt="thumbnail"
                        width="100%"/></a>
                    <a href="https://github.com/ginaserakalala/space-images-explorer" target="_blank" rel="noreferrer"><h2>Space
                        Explorer</h2></a>
                    <p>Developed a web application using Reactjs and Nodejs that allows users to view space images from
                        NASA.</p>
                </div>
            </div>


        </div>
    );
}

export default Project;