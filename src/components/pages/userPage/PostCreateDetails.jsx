import React from 'react';

function PostCreateDetails(props) {
    return (
        <form>
            <img src="" alt="banner" />

            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" />

            <label htmlFor="details">Details:</label>
            <input type="text" name="details" id="details" />

            <label>Images:</label>
            <img src="" alt="image 1" />
            <img src="" alt="image 2" />
            <img src="" alt="image 3" />

            <button>Save</button>
        </form>
    );
}

export default PostCreateDetails;


