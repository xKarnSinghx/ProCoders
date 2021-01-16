
import React from "react";

import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-5 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>

                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Upcoming Contests
                          </CardTitle>
                          {/* <span className="h2 font-weight-bold mb-0">
                            Contest 
                          </span> */}
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-trophy" />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>

                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Open Opportunities
                          </CardTitle>
                          {/* <span className="h2 font-weight-bold mb-0">
                            2,356
                          </span> */}
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                            <i className="fas fa-chart-pie" />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>

                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0">
                            Placement Records
                          </CardTitle>
                          {/* <span className="h2 font-weight-bold mb-0">924</span> */}
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                            <i className="fas fa-users" />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
