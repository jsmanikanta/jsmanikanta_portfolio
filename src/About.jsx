import React from "react";
import "./styles/about.css";

export default function About() {
  return (
    <main>
      <section className="section2" id="about">
        <h1>EDUCATION</h1>
        <br /><br /><br />

        <div className="edu">
          <div className="study">
            <div className="year"><br /><br /><br /><h3>2027</h3></div>
            <hr />
            <div className="course">
              <h2><b>B.Tech</b></h2>
              <h5>ANITS,Vizag</h5>
              <p>
                Currently Pursuing my B.Tech in Electrical and Electronics Engineering
                at ANITS,Vizag
              </p>
            </div>
          </div>

          <br /><br />

          <div className="study">
            <div className="year"><br /><br /><br /><h3>2023</h3></div>
            <hr />
            <div className="course">
              <h2><b>Intermediate (12<sup>th</sup>)</b></h2>
              <h5>Bhashyam Junior College,Guntur</h5>
              <p>
                I Completed my Intermediate at Bhashyam Junior college. In MPC
                (Maths,Physics,Chemistry) as major Subjects
              </p>
            </div>
          </div>

          <br /><br />

          <div className="study">
            <div className="year"><br /><br /><br /><h3>2021</h3></div>
            <hr />
            <div className="course">
              <h2><b>10<sup>th</sup></b></h2>
              <h5>Bhashyam High School,Penugonda</h5>
              <p>
                I completed my 10<sup>th</sup> standard at Bhashyam High School.
                Where I was a top in the class and actively participated in cultural activities
              </p>
            </div>
          </div>

          <br />
        </div>
      </section>
    </main>
  );
}
