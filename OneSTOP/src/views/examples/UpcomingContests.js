/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import Header from "components/Headers/Header.js";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";


// reactstrap components
import {
  Button,
  CardHeader,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  
} from "reactstrap";

class Contest extends React.Component{
  render(){
    return (
      <div className="header bg-gradient-info pb-4 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              <h1>Find All The Upcoming Contests Here</h1>
              <Row>
              </Row>
            </div>
          </Container>
        </div>
    );
  }
}

export default Contest;