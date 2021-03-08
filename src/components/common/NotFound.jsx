import React from 'react';
import '../../style/common/notFound.css'

function NotFound(props) {
    return (
        <div className='not-found-container'>
            <h1 className='not-found-title'>Page Not Found</h1>
            <button className='not-found-button' onClick={() => props.history.goBack()}>Go Back</button>
        </div>
    );
}

export default NotFound;