import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import SummerCampImg from "../../Assets/Projects/SummerCampImg.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import chefImg from "../../Assets/Projects/chefImg.png";
import ToyMarketplaceImg from "../../Assets/Projects/ToyMarketplaceImg.png";
import JobHunterImg from "../../Assets/Projects/JobHunterImg.png";
import LegalHouseImg from "../../Assets/Projects/LegalHouseImg.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={chefImg}
              title="Chef Receipe Hunter"
              description="This is a fully functional Chef Receipe Hunter website that uses React.js + tailwind css frameworks wit daisyUI and CSS in the front end and NodeJs and express js in backend and MongoDb as Database."
              ghLink="https://github.com/AbadatHossain/chef-receipe-hunter-client"
              demoLink="https://chef-receipe-hunter-client.web.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website which supports both dark and light mode.I have recently completed my some projects using MongoDB. whichl I attached to my resume. "
              ghLink="https://github.com/AbadatHossain/portfolio-website"
              demoLink="https://rahuljha.tech/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={SummerCampImg}
              title="Summer Camp"
              description="This is a Full Stack project which Using login system. Without login is not possible to add any game and without admin is not possible manage users.By using ReactJS, NodeJS, Express, and MongoDB as the database."
              ghLink="https://github.com/AbadatHossain/summer-camp-client"
              demoLink="https://summer-camp-779b1.web.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={ToyMarketplaceImg}
              title="Toy Marketplace"
              description="An online toy marketPlace using React, Node, Express, and MongoDB as the database. It allows you to keep track of your expenses, investments, and savings. All past transactions are listed, and you can also delete them. This is a MERN Stack and Using login system. Without login is not possible to add any toy. "
              ghLink="https://github.com/AbadatHossain/toy-marketplace-client-side"
              demoLink="https://toy-marketplace-c46df.web.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={JobHunterImg}
              title="Job Hunter"
              description="Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish. In this project uses statistics and some new features. "
              ghLink="https://github.com/Porgramming-Hero-web-course/b7a9-career-hub-AbadatHossain"
              demoLink="https://brilliant-pegasus-8c11ca.netlify.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={LegalHouseImg}
              title="Legal House"
              description="Legally, a home is a person's permanent primary residence—even if they aren't currently living there.
              A physical location is still legally considered a home if there is an intention to return and the resident has not claimed someplace else as their legal place of permanent or principal residence. In this project only static. "
              ghLink="https://github.com/Programming-Hero-Web-Course4/b7-legal-house-AbadatHossain"
              demoLink="https://gorgeous-gumdrop-2b9fbe.netlify.app/#"
            />
          </Col>
          

        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
