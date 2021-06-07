import React, { Fragment, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { useDispatch, useSelector } from "react-redux";

import { getComment } from "../../actions/CommentsAction";

import {
  CardActions,
  CardContent,
  Grid,
  Typography,
  Card,
  Container,
  Button,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  comment: {
    marginTop: "120px",
  },
  title: {
    fontSize: 24,
    color: "Black",
  },
  pos: {
    marginBottom: 12,
  },
}));

const Comment = (props) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const comment = useSelector((state) => state.comment.comment);
  const postID = props.match.params.postID;
  useEffect(() => dispatch(getComment(postID)), []);

  return (
    <Fragment>
      <Container className={classes.comment}>
        <Grid container spacing={3}>
          <Grid item xs={12} justify="center">
            <Typography variant="h2" gutterBottom>
              <center>Comment :</center>
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {comment.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Published by: {comment.email}
                  <br />
                  PostID : {comment.postId}
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
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Comment;
