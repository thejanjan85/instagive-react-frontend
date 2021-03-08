import React, {useState} from 'react';
import '../../../style/detailsPage/detailsPageContent.css'
import banner1 from '../../../img/Landscape-Color.jpg'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios'




function DetailsPageContent(props) {
  
  
  const [donateForm, setDonateForm] = useState({
    
    name: '',
    amount: '',
    message: '',
    email: '',
    
    
    
  })
  const [hasAmount , setHasAmount] = useState (false)
  
  
  const [openModal, setModal] = useState(false);
  
    const handleClickOpen = () => {
        setModal(true);
      };
    
      const handleClose = () => {
        setHasAmount(false)
        setModal(false);
      };
    
  
      const handleSubmit = async () => {

        if(donateForm.amount === '') return setHasAmount(true);

else await axios.post(`http://localhost:5000/donate/${props.match.params.id}`, donateForm)


      }



  
    if (!props.onSelectedPost) return <div>Loading</div>


    return (
        <div>
            <div>
                <img src={`/docs/${props.onSelectedPost.profilePic}`} alt="Photo" className='detailsPageImage' />
            </div>
            {props.children}
            <p className='donationContent'>
                {props.onSelectedPost ? props.onSelectedPost.description : ''}
            </p>
           
            <div>
                {props.onSelectedPost.imageList.map(imageName => 
                    
                    
                    <img src={`/docs/${imageName}`}  alt="Photo" className='detailsPageImage' />

                    
                    
                    )}
           
                    </div>
           
           
            <div className='donateNowContainer'>
                <button className='donate-button' onClick={handleClickOpen}>Donate Now</button>
            </div>
       
            <Dialog open={openModal} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth='sm' fullWidth='true'>
        <DialogTitle id="form-dialog-title"  style={{alignSelf: 'center', fontSize: '50px'}}>Donate</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Fill the Inputs Bellow: 
          </DialogContentText>
       
       
       
          <TextField
          variant="outlined"
            autoFocus
            margin="dense"
            id="name"
            label="Name (Leave Blank for Anonymous Donation)"
            type="text"
            fullWidth
            onChange={(e) =>
                setDonateForm({ ...donateForm, name: e.target.value })
              }
          />
       


    {hasAmount && <h4 style={{color: 'red', marginLeft:'2px'}}>Amount is required</h4>}
       <TextField
          variant="outlined"
            margin="dense"
            id="amount"
            label="Enter Amount: (Required) "
            required='true'
            type="number"
            fullWidth
            onChange={(e) =>
                setDonateForm({ ...donateForm, amount: e.target.value })
              }
          />
       



       <TextField
        
          variant="outlined"
            autoFocus
            margin="dense"
            id="email"
            label="Email (Optional, For Sending the Certificate)"
            type="email"
            fullWidth
            onChange={(e) =>
                setDonateForm({ ...donateForm, email: e.target.value })
              }
          />
       
       <TextField
          variant="outlined"
            autoFocus
            margin="dense"
            id="outlined-multiline-static"
            label="Message"
            rows={4}
            type="text"
            multiline
            fullWidth
            onChange={(e) =>
                setDonateForm({ ...donateForm, message: e.target.value })
              }
          />
       
       
       


       
       
       
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Donate
          </Button>
        </DialogActions>
      </Dialog>
   
       
        </div>
    );
}

export default DetailsPageContent;