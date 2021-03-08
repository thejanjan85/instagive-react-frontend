import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Container, TextField,  Typography,  CssBaseline, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


function ChangePass(props) {
  const [buttonStatus, setButtonStatus] = useState(true);
  const [confirmPass, setConfirmPass] = useState('');
  const [password, setPassword] = useState({
    oldPass: '',
    newPass: '',
  });

  const [errorMessage, setErrorMessage] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const changePassword = await axios.post(
      'http://localhost:5000/user/changepassword',
      { ...password, token: localStorage.getItem('user') }
    );
    console.log(changePassword.data.valid);

    if (changePassword.data.valid === false) {
      setErrorMessage(true);
      setShowMessage(false);
    } else if (changePassword.data.valid === true) {
      setShowMessage(true);
      setErrorMessage(false);
    }

    setPassword({
      oldPass: '',
      newPass: '',
    });

    setConfirmPass('');
  };

  useEffect(() => {
    if (password.oldPass <= 0) return setButtonStatus(true);
    else if (password.newPass.trim().length <= 0) return setButtonStatus(true);
    else if (password.newPass.trim() === confirmPass)
      return setButtonStatus(false);
    return setButtonStatus(true);
  }, [password, confirmPass]);



  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));



  const classes = useStyles();





  return (
    <div>
  

  <Container component="main" maxWidth="sm" >
  
  <CssBaseline/>
  <div className={classes.paper}>
   
  <div  style={{padding: '50px 25px 50px 25px'}} className="shadow-container">



  <Typography component="h1" variant="h5">
          Change Password
        </Typography>     
        
         <form className={classes.form} >
      
        <TextField
                autoFocus

            margin="normal"
            fullWidth
         variant="outlined"
         label="Enter Old  Password"

         type='password'
          name='oldPass'
          id='oldPass'
          value={password.oldPass}
          onChange={(e) =>
            setPassword({ ...password, oldPass: e.target.value })
          }
        />


{errorMessage && <p style={{color: 'red'}}>Old Password is Incorrect</p>}
        <TextField
        margin="normal"
        fullWidth
                 variant="outlined"
          label="Enter New Password"
          type='password'
          name='newPass'
          id='newPass'
          value={password.newPass}
          onChange={(e) =>
            setPassword({ ...password, newPass: e.target.value })
          }
        />

        <TextField
        fullWidth
                    margin="normal"

                 variant="outlined"
                 label="Confirm New Password"

          type='password'
          name='confirmPass'
          id='confirmPass'
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />
      


        <Button onClick={handleSubmit} className={classes.submit} disabled={buttonStatus} fullWidth variant="contained" color="primary">Change Password</Button>
        



      </form>


        {showMessage && <p style ={{color: 'green'}}>Password Successfuly Changed</p>}




        </div>
        


          </div>

      </Container>
    </div>
  );
}

export default ChangePass;
