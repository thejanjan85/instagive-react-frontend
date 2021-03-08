import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import {Container, TextField,  Typography,  CssBaseline, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

function AdminLogin(props) {
    const [auth, setAuth] = useState({ username: '', password: '' })

    const handleSubmit = async event => {
        event.preventDefault()

        const valid = await axios.post('http://localhost:5000/admin/login', auth);
      
        if (valid.data.valid !== true) 
            window.alert(valid.data.valid);
    
        else{


            console.log(valid.data.token);
      localStorage.setItem('admin', valid.data.token)
      window.location.reload();

      window.alert('Login Success');

        }
  
  
  
  
  
  
    }

    const useStyles = makeStyles((theme) => ({
        paper: {
          marginTop: theme.spacing(8),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
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









        
        <Container component="main" maxWidth="sm" >




<CssBaseline/>




  <div className={classes.paper}>
   
  

            <div style={{padding: '5px 25px 50px 25px'}} className="shadow-container">
                <h1 style={{position:'relative', left:'30%'}} className='authTitle'>Admin Login</h1>
          
            
          
            <form action="#" className='form-container' >
                <TextField style={{marginBottom: '12px'}}variant="outlined" type="text" name="username" id="username" label='Enter Username: ' className='form-input-text' value={auth.username} onChange={e => setAuth({ ...auth, username: e.target.value })} />
                <TextField style={{marginBottom: '12px'}} variant="outlined" type="password" name="password" id="password" label='Enter Password' className='form-input-text' value={auth.password} onChange={e => setAuth({ ...auth, password: e.target.value })} />
              
              
              
              
              
                    <Button variant="contained" color="primary"  onClick={handleSubmit} fullWidth>Login</Button>
            </form>
            </div>
            </div>
            </Container>
            
    );
}

export default AdminLogin;