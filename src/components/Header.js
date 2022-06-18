import React from "react";
import Brand from "./imgs/Icones/Poké_Ball_icon.png";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src={Brand} width="30px" height="30px"></img>
      </a>
      
      <form className="form-inline my-2 my-lg-0" method="GET" action="">
        <input
          className="mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
}
