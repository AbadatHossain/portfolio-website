import React from "react";
import { Row } from "react-bootstrap";
import gitStatImg from "../../Assets/gitstat.png";

const Github = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 style={{ paddingBottom: "20px" }} data-aos="fade-right">
        How much <span className="primary-header">Code</span> I Write
      </h1>
      <div className="gitContainer" data-aos="fade-up">
        <img src={gitStatImg} alt="" />
      </div>
    </Row>
  );
}

export default Github;
