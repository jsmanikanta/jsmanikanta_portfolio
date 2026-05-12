import React from "react";
import "./styles/project.css";

const projects = [
  {
    img: "/driving.png",
    title: "Printkart",
    tech: "Full stack",
    points: [
      "Developed a responsive website for a driving school with services like training, car rentals, and car sales",
      "Implemented user-friendly forms for course enrollment, contact, and vehicle listing submissions",
      "Built backend APIs for handling car listings, admin approvals, and data management",
      "Integrated features like WhatsApp contact, call actions, and real-time service inquiries",
      "Designed a clean and modern UI for better user experience across all devices",
    ],
    github: "https://saidrivingschoolandtravels.in/",
  },
  {
    img: "/pk.png",
    title: "Printkart",
    tech: "MERN stack",
    points: [
      "Designed a student printout ordering platform with document upload functionality",
      "Allows users to select print options such as color mode and page sides",
      "Supports classroom and home delivery with custom order assistance",
    ],
    github: "https://printkart.mybookhub.store/",
  },
  {
    img: "/mbh.png",
    title: "MyBookHub",
    tech: "MERN stack",
    points: [
      "Developed an online platform for buying and selling academic and non-academic books",
      "Provides category-based navigation and search for easy book discovery",
      "Integrated printout ordering service for notes and study materials",
    ],
    github: "https://mybookhub.store/",
  },
  {
    img: "/recipeapp.png",
    title: "Recipe app",
    tech: "HTML,CSS,JS",
    points: [
      "Created Recipe Using HTML,CSS,JS, THEMEALDB api",
      "Used themealdb api to get the details of the particular meal",
      "This recipe app gives information about the searched recipe",
    ],
    github: "https://github.com/jsmanikanta/Amazon_clone",
  },
  {
    img: "/rockpaperscissors.png",
    title: "Rock paper Scissors Game",
    tech: "HTML,CSS,JS",
    points: [
      "Created Rock paper Scissors Using HTML,CSS,JS",
      "Used some basic CSS properties",
      "Used JavaScript for generating random choice by computer",
    ],
    github: "https://github.com/jsmanikanta/Amazon_clone",
  },
];

export default function Projects() {
  return (
    <main>
      <section className="section4" id="projects">
        <h1>PROJECTS</h1>
        <br />
        <br />

        {projects.map((p) => (
          <div className="projectBlock" key={p.title}>
            <div className="imgcontainer" tabIndex={0}>
              <img src={p.img} className="image" alt={p.title} />
              <div className="pdescription">
                <p>
                  <b>Title: {p.title}</b>
                </p>
                <br />
                <p>Technologies used: {p.tech}</p>
                {p.points.map((x, i) => (
                  <p key={i}>{x}</p>
                ))}
                <br />
                <div className="buttoneffect">
                  <a href={p.github} target="_blank" rel="noreferrer">
                    <span className="button">Visit</span>
                  </a>
                </div>
              </div>
            </div>

            <br />
            <br />
          </div>
        ))}
      </section>
    </main>
  );
}
