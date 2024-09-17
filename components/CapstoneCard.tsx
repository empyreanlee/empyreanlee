import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Col, Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import { CapstoneType } from "../types/sections";

const CapstoneCard = ({ companyLogo, company, role, date, desc, descBullets, biolink }: CapstoneType) => {
  return (
    <Col lg="6">
      <Card style={{ flex: 1 }} className="shadow-lg--hover my-4 shadow border-0 text-center rounded h-100">
        <CardBody className="">
          <img
            src={companyLogo}
            style={{
              objectFit: "cover",
              left: 0,
              right: 0,
              top: "7rem",
              marginLeft: "auto",
              marginRight: "auto",
              width: "8rem",
              height: "8rem",
              borderRadius: "50%",
            }}
            className="shadow mb-3"
            alt={companyLogo}
          />
          <CardTitle tag="h4" className="mb-2">
            {company}
          </CardTitle>
          <CardSubtitle tag="h5" className="mb-2">
            {role}
          </CardSubtitle>
          <CardSubtitle>{date}</CardSubtitle>
          <CardText tag="div" className="description my-3 text-left">
            {desc}
            <ul>
              {descBullets
                ? descBullets.map(desc => {
                    return <li key={desc}>{desc}</li>;
                  })
                : null}
            </ul>

            {/* Render buttons for biolink */}
            {biolink && (
              <div className="button-group mt-3">
                {biolink.map((link, index) => (
                  <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                    <Button color="primary" className="mr-2">
                      {link.label}
                    </Button>
                  </a>
                ))}
              </div>
            )}
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CapstoneCard;
