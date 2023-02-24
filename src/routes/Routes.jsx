import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Search from '../pages/Search/Search';

function Routes() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/search" component={ Search } />
        <Route path="/" render={() => <Redirect to="/search" />} />
      </Switch>
      <Footer />
    </>
  );
}

export default Routes;