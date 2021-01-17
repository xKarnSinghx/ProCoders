import React, { useState } from "react";
// reactstrap components
import {useAuth} from "../../contexts/AuthContext";
import {
  CardHeader,
  CardBody,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  FormGroup,
  Col
} from "reactstrap";

import {Form, Button, Card, Alert} from 'react-bootstrap';
import { useRef } from "react";
import { useHistory } from "react-router-dom";


export default function Register(){
  const emailRef = useRef()
  const passRef = useRef()
  const confirmPassRef = useRef()
  const { signUp } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e){
    e.preventDefault()
    if(passRef.current.value !== confirmPassRef.current.value){
      return setError("Password Do not match");
    }
    try{
      setError("");
      setLoading(true)
      await signUp(emailRef.current.value, passRef.current.value)
      history.push('login');
    }catch{
      setError("Failed To create and account");
    }
    setLoading(false)
  }
    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              {error && <Alert variant="danger">{error}</Alert>}
              <div className="text-center text-muted mb-4">
                <h2>Sign Up With Email</h2>
              </div>

              <Form role="form" onSubmit={handleSubmit}>

                <Form.Group id="name">
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Name" type="text" required/>
                  </InputGroup>
                </Form.Group>

                <Form.Group id="email">
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Form.Control placeholder="Email" type="email" ref={emailRef} required/>
                  </InputGroup>
                </Form.Group>

                <Form.Group id="password">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Form.Control placeholder="Password" type="password" ref={passRef} required/>
                  </InputGroup>
                </Form.Group>
                <Form.Group id="confirm-pass">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Form.Control placeholder="Confirm Password" type="password" ref={confirmPassRef} required/>
                  </InputGroup>
                </Form.Group>
                
                <div className="text-center">
                  <Button disabled={loading} className="mt-4" color="primary" type="submit">
                    Create account
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  
}

