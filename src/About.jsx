import React from "react";
import "./styles/about.css";

export default function About() {
  return (
    <main>
      <div>
        <p className="about">
          I’m a passionate full-stack web developer with a strong focus on
          building clean, interactive, and user-friendly web applications. I
          enjoy working with **JavaScript, React, Node.js, and MongoDB**, and I
          like turning ideas into functional, real-world products. I have
          hands-on experience developing projects that combine thoughtful UI
          design with solid backend logic. I’m continuously learning and
          experimenting with modern web technologies to improve performance and
          user experience. I’m motivated, detail-oriented, and excited to grow
          as a developer by solving meaningful problems.
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
