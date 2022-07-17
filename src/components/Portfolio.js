import React from "react";
import aimImage from "./images/almost-faimous.png";
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
    img: aimImage,
  },
];

const PortfolioItem = (props) => {
  const { title, description, demo_link, img, github_link } = props.data;
  return (
    <div className="portfolio-item">
      <div className="portfolio-row">
        <div className="portfolio-text">
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={github_link}>GitHub</a>
          <a href={demo_link}>Demo</a>
        </div>
        <img className="faimous" src={img} />
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
