import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComment, editComment } from "../../actions/CommentsAction";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Container,
  TextField,
  Button,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  newComment: {
    marginTop: "120px",
  },
}));
const Edit = (props) => {
  // Add classes
  const classes = useStyles();
  // State for stoking data
  const [comment, setComment] = useState({
    id: "",
    name: "",
    email: "",
    body: "",
  });
  // Execute actions methods
  const dispatch = useDispatch();
  // Read from the gloabl state
  const theComment = useSelector((state) => state.comment.comment);
  // Return the segement dynamic
  const postID = props.match.params.postID;
  // In mounting the page
  useEffect(() => {
    dispatch(getComment(postID));
    setComment({
      id: theComment.id,
      name: theComment.name,
      email: theComment.email,
      body: theComment.body,
    });
  }, []);
  // Set the state
  const hendelChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };
  // Submt from
  const onsubmit = (e) => {
    e.preventDefault();
    dispatch(editComment(postID, comment));
    props.history.push(`/comment/${comment.id}`);
  };
  return (
    <Fragment>
      <Container className={classes.newComment}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h2" gutterBottom>
              <center>Make new comment</center>
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              id="standard-full-width"
              label="Name"
              style={{ margin: 8 }}
              placeholder="Your full name"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              value={comment.name}
              name="name"
              onChange={(e) => hendelChange(e)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="standard-full-width"
              label="Email"
              style={{ margin: 8 }}
              placeholder="Your adress email"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              value={comment.email}
              name="email"
              onChange={(e) => hendelChange(e)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="standard-full-width"
              label="Comments"
              style={{ margin: 8 }}
              placeholder="Your comments"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              value={comment.body}
              name="body"
              onChange={(e) => hendelChange(e)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <center>
              <Button
                onClick={(e) => onsubmit(e)}
                variant="contained"
                size="large"
              >
                Update
              </Button>
            </center>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Edit;
