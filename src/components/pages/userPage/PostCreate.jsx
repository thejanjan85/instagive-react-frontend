import React from 'react';
import PostCreateDetails from './PostCreateDetails';
import PostCreateUpdate from './PostCreateUpdate';

function PostCreate(props) {
    return (
        <div>
            <PostCreateDetails />
            <PostCreateUpdate />
        </div>
    );
}

export default PostCreate;