import React, { useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import {
  BsFillBookFill,
  BsGithub,
  BsFillShareFill,
  BsFillPersonPlusFill,
  BsFillCpuFill
} from "react-icons/bs";

import {RiLoginBoxLine} from "react-icons/ri";

import styles from "./styles/HomePage.module.css";

import psnLogo from "./assets/png-transparent-sports-car-silhouette-car-compact-car-monochrome-car-thumbnail.png";

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("psnToken") !== null) {
      navigate("/newsfeed");
    }
  });

  return (
    <Container fluid>
      <Row className={styles.container}>
        <Col className={`${styles.colContainerLeft} ${styles.leftBackground}`}>
          <div>
            <Row>
              <h3 className="my-3">
                <BsFillBookFill /> This Proyect is Final Project for Web Development Course System Operative 2024 - 1
              </h3>
            </Row>
            <Row>
              <h3 className="my-4">
                <BsFillCpuFill /> ReactJS + Java Spring + MongoDB
              </h3>
            </Row>
            <Row>
              <h3 className="my-3">
                <BsGithub /> The source code is open
              </h3>
            </Row>
            <Row>
              <h3 className="my-3">
                <BsFillShareFill /> Join and share this Final project
              </h3>
            </Row>
          </div>
        </Col>
        <Col className={styles.colContainerRight}>
          <div className={styles.colWithButtons}>
            <img src={psnLogo} alt="RutaClara logo" width={120} className="mb-3" />
            <Row>
              <h1 className="text-primary mb-3">
                Travel Safely with RutaClara</h1>
            </Row>
            <br />
            <Row>
              <h3 className="text-primary mb-3">Join RutaClara social network today</h3>
            </Row>{" "}
            <br />
            <Row>
              <Link to="/signin" className={styles.linkTextFormat}><Button variant="primary" className={`${styles.btnHomePage} mb-3`}>Sign In <RiLoginBoxLine /></Button></Link>
            </Row>
            <Row>
            <Link to="/signup" className={styles.linkTextFormat}><Button variant="primary" className={styles.btnHomePage}>Sign Up <BsFillPersonPlusFill /></Button></Link>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
