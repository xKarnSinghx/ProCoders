import React from "react";
import { Container, Row } from "reactstrap";
import App from "../../components/App";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, withRouter } from 'react-router-dom';
import reportWebVitals from '../../reportWebVitals';
import { store } from '../../store/store';


// reactstrap components

export default function Contest(){

  const Main = withRouter((props) => <App {...props} />)
  reportWebVitals();
  return(
  ReactDOM.render(
    <>
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>
    </>,
    document.getElementById('root'),
  )
  );
  
  
}
