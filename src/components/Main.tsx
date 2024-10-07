import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://live.staticflickr.com/65535/54049369584_295b02f34a_n.jpg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ginaserakalala" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/gina-shttps://www.linkedin.com/in/gina-serakalala/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Raisibe Serakalala</h1>
          <p>Full Stack Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/ginaserakalala" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/gina-serakalala/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
