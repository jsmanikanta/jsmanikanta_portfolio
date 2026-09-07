import React from "react";
import "./styles/about.css";

export default function About() {
  return (
    <main>
      <div>
        <p className="about">
          I’m a final-year Electrical Engineering student and full-stack
          developer who enjoys building practical web applications that solve
          real problems. I work mainly with JavaScript, React, Node.js, and
          MongoDB, and I enjoy taking an idea from concept to a working product.
          Through my projects, I’ve gained hands-on experience in both frontend
          development and backend logic, with a focus on creating simple,
          reliable, and user-friendly experiences. I’m always curious to learn
          new technologies, improve my problem-solving skills, and build
          products that are genuinely useful to people.
        </p>
      </div>
      <section className="section2" id="about">
        <h1>EDUCATION</h1>
        <br />
        <div className="edu">
          <div className="study">
            <div className="year">
              <br />
              <br />
              <h3>2027</h3>
            </div>
            <hr />
            <div className="course">
              <h2>
                <b>B.Tech</b>
              </h2>
              <h5>ANITS,Visakhapatnam</h5>
              <p>
                Currently Pursuing my B.Tech in Electrical and Electronics
                Engineering at ANITS,Visakhapatnam
              </p>
            </div>
          </div>

          <br />
          <br />

          <div className="study">
            <div className="year">
              <br />
              <br />
              <h3>2023</h3>
            </div>
            <hr />
            <div className="course">
              <h2>
                <b>
                  Intermediate (12<sup>th</sup>)
                </b>
              </h2>
              <h5>Bhashyam Junior College,Guntur</h5>
              <p>
                I Completed my Intermediate at Bhashyam Junior college. In MPC
                (Maths,Physics,Chemistry) as major Subjects
              </p>
            </div>
          </div>

          <br />
          <br />

          <div className="study">
            <div className="year">
              <br />
              <br />
              <h3>2021</h3>
            </div>
            <hr />
            <div className="course">
              <h2>
                <b>
                  10<sup>th</sup>
                </b>
              </h2>
              <h5>Bhashyam High School,Penugonda</h5>
              <p>
                I completed my 10<sup>th</sup> standard at Bhashyam High School.
                Where I was a top in the class and actively participated in
                cultural activities
              </p>
            </div>
          </div>
          <br />
        </div>
      </section>
    </main>
  );
}
