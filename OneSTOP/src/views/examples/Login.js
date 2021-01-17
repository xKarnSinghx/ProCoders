import React from "react";
import {useAuth} from "../../contexts/AuthContext";
import {Link, useHistory} from "react-router-dom";
// reactstrap components
import {
  CardBody,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

import {Form, Button, Card, Alert} from 'react-bootstrap';
import { useRef, useState } from "react";

export default function Login(){

  const emailRef = useRef()
  const passRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory();

  async function handleSubmit(e){
    e.preventDefault()
    
    try{
      setError("");
      setLoading(true)
      await login(emailRef.current.value, passRef.current.value)
      history.push("/admin/home")
    }catch{
      setError("Either email or password is wrong");
    }
    setLoading(false)
  }

    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            
            <CardBody className="px-lg-5 py-lg-5">
              {error && <Alert variant="danger">{error}</Alert>}
              <div className="text-center text-muted mb-4">
                <h2>Sign in With Credentials</h2>
              </div>
              <Form role="form" onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Form.Control placeholder="Email" type="email" ref={emailRef} required/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Form.Control placeholder="Password" type="password" ref={passRef} required/>
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button disabled={loading} className="my-4" color="primary" type="submit">
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <span className="text-light">
                <small>Create new account <Link to="register">SignUp here</Link></small>
              </span>
            </Col>
          </Row>
        </Col>
        <div className="content-main">
            <br/><br/>
            <h1>OneSTOP</h1>
            <h2>A One Stop Solution For All Engineering Students</h2>
            <br/>
            <h2>About Us</h2>
            <p>
              We at OneSTOP are committed to provide all those relevant information and details which every engineering student seeks for. It is one stop where you can get information of current contests or competition and even placement records of any Institute in India.<br/>You can register yourself to add remainders to get notification for important events.
              Its the simplest but most practical solution to help them and keep them updated.
            </p>
        </div>

        <div className="facilities-new">
            <div className="Heading"><h1>What We provide</h1></div>
            <div className="facilities-new-card-container">

              <div className="cards">
                <div className='Logo'>
                <i class="fas fa-list fa-2x" aria-hidden="true"/>
                </div>
                <h1>Gather Placement Details</h1>
              </div>

              <div className="cards">
                <div className='Logo'>
                <i class="fas fa-clock fa-2x" aria-hidden="true"/>
                </div>
                <h1>Set Contest Remainders</h1>
              </div>

              <div className="cards">
                <div className='Logo'>
                  <i class="fas fa-lightbulb fa-2x" aria-hidden="true"/>
                </div>
                <h1>Search For Your Perfect Job</h1>
              </div>

              <div className="cards">
                <div className='Logo'>
                  <i className="fas fa-trophy fa-2x"/>
                </div>
                <h1>Get Updated About Upcoming Contests</h1>
                
              </div>
            </div>
        </div>
      </>
    );
  
}

