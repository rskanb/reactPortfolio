import React from "react";
import "../styles/Header.css";

const subject = ["JavaScript","NodeJs","ReactJs","ExpressJs","JQuery","MongoDB","MySQL","HTML5","HTML","CSS"];
function Header() {
  return (
    <header className="header">
      <h2>Full-Stack Developer, UC Berkeley Extension, Berkeley, CA</h2>
      <ul>
      {subject.map(name => {
        return (
          <li>&nbsp;&bull;&nbsp;{name}&nbsp;</li>
        )
      })}
      </ul>
    </header>
  );
}

export default Header;
