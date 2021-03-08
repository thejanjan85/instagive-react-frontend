import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import imgWave from '../../../img/wave.png'
import orgPhoto from '../../../img/org-image-content.png'
import unknownUserPhoto from '../../../img/unknown-user.png'
import checkPhoto from '../../../img/check.png'

function Content(props) {
    return (
        <div className='content-container'>
            <div className='content-items-container'>
                <div className='item-content'>
                    <img src={orgPhoto} alt="Image 1" className='content-image-1' />
                    <div className='content-item-text'>All organization are verified</div>
                </div>
                <div className='item-content'>
                    <img src={unknownUserPhoto} alt="Image 1" className='content-image-2' />
                    <div className='content-item-text'>Donate anonymously</div>
                </div>
                <div className='item-content'>
                    <img src={checkPhoto} alt="Image 1" className='content-image-3' />
                    <div className='content-item-text'>All donation are transparent</div>
                </div>
            </div>
            <img src={imgWave} alt="wave" className='content-wave' />
        </div>
    );
}

export default Content;