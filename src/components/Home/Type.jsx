import React from "react";
import Typewriter from "typewriter-effect";
import ResumeNew from "../Resume/ResumeNew";

const Type = () => {
  return (
    <div>
      <Typewriter
        options={{
          strings: [
            "MERN Stack Developer",
            "React Front End Developer",
            "Open Source Contributor",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
      <ResumeNew></ResumeNew>
    </div>
  );
};

export default Type;
