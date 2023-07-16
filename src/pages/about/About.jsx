/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* The code is importing necessary dependencies and resources for the `Home` component. */
import React from "react";
import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./about.css";
import Resume from "../resume/Resume";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";

/* The code defines a functional component called `Home` in JavaScript React. This component returns
JSX code that represents the structure and content of a home section on a web page. */
const About = () => {
  return (
    <>
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>Hey, I'm <br/>Gaurav Kumar Jha.</span> <h5>Full Stack Web Developer</h5>
          </h1>
          <p className="home__description">
          I am an accomplished full stack web developer proficient in both front-end and back-end development. With a wide range of skills and a versatile approach, I excel in creating and maintaining robust web applications from start to finish.
          </p>
          <Link to="/resume" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
    <Resume/>
    <Portfolio/>
    <Contact/>
    </>
  );
};

export default About;
