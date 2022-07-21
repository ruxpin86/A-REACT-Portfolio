import React from "react";
import useMediaQuery from "../lib/useMediaQuery";
import aimImage from "./images/almost-faimous.png";
import eventListerImg from "./images/event-listener-main.png";
import codeTeam from "./images/code-team.png";
import { Github } from "@emotion-icons/bootstrap/Github";
const data = [
  {
    title: "Almost Faimous",
    description:
      "This was a super fun project that leaned on that geriatric millenial nostalgia of the late 90's and early 2000's. When you launch this app you are presented with a faux Windows 98 desktop and the ability to login or create an account that then brings you to a communal chat window. The coolest and most rewarding aspect of working on this project was working with socket.io for the first time and figuring out how to get it working properly.",
    github_link: "https://github.com/ruxpin86/Almost-FAIM-ous",
    demo_link: "https://almost-faim-ous.herokuapp.com/",
    img: aimImage,
  },
  {
    title: "Code Team ASSEMBLE",
    description:
      "Need to dynamically generate a snapshot view of your staff as a manager? Well in this I made a CLI to quickly generate a page where you can get a succinct and organized view of your current staff with the ability to dynamically generate links to each persons contact information.",
    github_link: "https://github.com/ruxpin86/code-team-ASSEMBLE",
    demo_link: "https://almost-faim-ous.herokuapp.com/",
    img: codeTeam,
  },
  {
    title: "DU Event Listeners",
    description:
      "As a final send off project for boot camp our team decided to create a place for our cohort to connect and collaborate even after all the bootcamp resources dry up. It is our hope that this will be shared with past and future cohorts so that people can: meet, share events, generate forum topics, share resources, and even chat live with other students and alumni. We believe this is not only a great project to exercise and display what we have learned over the past three months, but also a great oppurtunity to give back to those who endeavor to better themselves by learning to code!",
    github_link: "https://github.com/ruxpin86/DU-Event-Listeners",
    demo_link: "https://almost-faim-ous.herokuapp.com/",
    img: eventListerImg,
  },
];

const PortfolioItem = (props) => {
  const { title, description, demo_link, img, github_link } = props.data;
  const isMobile = useMediaQuery("max-width: 902px");
  return (
    <div className="portfolio-item">
      <div className="portfolio-row">
        <div className="portfolio-text">
          <h3>{title}</h3>
          {isMobile && <img className="portfolio-pic" src={img} />}
          <p>{description}</p>
          <a href={github_link}>
            <Github size={35} />
          </a>
          <a href={demo_link}>Demo</a>
        </div>
        {!isMobile && <img className="portfolio-pic" src={img} />}
      </div>
    </div>
  );
};

export default function Portfolio() {
  return (
    <div>
      {data.map((d, i) => (
        <PortfolioItem key={i} data={d} />
      ))}
    </div>
  );
}
