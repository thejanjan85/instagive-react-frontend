import React from 'react';
import Content from './Content';
import Posts from './Posts';
import ShowContent from './ShowContent';

function LandingPage(props) {


    return (
        <div>
            <ShowContent {...props} />
            <Content />
            <Posts {...props} />
        </div>
    );
}

export default LandingPage;