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
    const { location } = this.props;
    const { pathname } = location;
    return (
      <div>
        <Navbar pathname={pathname} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/company" component={Company} />
          <Route exact path="/company/:id" component={CompanyProblems} />
          <Route exact path="/upcoming" component={Upcoming} />
          <Route component={FullScreenError} />
        </Switch>
      </div>
    );
  }
}

export default App;
