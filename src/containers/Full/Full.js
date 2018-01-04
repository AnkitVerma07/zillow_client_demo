import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';

import Dashboard from '../../views/Dashboard/';
import Amoeba from '../../views/Amoeba/';
import People from '../../views/People/';

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Container fluid>
              <Switch>
                <Route exact path="/dashboard" name="Dashboard" component={Dashboard}/>
                <Route exact path="/people" name="People" component={People}/>
                <Route exact path="/amoeba" name="Amoeba" component={Amoeba}/>
                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </main>
        </div>
      </div>
    );
  }
}

export default Full;
