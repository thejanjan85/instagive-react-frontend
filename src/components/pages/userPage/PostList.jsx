import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import Icon from '@material-ui/core/Icon';


function PostList(props) {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    pos: {
      marginBottom: 12,
    },
  });
  const classes = useStyles();

  if (!props.post)
    return (
      <div className='postCardContainer'>
        <CircularProgress color='inherit' />
      </div>
    );

  return (
    <div>
      <Button
          style={{margin: '12px'}}

onClick={() => props.history.push('/user/post-create')}
        variant='contained'
        color='primary'
        endIcon={<Icon fontSize="small">add_circle</Icon>
    }
      >Create Post</Button>

      <div className='postCardContainer shadow-container'>

        {props.post.map((post) => (
          <Card className={classes.root} style={{ margin: '20px' }}>
            <CardActionArea>
              <CardMedia
                component='img'
                alt={post.profilePic}
                height='140'
                image={`/docs/${post.profilePic}`}
                title={post.profilePic}
              />
              <CardContent>
                <Typography color="primary" gutterBottom variant='h5' component='h2'>
                  {post.Title.substring(0, 20)}
                  {post.Title.length > 20 ? '...' : ''}
                </Typography>
                <Typography className={classes.pos} color='textSecondary'>
                  {post.location} |{' '}
                  {post.donationType === 'both'
                    ? 'Cash, In-kind'
                    : post.donationType === 'cash'
                    ? 'Cash'
                    : 'In-kind'}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {post.description.substring(0, 255)}
                  {post.description.length > 250 ? '...' : ''}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size='small'
                color='primary'
                onClick={() =>
                  props.history.push(`/user/post-details/${post._id}`)
                }
              >
               View Post
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { post: state.user.post };
};

export default connect(mapStateToProps)(PostList);
