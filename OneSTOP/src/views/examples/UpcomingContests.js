import React from "react";
import Header from "components/Headers/Header.js";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import App from "../../components/App";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, withRouter } from 'react-router-dom';
import reportWebVitals from '../../reportWebVitals';
import { store } from '../../store/store';


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

export default function Contest(){
  const Main = withRouter((props) => <App {...props} />)
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
  reportWebVitals();
  return (
    <>
      <div className="header bg-gradient-info pb-4 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              <h1>Find All The Upcoming Contests Here</h1>
              <Row>
              </Row>
            </div>
          </Container>
      </div>
    </>
  );
}
