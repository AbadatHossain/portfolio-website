import React from "react";
import "./preloader.css";
const Pre = (props) => {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
