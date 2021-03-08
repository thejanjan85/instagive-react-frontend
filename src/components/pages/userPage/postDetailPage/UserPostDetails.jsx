import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { cityLocation } from '../../../others/cityLocation'
import axios from 'axios'
import {TextField, Button, Icon, FormControl, InputLabel, Select, Radio, RadioGroup, FormLabel, FormControlLabel, MenuItem, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, 
} from '@material-ui/core/'
import { withStyles, makeStyles } from '@material-ui/core/styles';

import MuiAlert from '@material-ui/lab/Alert';



function UserPostDetails(props) {
    const post = props.post
    const [postForm, setPostForm] = useState({
        Title: '',
        description: '',
        location: '',
        donationType: ''
    })

    

    useEffect(() => {
        if (post) setPostForm({
            Title: post.Title,
            description: post.description,
            location: post.location,
            donationType: post.donationType,
        })
    }, [post])

    const handleSubmit = (e) => {
       
        e.preventDefault();


        console.log(post)

        const saveUpdate = async () => {




           await axios.put(`http://localhost:5000/post/edit/${post._id}`, {...postForm, token: localStorage.getItem('user')})
            handleClose()
            handleClickAlert()
                

        }

        saveUpdate();

   
    }








    
  const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
      },
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


  const [openModal, setModal] = useState(false);
  
  const handleClickOpen = async () => {
      setModal(true);
    };
  
    const handleClose = () => {
      setModal(false);
    };
  
  const [snacker, setSnacker] = useState(false);
    



  const handleClickAlert = () => {
    setSnacker(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return; 
    }

    setSnacker(false);
  };










    if (!props.post) {
        return (
            <div>Loading...</div>
        )
    }

    const Alert =(props)  => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }







    return (













        <div>


        
<div className={classes.root}>
      
        <Snackbar open={snacker} autoHideDuration={2000} onClose={handleCloseAlert}>
          <Alert onClose={handleCloseAlert} severity="success">
                       Successfully Saved!
          </Alert>


        </Snackbar>
        



        </div>









            <Button onClick={handleClickOpen} style={{margin: '12px'}} variant="contained" color="primary">Edit Post</Button>
           
           
           


           
<Dialog open={openModal} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth='sm' fullWidth={true}>
        <DialogTitle id="form-dialog-title"  style={{alignSelf: 'center', fontSize: '50px'}}>Edit Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Fill the Inputs Bellow: 
          </DialogContentText>


                        <TextField
                            style={{marginBottom: '12px'}} variant="outlined" fullWidth={true}
                            label="Title"
                            type="text"
                            name="title"
                            id="title"
                            value={postForm.Title}
                            onChange={e => setPostForm({ ...postForm, Title: e.target.value })}
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
                            rows={15}
                            multiline
                               style={{marginBottom: '12px'}} label="Description" variant="outlined" fullWidth={true}
                               type="text"
                            name='postDetails'
                            value={post.description}
                            onChange={e => setPostForm({ ...postForm, description: e.target.value })}
                            id='postDetails'
                            className=''
                        />

                   










          </DialogContent>
        <DialogActions>
          <Button  onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit} color="primary">
            SAVE
          </Button>
        </DialogActions>
    
      </Dialog>





           
           
           
           
           
            <h1>Post Details</h1>
            <form className='post-container' onSubmit={handleSubmit}>
                <div className="post-create-container">
                    <label className='form-label' htmlFor='post-profile-pic'>
                        Cover Photo
                    </label>
                    <img src={`/docs/${post.profilePic}`} alt="Profile Photo Here" />

                    <label htmlFor="title">Title:</label>
                    
                    
                        <p>{post.Title}</p> :
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={postForm.Title}
                            onChange={e => setPostForm({ ...postForm, Title: e.target.value })}
                        />
                    

                   
                   
                   
                    <div>
                        <div>
                            <label htmlFor="title">Location:</label>
                                <p>{post.location}</p> :
                                <select
                                    name="city"
                                    id="city"
                                    value={postForm.location}
                                    onChange={e =>
                                        setPostForm({ ...postForm, location: e.target.value })}
                                >
                                    {cityLocation.map(city =>
                                        <option value={city} key={city}>
                                            {city}
                                        </option>
                                    )}
                                </select>
                            


                        </div>
                        <div>
                            <label htmlFor="">Donation Type:</label>
                           
                                <p>{post.donationType}</p> :
                                <div>
                                    <input type="radio"
                                        id="post-radio-cash"
                                        name="donation-type"
                                        value="cash"
                                        defaultChecked={postForm.donationType === "cash" ?
                                            true : false}
                                        onClick={e => setPostForm({ ...postForm, donationType: e.target.value })}
                                    />


                                    <label htmlFor="post-radio-cash">Cash</label>
                                    <input type="radio"
                                        id="post-radio-in-kind"
                                        name="donation-type"
                                        value="in-kind"
                                        defaultChecked={postForm.donationType === 'in-kind'
                                            ? true : false}
                                        onClick={e => setPostForm({ ...postForm, donationType: e.target.value })}
                                    />
                                    <label htmlFor="post-radio-in-kind">In-kind</label>
                                    <input type="radio"
                                        id="post-radio-both"
                                        name="donation-type"
                                        value="both"
                                        defaultChecked={postForm.donationType === "both"
                                            ? true : false}
                                        onClick={e => setPostForm({ ...postForm, donationType: e.target.value })}
                                    />
                                    <label htmlFor="post-radio-both">Both</label>
                                </div>
                            
                        </div>
                    </div>
                    <label htmlFor="details">Details:</label>
                   
                   
                   
                   
                   
                   
                   












                   
                 
                        <p>{post.description}</p> :
                        <textarea
                            name='postDetails'
                            value={post.description}
                            onChange={e => setPostForm({ ...postForm, description: e.target.value })}
                            id='postDetails'
                            className=''
                        ></textarea>
                    
                    <label className='form-label' htmlFor='postImages'>
                        Images:
                    </label>

                    <img src="" alt="Image 1" />
                    <img src="" alt="Image 2" />
                    <img src="" alt="Image 3" />

             
                        <div>
                            <button>Save</button>
                        </div> : ''
                    
                </div>
            </form>
            
                <div>
                    <button onClick={() => props.history.push('/user')}>View Post List</button>
                </div>
            }

        </div>
    );
}


const mapStateToProps = (state, myProps) => {
    return { post: state.user.post.find(post => post._id === myProps.match.params.id) }
}

export default connect(mapStateToProps)(UserPostDetails);