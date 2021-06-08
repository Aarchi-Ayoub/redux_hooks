import React, { Fragment, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { getComments, deletComment } from "../../actions/CommentsAction";

import { Link, withRouter } from "react-router-dom";

import {
  CardActions,
  CardContent,
  Grid,
  Typography,
  Card,
  Container,
  Button,
  IconButton,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles((theme) => ({
  comments: {
    marginTop: "120px",
  },
  link: {
    fontSize: 24,
    color: "#3f51b5",
    textDecoration: "none",
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    float: "right",
  },
}));

const List = (props) => {
  // Adding classs
  const classes = useStyles();
  // Execute action methods
  const dispatch = useDispatch();
  // Read from the gloabl state
  const comments = useSelector((state) => state.comment.comments);
  // In mounting the page
  useEffect(() => dispatch(getComments()), []);
  // Props
  const { history } = props;
  // Routing
  const addRoute = () => {
    history.push("/create");
  };
  // Delete
  const remove = (id) => {
    dispatch(deletComment(id));
  };
  // Make a card
  const commentsCard = () => {
    return (
      comments &&
      comments.map((comment) => (
        <Grid item xs={12} md={4} sm={6} key={comment.id}>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <Link className={classes.link} to={`/comment/${comment.id}`}>
                  {comment.name}
                </Link>
              </Typography>
              <Typography variant="body2" component="p">
                {comment.body}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => remove(comment.id)}
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
              <Link className={classes.link} to={`/edit/${comment.id}`}>
                <Button
                  variant="contained"
                  color="default"
                  startIcon={<EditIcon />}
                >
                  Edit
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))
    );
  };
  return (
    <Fragment>
      <Container className={classes.comments}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h2" gutterBottom>
              <center>List of comments</center>
            </Typography>
            <IconButton className={classes.button} aria-label="add">
              <AddCircleIcon fontSize="large" onClick={() => addRoute()} />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {commentsCard()}
        </Grid>
      </Container>
    </Fragment>
  );
};

export default withRouter(List);
