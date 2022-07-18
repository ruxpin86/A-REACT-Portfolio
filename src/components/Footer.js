import React from "react";
import { Github } from "@emotion-icons/bootstrap/Github";
import { Linkedin } from "@emotion-icons/bootstrap/Linkedin";
import { Youtube } from "@emotion-icons/boxicons-logos/Youtube";

export default function footer() {
  return (
    <>
      <footer>
        <a href="https://github.com/ruxpin86" target="blank">
          <Github size="30" />
        </a>
        <a
          href="https://www.linkedin.com/in/william-ted-glynn-71b269125"
          target="blank"
        >
          <Linkedin size="30" />
        </a>
        <a
          href="https://www.youtube.com/user/williamEcubed/videos"
          target="blank"
        >
          <Youtube size="30" />
        </a>
      </footer>
    </>
  );
}
