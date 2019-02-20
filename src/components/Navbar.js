import React from "react";
import "../styles/Navbar.css";

function Navbar(props) {
  return (
    <div className="navbar navbar-expand-lg fixed-top container-fluid-nav text-center">
    <div className="navbar navbar-expand-lg fixed-top collapse navbar-collapse container-fluid-nav text-center">
      <ul className="nav navbar-nav mr-auto">
        <li><b>Ritesh Kumar</b></li>
        <li>Email : rskanb@gmail.com</li>
        <li>Phone : 510-556-7877</li>
        {/* <li><a className="brand nav-link" href="/"><h1>Ritesh Kumar</h1></a></li>
        <li><a className="brand nav-link" href="/"><h2>Email : <span>rs.kanbi@gmail.com</span></h2></a></li>
        <li><a className="brand nav-link" href="/"><h2>Phone : <spam>510-556-7877</spam></h2></a></li> */}
      </ul>
    </div>
    </div> 
  );
}

export default Navbar;
