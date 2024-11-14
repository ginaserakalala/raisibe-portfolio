import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import Chip from "@mui/material/Chip";

const labelsFirst = [
  "Java",
  "SpringBoot",
  "PostgreSQL",
  "Kubernetes",
  "Jenkins",
  "Grafana",
  "Git",
  "ActiveMQ",
  "Backstage framework"
];

const labelFirstKnowledge = [
    "Python",
    "Reactjs",
    "Javascript",
    "Git",
    "Nodejs"
];
const labelFirstEnviro = [
    "Java",
    "Springboot",
    "Spring Security",
    "Flyway",
    "Angular",
    "Javascript",
    "Postgresql",
    "Nodejs"
];
const labelFirstTechno=[
    "Javascript",
    "Html&CSS",
    "Git"
];
const labelFirstSigma=[
    "Javascript",
    "Reactjs",
    "Nodejs",
    "Git"
];


function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{background: 'white', color: 'rgb(39, 40, 34)'}}
              contentArrowStyle={{borderRight: '7px solid  white'}}
              date="December 2022 - August 2024"
              iconStyle={{background: '#5000ca', color: 'rgb(39, 40, 34)'}}
              icon={<FontAwesomeIcon icon={faBriefcase}/>}
          >

            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Momentum</h4>
            <p>
              Migrated key microservices from IBM WebSphere to Kubernetes,
              significantly boosting system scalability and resilience,
              which reduced downtime and improved reliability.
            </p>
          </VerticalTimelineElement>
          <div className="skills-container-timeline">
            <div className="skills-grid-timeline">
              <div className="skill-timeline">
                <div className="flex-chips">
                  {labelsFirst.map((label, index) => (
                      <Chip key={index} className='chip' label={label}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="December 2022 - August 2024"
              iconStyle={{background: '#5000ca', color: 'rgb(39, 40, 34)'}}
              icon={<FontAwesomeIcon icon={faBriefcase}/>}
          >
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Enviro365</h4>
            <p>
              Improved etalente.co.za, a talent management platform,
              by implementing new features that enabled talents to showcase
              profiles to potential employers.
            </p>
          </VerticalTimelineElement>
          <div className="skills-container-timeline">
            <div className="skills-grid-timeline">
              <div className="skill-timeline">
                <div className="flex-chips">
                  {labelFirstEnviro.map((label, index) => (
                      <Chip key={index} className='chip' label={label}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Jul 2022 - Dec 2022"
              iconStyle={{background: '#5000ca', color: 'rgb(39, 40, 34)'}}
              icon={<FontAwesomeIcon icon={faBriefcase}/>}
          >
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Technopreneurship Center</h4>
            <p>
              Designed and developed responsive websites for SMMEs,
              helping numerous businesses strengthen their online presence and expand their reach.
            </p>
          </VerticalTimelineElement>
          <div className="skills-container-timeline">
            <div className="skills-grid-timeline">
              <div className="skill-timeline">
                <div className="flex-chips">
                  {labelFirstTechno.map((label, index) => (
                      <Chip key={index} className='chip' label={label}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="July 2022 - December 2022"
              iconStyle={{background: '#5000ca', color: 'rgb(39, 40, 34)'}}
              icon={<FontAwesomeIcon icon={faBriefcase}/>}
          >
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Sigma Solutions</h4>
            <p>
              Contributed to "Pitch IT," a startup platform for connecting entrepreneurs with investors,
              by designing user-friendly UI components with React.js,
              enhancing the overall user experience and attracting new platform sign-ups.
            </p>
          </VerticalTimelineElement>
          <div className="skills-container-timeline">
            <div className="skills-grid-timeline">
              <div className="skill-timeline">
                <div className="flex-chips">
                  {labelFirstSigma.map((label, index) => (
                      <Chip key={index} className='chip' label={label}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="April 2021 - June 2021"
              iconStyle={{background: '#5000ca', color: 'rgb(39, 40, 34)'}}
              icon={<FontAwesomeIcon icon={faBriefcase}/>}
          >
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Knowledge Factory</h4>
            <p>
              Supported data acquisition projects by developing scalable web scraping solutions,
              facilitating efficient data extraction.
            </p>
          </VerticalTimelineElement>
          <div className="skills-container-timeline">
            <div className="skills-grid-timeline">
              <div className="skill-timeline">
                <div className="flex-chips">
                  {labelFirstKnowledge.map((label, index) => (
                      <Chip key={index} className='chip' label={label}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;