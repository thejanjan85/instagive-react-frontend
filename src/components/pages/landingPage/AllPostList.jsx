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
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

function AllPostList(props) {
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

        <div className="shadow-container">
            <div className='postFilterContainer'>
                <FontAwesomeIcon icon={faFilter} size="xs" />
                <p className='postFilter'>Filter by:</p>
                <select name="" id="" ></select>
            </div>
            <div className='postCardContainer'>
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
                                <Typography gutterBottom variant='h5' component='h2'>
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
                                    props.history.push(`/details/${post._id}`)
                                }
                            >
                                Learn More
              </Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>
    );
}


const mapStateToProps = state => {
    return { post: state.postList }
}

export default connect(mapStateToProps)(AllPostList);