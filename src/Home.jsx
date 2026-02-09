import React from "react";
import Typewriter from "./Typewriter";
import "./styles/home.css";
import "./styles/global.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function Home() {
  return (
    <main>
      <section className="firstsection" id="home">
        <div className="leftsection">
          Hi, My name is <span className="purple">Manikanta</span>
          <br />
          I&apos;m a <br />
          <Typewriter />
          <br />
          <span id="element"> </span>
        </div>

        <div className="rightsection">
          <img src="/main.jpg" alt="Manikanta" />
          <br />
          <p>
            <a className="resumeBtn" href="/resume.pdf" download>
              Download Resume
            </a>
          </p>
        </div>
      </section>

      <section className="section5" id="contact">
        <h2>Get In Touch</h2>
        <div className="contactme">
          <div className="contactItem">
            <FaEnvelope className="contactIcon mail" />
            <a href="mailto:mail@jsmanikanta.in">mail@jsmanikanta.in</a>
          </div>

          <div className="contactItem">
            <FaLinkedin className="contactIcon linkedin" />
            <a
              href="https://www.linkedin.com/in/jsmanikanta"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/jsmanikanta
            </a>
          </div>
        </div>

        <div className="link">
          <h2>Links</h2>
          <div className="contactItem">
            <FaGithub className="contactIcon github" />
            <a
              href="https://github.com/jsmanikanta"
              target="_blank"
              rel="noreferrer"
            >
              github.com/jsmanikanta
            </a>
          </div>
          <div className="contactItem">
            <SiLeetcode className="contactIcon leetcode" />
            <a
              href="https://leetcode.com/u/jsmanikanta"
              target="_blank"
              rel="noreferrer"
            >
              leetcode.com/u/jsmanikanta
            </a>
          </div>

          <div className="contactItem">
            <SiGeeksforgeeks className="contactIcon gfg" />
            <a
              href="https://www.geeksforgeeks.org/user/jsmanikanta/"
              target="_blank"
              rel="noreferrer"
            >
              geeksforgeeks.org/jsmanikanta
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
