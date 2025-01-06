import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Gafsi USA.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm passionate about development
              <br />
              <br />I have gained strong skills in
              <i>
                <b className="purple"> React.js, Next.js, TypeScript, React Native. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> as well as <b className="purple">
                  Node.js
                </b> and  <b className="purple">
                Express
                </b> for the back-end{" "}
               
              </i>
              <br />
              <br />
              I work with <b className="purple">
                  {" "}
                  MySQL
                </b>  and <b className="purple">
                  {" "}
                  NoSQL 
                </b> databases, and build modern, scalable, and high-performance web and mobile applications. 
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{borderRadius:250}} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ahmedgafsi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="www.linkedin.com/in/ahmed-gafsi-a9a1902a9"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                 href="mailto:ahmed.gafsi.2001@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ahmed96___a.g/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />  
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
