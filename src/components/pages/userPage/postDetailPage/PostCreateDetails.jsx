import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../../style/userPage/userPage.css';
import { cityLocation } from '../../../others/cityLocation';
import axios from 'axios';
import {
  Container,
  TextField,
  Typography,
  CssBaseline,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function PostCreateDetails(props) {
  const [postForm, setPostForm] = useState({
    Title: '',
    description: '',
    location: '',
    donationType: 'Cash',
    totalAmount: 0,
  });
  const [files, setFiles] = useState({
    imageList: '',
    profilePic: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData();

    formdata.append('profilePic', files.profilePic);

    for (const key in files.imageList) {
      formdata.append('imageList', files.imageList[key]);
    }
    formdata.append('Title', postForm.Title);
    formdata.append('description', postForm.description);
    formdata.append('location', postForm.location);
    formdata.append('donationType', postForm.donationType);
    formdata.append('totalAmount', postForm.totalAmount);
    formdata.append('token', localStorage.getItem('user'));
    console.log(...formdata);
   
   
    const data = await axios.post(
      'http://localhost:5000/post/createpost',
      formdata
    );


    window.location.replace('http://localhost:5001/user');
  };

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
    formControl: {
      minWidth: 120,
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <Container component='main' maxWidth='md'>
        <CssBaseline />
        <div className={classes.paper}>
         
         <div  style={{padding: '50px 25px 50px 25px'}} className="shadow-container">
         
         
          <Typography component='h1' variant='h5'>
            Creating New Post{' '}
          </Typography>

          <form encType='multipart/form-data' className={classes.form}>
            <Button variant='outlined' color='primary' component='label' >
              Upload Cover Photo
              <input
                hidden
                type='file'
                onChange={(e) => {
                  const file = e.target.files[0];
                  setFiles({ ...files, profilePic: file });
                }}
              ></input>
            </Button>

            <TextField

              color='primary'
              margin='normal'
              fullWidth
              variant='outlined'
              label='Enter Post Title'
              type='text'
              name='title'
              id='title'
              className='user-form-input'
              value={postForm.Title}
              onChange={(e) =>
                setPostForm({ ...postForm, Title: e.target.value })
              }
            />



            <FormControl fullWidth className={classes.formControl}>
              <InputLabel style={{ marginLeft: '12px' }} id='city'>
                Select Location
              </InputLabel>

              <Select
                variant='outlined'
                label='city'
                name='city'
                id='city'
                fullWidth
                value={postForm.location}
                onChange={(e) =>
                  setPostForm({ ...postForm, location: e.target.value })
                }
              >
                {cityLocation.map((city) => (
                  <MenuItem key={city} value={city}>{city}</MenuItem>
                ))}
              </Select>
            </FormControl>









            <FormControl
              component='fieldset'
              style={{ margin: '12px 0 0 12px' }}
            >
              <FormLabel component='legend'>Select Donation Type</FormLabel>
              <RadioGroup
                aria-label='gender'
                name='gender1'
                value={postForm.donationType}
                onChange={(e) =>
                  setPostForm({ ...postForm, donationType: e.target.value })
                }
              >
                <FormControlLabel
                  value='Cash'
                  control={<Radio />}
                  label='Cash'
                />
                <FormControlLabel
                  value='In-Kind'
                  control={<Radio />}
                  label='In-Kind'
                />
                <FormControlLabel
                  value='Both'
                  control={<Radio />}
                  label='Both'
                />
              </RadioGroup>
            </FormControl>





            <TextField
              color='primary'
              margin='normal'
              fullWidth
              variant='outlined'
              label='Enter Amount'
              type='number'
              name='totalAmount'
              id='totalAmount'
              className='user-form-input'
              value={postForm.totalAmount}
              onChange={(e) =>
                setPostForm({ ...postForm, totalAmount: e.target.value })
              }
            />








            <TextField
                      variant="outlined"
                      rows={10}
                      type='text'
                      multiline
                      id='description'
              fullWidth
           
           
           
              label="Enter your Post Description, You can include your own payment option and account, (etc, GCASH, BPI, PAYPAL) or  your address for In-Kind Donation"
              name='description'
              value={postForm.description}
              onChange={(e) =>
                setPostForm({ ...postForm, description: e.target.value })
              }
          


              
            />



















            <Button variant='outlined' color='primary' component='label' style={{marginTop:'12px'}}>
                Upload Reference Picture (Can Have Multiple Pictures)
            <input
            hidden
              type='file'
              id='postImages'
              name='postImages'
              onChange={(e) => {
                const multifiles = e.target.files;
                setFiles({ ...files, imageList: multifiles });
              }}
              multiple
              
            ></input>
                      </Button>

          
          
          
          
          
          
          
            <div style={{marginTop: '12px', display: 'flex'}}>
             <Button variant='outlined' color="default" style={{marginRight: '12px'}}> <Link to='/user'>Cancel</Link> </Button>
            
            
            
              <Button variant='contained' color='primary' onClick={handleSubmit}>Save</Button>
            </div>
          </form>
        </div>
        </div>
      </Container>
    </div>
  );
}

export default PostCreateDetails;
