import React from "react";
import '@fortawesome/free-regular-svg-icons'
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java",
    "SpringBoot",
    "Spring Security",
    "Spring Cloud",
    "Angular",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SCSS",
    "Python",
    "MySQL",
    "PostgreSQL",
    "RabbitMQ",
    "ActiveMQ",
    "Redis",
    "Docker"
];
function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>About Me</h1>
            <div className="skills-grid">
                <div className="skill">
                    {/*<FontAwesomeIcon icon={faReact} size="3x"/>*/}
                    <p>Hello! I’m Raisibe, a software developer with a passion for solving complex problems through innovative software solutions.
                        With a deep understanding of both backend and frontend development, I’ve built projects that range from AI-generated art galleries to practical,
                        real-life solutions like a currency converter
                        My experience spans the entire tech stack—whether it’s architecting scalable microservices, developing RESTful APIs,
                        or crafting user-friendly interfaces with Angular,
                        I enjoy the balance of logic and creativity that full-stack development offers.
                    </p>
                        <p>From optimizing backend performance with Spring Boot to enhancing
                            the user experience through sleek,
                            responsive front-end designs, my goal is to always deliver reliable,
                            efficient, and user-friendly applications that make a real difference.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;