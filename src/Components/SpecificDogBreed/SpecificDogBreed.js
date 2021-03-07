import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "../SpecificDogBreed/SpecificDogBreed.css";

function SpecificDogBreed({
  name,
  bredFor,
  breedGroup,
  lifeSpan,
  temperament,
  id,
  image,
}) {
  return (
    <Container className="specificDogBreed" fluid>
      <Row>
        <Col xs={12} sm={4} lg={8}>
          <Row>
            {" "}
            
            <h3>{name}</h3> 
          </Row>
          <Row><Image src={image} alt="dog image" /></Row>
        </Col>

        <Col sm={8} lg={4}>
          <Row>
            <Col xs={4}>
              <h6>Breed Group:</h6>
            </Col>
            <Col xs={8}>
              <p>{breedGroup} Dog</p>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <h6>Bred For:</h6>
            </Col>
            <Col xs={8}>
              <p>{bredFor}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <h6>Breed Temperament:</h6>
            </Col>
            <Col xs={8}>
              <p>{temperament}</p>
            </Col>
          </Row>

          <Row>
            <Col xs={4}>
              <h6>Life span:</h6>
            </Col>
            <Col xs={8}>
              <p>{lifeSpan}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default SpecificDogBreed;
