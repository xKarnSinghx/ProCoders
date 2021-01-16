
import React from "react";
import {Container, Row} from "reactstrap";
import PlacementsInfo from '../../components/Placement/Placement';
import React from "react";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
class Placement extends React.Component {
  render(){
    return (
      <>
        <div className="header bg-gradient-info pb-4 pt-5 pt-md-8">
            <Container fluid>
              <div className="header-body">
                <h1>Find All The Placement Details Here</h1>
                <Row>
                </Row>
              </div>
            </Container>
          </div>
          <PlacementsInfo/>
      </>




export default Placement;
