import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import PostList from './PostList';
import LedgerPage from './ledgerPage/LedgerPage';
import PostCreate from './postDetailPage/PostCreate';
import UserPostDetails from './postDetailPage/UserPostDetails';
import ChangePass from './changePassPage/ChangePass';
import UpdateUserPost from './postUpdatePage/UpdateUserPost';
import { authRemove } from '../../../app/auth'
import { userDataFetch } from '../../../app/user'

function UserPage(props) {
    useEffect(() => {
        if (!localStorage.getItem('user')) return props.history.push('/auth')
        if (props.auth.token) {
            props.userDataFetch(props.auth.token)
        }

    }, [props.auth.token])

    return (
        <div>
            <div>
                <Switch>
                    <Route path='/user/change-password' component={ChangePass} />
                    <Route path='/user/post-create' component={PostCreate} />
                    <Route path='/user/post-details/:id' component={UserPostDetails} />
                    <Route path='/user/ledger' component={LedgerPage} />
                    <Route path='/user/update-details/:id' component={UpdateUserPost} />
                    <Route path='/user/' exact component={PostList} />
                    <Redirect to='/not-found' />
                </Switch>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, { authRemove, userDataFetch })(UserPage);