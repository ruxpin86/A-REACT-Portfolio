import React from "react";
import Image from "./images/thumbnail.jpeg";

export default function AboutMe() {
  return (
    <>
      <br></br>
      <main>
        <h2>A little about me...</h2>
        <section>
          <img className="headshot" src={Image} />
          <div>
            <h4 className="smooth">"Smooth Brain Boy"</h4>
            <p>
              I am a recently graduated student of Univeristy of Denver's Full
              Stack Coding Boot Camp. Over the past three months I have immersed
              myself in learning to be able to begin a career in tech. I am
              extrememly excited to learn more about front end technologies like
              GSAP, spline, and three.js to better flesh out my skills in
              creating responsive and engaging web apps.
            </p>
          </div>
          <div></div>
        </section>
      </main>
    </>
  );
}
