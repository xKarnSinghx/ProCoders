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
      history.push("/admin/index")
    }catch{
      setError("Failed To Sign In to your account");
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
                <small>Sign in With Credentials</small>
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
      </>
    );
  
}

