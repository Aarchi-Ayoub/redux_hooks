import React, { Fragment, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { getComments } from "../../actions/CommentsAction";

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
    color: "Black",
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
  const classes = useStyles();

  const dispatch = useDispatch();

  const comments = useSelector((state) => state.comment.comments);

  useEffect(() => dispatch(getComments()), []);

  const { history } = props;

  const addRoute = () => {
    history.push("/create");
  };
  const commentsCard = () => {
    return comments.map((comment) => (
      <Grid item xs={12} md={4} key={comment.id}>
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
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              color="default"
              startIcon={<EditIcon />}
            >
              Edit
            </Button>
          </CardActions>
        </Card>
      </Grid>
    ));
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
