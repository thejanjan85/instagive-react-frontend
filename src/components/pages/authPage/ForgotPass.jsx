import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import '../../../style/authPage/forgotPassword.css'
import axios from 'axios'
import {TextField, Button, Snackbar} from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';


function ForgotPass(props) {
    const [email, setEmail] = useState('')


    const handleSubmit = event => {
        event.preventDefault()


    const query = async () =>{


       const forgotPass =  await axios.post('http://localhost:5000/user/forgotPassword', {email})
        console.log(forgotPass.data.valid)

        if(forgotPass.data.valid === false) {
            setOpen({open: true, severity: 'error', msg: 'Email Not Found!'  })
        }
        else if(forgotPass.data.valid === true){ 
            setOpen({open: true, severity: 'success', msg: 'Temporary Password Sent Successfully'  })
            
        } 

        setEmail('');


    }

    query();
        
    }


    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }
      
      const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
          '& > * + *': {
            marginTop: theme.spacing(2),
          },
        },
      }));

      const classes = useStyles();
      const [open, setOpen] = React.useState({open: false, severity: '', msg: ''});
    
    
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return; 
        }
    
        setOpen({...open, open: false});
      };
    





    return (

        <div>

      <Snackbar open={open.open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={open.severity}>
         {open.msg}
        </Alert>
      </Snackbar>
      








        <div className='forgot-pass-container'>
            <div className='forgot-pass-title'>
                <h1 className='authTitle'>Forgot Password</h1>
                <p className='authDetails'>Will send your temporary password in your email, Please change it after you logged in</p>
            </div>
            <form className='form-container'>
            
              
              
                <TextField variant="outlined" label="Enter Your Email" fullWidth type="email" name="email" id="email" value={email} style={{marginBottom: "10px"}}  onChange={e => {setEmail(e.target.value); console.log(email)}} />
             
             
             
             
             
          
          
                <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>Send</Button>

          
            </form>
            
            
            
            
            <div style={{ width: '100%' }} className='form-button-container'>
                <div>
                   <Button variant="text"><Link to="/auth/login" className='form-link'>Login</Link></Button> 
                   <Button variant="text">  <Link to="/auth/register" className='form-link'>Signup</Link> </Button> 
                </div>
               
            </div>
        </div>

        </div>
    );
}

export default ForgotPass;