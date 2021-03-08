import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import '../../../style/landingPage/showContent.css';
import { Link } from 'react-router-dom';

function ShowContent(props) {

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  return (
    <div id='showcase'>
      <div className='container showcase-container'>
        <h1>Welcome to InstaGive</h1>
        <p>
          Online donation platform for the residence of Pampanga
        </p>
        <Button
        classes
          variant="contained"
          size="large"
          style={{ opacity: 0.9 }}
          color="primary" className={classes.margin}
          onClick={() => props.history.push('/post-list')}>
          Browse Donations
        </Button>
      </div>
    </div>
  );
}

export default ShowContent;
