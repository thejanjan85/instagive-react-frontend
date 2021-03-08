import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../../../style/detailsPage/detailsUpdatePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';







function DetailsUpdatePage(props) {
    const [updates, setPosts] = useState([])


    
    useEffect(() => {
        // Update the document title using the browser API
   
        const fetchUpdates = async () => {

            await axios.post(`http://localhost:5000/updates/getall/${props.match.params.id}`, {token: localStorage.getItem('user')}).then(data => setPosts(data.data))

        }
        
        fetchUpdates()
        console.log(updates)
      },[]);





    return (
        <div>
                
          
            {/* {props.children}
            <div className="update-container">
                {updates.map(update =>
                    <div key={update.id}>
                        <h3 className='update-title'>{update.title} - {update.date}</h3>
                        <p className='update-details'>{update.details}</p>
                        <img src={update.img} alt="carousel" />
                    </div>
                )}
            </div> */}
        </div>
    );
}

export default DetailsUpdatePage;