import React from "react";
import { capstone } from "../portfolio";
import { Container, Row } from "reactstrap";
import { Button, Col } from "reactstrap";
import CapstoneCard from "../components/CapstoneCard";
import Fade from "react-reveal/Fade";

const Capstone = () => {
  return (
    capstone && (
      <Fade bottom duration={2000}>
        <section id = "capstone-section" className="section section-lg">
          <Container>
            <div className="d-flex p-4">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="ni ni-briefcase-24 text-info" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-info">Capstone Project</h4>
              </div>
            </div>
            <Row className="row-grid align-items-start">
              {capstone.map((data, i) => {
                return <CapstoneCard key={i} {...data} />;
              })}
            </Row>
          </Container>
        </section>
      </Fade>
    )
  );
};

export default Capstone;
