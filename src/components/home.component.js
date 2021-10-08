import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import flowers from "./data";
// import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Home extends Component {
    render() {
        return (
          <>
          <Container fluid>
            <Row>
              <h1>Hello World!jjjjjjj</h1>
            </Row>
            <Row>
              {flowers.map((flower) => (
                <Col sm>
                  <Image src={flower.picture} fluid rounded />
                  <h2>{flower.name}</h2>
                </Col>
              ))}
            </Row>
            </Container>
          </>

        );
    }
}
