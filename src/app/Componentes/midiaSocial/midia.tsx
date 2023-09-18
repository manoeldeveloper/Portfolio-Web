import React from "react";
import { Insta } from "@/app/icons/insta";
import { Linkedin } from "@/app/icons/linkedin";
import { GitHub } from "@/app/icons/github";
import "./midia.scss";

interface MidiaProps {}

export function Midia(props: MidiaProps) {
  return (
    <div className="social">
      <a href="https://www.instagram.com/manoel_dev/">
        <Insta /> 
      </a>
      <a href="https://www.linkedin.com/in/manoelfaustino/">
        <Linkedin />
      </a>
      <a href="https://github.com/manoeldeveloper">
        <GitHub />
      </a>
    </div>
  );
}
