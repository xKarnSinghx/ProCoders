import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Axios from 'axios';
import ReactGA from 'react-ga';
import { FullScreenError } from './Common/Common';
import Navbar from './Navbar/Navbar';
import Upcoming from './Upcoming/Upcoming';
import Company from './Company/Company';
import CompanyProblems from './Company/CompanyProblems';
import Home from './Home/Home';
import "../assets/css/Contests.css";
import "../assets/css/contests2.css";

// import { buildGlobalSolutionData } from '../api/data/solutionsCreator';;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    ReactGA.initialize('G-JT0E9JWDHS');
    Axios.get('https://api.countapi.xyz/hit/contestmania.web.app/visits');
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route  exact path="/admin/upcoming-contests/" component={Home} />
          <Route  exact path="/admin/upcoming-contests/company" component={Company} />
          <Route  exact path="/admin/upcoming-contests/company/:id" component={CompanyProblems} />
          <Route  exact path="/admin/upcoming-contests/upcoming" component={Upcoming} />
          <Route component={FullScreenError} />
        </Switch>
      </div>
    );
  }
}

export default App;
