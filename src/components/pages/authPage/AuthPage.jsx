import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import ForgotPass from './ForgotPass';
import '../../../style/authPage/authPage.css'

function AuthPage(props) {
    const [userAuthID, setUserAuthID] = useState()

    useEffect(() => {
        // check if there's a user in coockies
        const userAuthID = localStorage.getItem('user')

        const validateAuthID = async () => {
            // Same logic for user login
            if (userAuthID) props.history.replace('/user')
        }

        validateAuthID()
    }, [])

    return (
        <div className='auth-container'>
            <div className='authBackgroundImage'>
            </div>
            <div className='authForm'>
                <div className='center'>
                    <Switch>
                        <Route path='/auth/login' component={Login} />
                        <Route path='/auth/register' component={Register} />
                        <Route path='/auth/forgot' component={ForgotPass} />
                        <Redirect from='/auth' to='/auth/login' exact />
                        <Redirect to='/not-found' />
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;