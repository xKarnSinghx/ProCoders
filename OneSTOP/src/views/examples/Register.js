import React, { useState } from "react";
import "../../assets/css/Register.css";
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
                <h2>Sign Up With Credentials</h2>
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
                <h1>Set Contest Reminders</h1>
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

