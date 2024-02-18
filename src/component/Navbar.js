/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            {props.NavTitle}
          </a>
        </div>
      </nav>




    </>
  );
}
