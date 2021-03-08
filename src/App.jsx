import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import { postListFeched } from './app/postList'
import { accountFetched } from './app/accounts'
import { authAdd } from './app/auth'
import Nav from './components/common/Nav';
import LandingPage from './components/pages/landingPage/LandingPage';
import DetailsPage from './components/pages/detailsPage/DetailsPage';
import AuthPage from './components/pages/authPage/AuthPage';
import UserPage from './components/pages/userPage/UserPage';
import AdminPage from './components/pages/adminPage/AdminPage';
import NotFound from './components/common/NotFound';
import './App.css';
import AllPostList from './components/pages/landingPage/AllPostList';


function App(props) {

  useEffect(() => {
    const getAllData = async () => {
      props.accountFetched()
      props.postListFeched()
    };

    const validateAuthID = async () => {
      // Validating if token is valid
      // await axios.post('/checkusertoken', token)

      props.authAdd(token, type)
    }

    // check if there's a user in local storage
    const token = localStorage.getItem('user') || localStorage.getItem('admin')
    const type = localStorage.key(token)

    validateAuthID()
    getAllData();
  }, []);


  return (
    <div className='App'>
      <Nav />
      <Switch>
        <Route path='/post-list' component={AllPostList} />
        <Route path='/details/:id' component={DetailsPage} />
        <Route path='/auth' component={AuthPage} />
        <Route path='/user' component={UserPage} />
        <Route path='/not-found' component={NotFound} />
        <Route path='/admin' component={AdminPage} />
        <Route path='/' exact component={LandingPage} />
        <Redirect to='/not-found' />
      </Switch>
    </div>
  );
}


const mapStateToProps = state => {
  return { state }
}

export default connect(mapStateToProps,
  { authAdd, postListFeched, accountFetched })(App);
