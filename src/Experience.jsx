import React from "react";
import "./styles/experince.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaPython,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

export default function Experience() {
  return (
    <main>
      <section className="section3">
        <h1>EXPERIENCE</h1>
        <br />
        <div className="exp">
          <div className="myexp">
            <div className="expYear">
              <h1>2025</h1>
              <p className="time">September 2025 – <br /> Present</p>
            </div>
            <div className="expDetails">
              <h3>Secratary | National Service Scheme – ANITS</h3>
              <p>
                Led and coordinated community service initiatives, managing
                volunteers and organizing social impact programs.
              </p>
            </div>
          </div> 
          <br />
          <div className="myexp">
            <div className="expYear">
              <h1>2025</h1>
              <p className="time">June 2025 – <br /> July 2025</p>
            </div>
            <div className="expDetails">
              <h3>Intern |TEKNOV8R Startup Solutions (OPC) Private Limited</h3>
              <p>
                Contributed to the development of a social-impact mobile application, primarily focusing on UI design using AI-assisted tools. Worked on creating intuitive, user-friendly interfaces and improving user experience across modules such as pregnancy tracking, health tips, and chatbot integration. Collaborated with the team to design and refine the MVP.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section3" id="Experience">
        <h1>SKILLS</h1>
        <br />
        <div className="skills">
          {/* Frontend */}
          <div className="myskills">
            <div className="skillset">
              <h2>Frontend Technologies</h2>
              <br />
              <ul className="skillList">
                <li>
                  <FaHtml5 className="skillIcon html" />
                  <div>
                    <h4>HTML</h4>
                    <h6>Intermediate</h6>
                  </div>
                </li>

                <li>
                  <FaCss3Alt className="skillIcon css" />
                  <div>
                    <h4>CSS</h4>
                    <h6>Intermediate</h6>
                  </div>
                </li>

                <li>
                  <FaJs className="skillIcon js" />
                  <div>
                    <h4>JavaScript</h4>
                    <h6>Basic</h6>
                  </div>
                </li>

                <li>
                  <FaReact className="skillIcon react" />
                  <div>
                    <h4>React.js</h4>
                    <h6>Intermediate</h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Backend */}
          <div className="myskills">
            <div className="skillset">
              <h2>Backend Technologies</h2>
              <br />
              <ul className="skillList">
                <li>
                  <FaNodeJs className="skillIcon node" />
                  <div>
                    <h4>Node.js</h4>
                    <h6>Intermediate</h6>
                  </div>
                </li>

                <li>
                  <SiExpress className="skillIcon express" />
                  <div>
                    <h4>Express.js</h4>
                    <h6>Basic</h6>
                  </div>
                </li>

                <li>
                  <SiMongodb className="skillIcon mongo" />
                  <div>
                    <h4>MongoDB</h4>
                    <h6>Intermediate</h6>
                  </div>
                </li>
                <li>
                  <FaDatabase className="skillIcon node" />
                  <div>
                    <h4>SQL</h4>
                    <h6>Intermediate</h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Programming */}
          <div className="myskills">
            <div className="skillset">
              <h2>Programming Languages</h2>
              <br />
              <ul className="skillList">
                <li>
                  <FaJava className="skillIcon java" />
                  <div>
                    <h4>Java</h4>
                    <h6>Advanced</h6>
                  </div>
                </li>

                <li>
                  <FaPython className="skillIcon python" />
                  <div>
                    <h4>Python</h4>
                    <h6>Intermediate</h6>
                  </div>
                </li>

                <li>
                  <span className="skillIcon c">C</span>
                  <div>
                    <h4>C</h4>
                    <h6>Intermediate</h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
