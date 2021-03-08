import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import PostCreateUpdate from './PostCreateUpdate';
import PostDetailUpdate from './PostDetailUpdate';

function UpdateUserPost(props) {
    return (
        <div>
            <Switch>
                <Route path='/user/update-details/:id/create' component={PostCreateUpdate} />
                <Route path='/user/update-details/:id' component={PostDetailUpdate} />
            </Switch>
        </div>
    );
}

export default UpdateUserPost;