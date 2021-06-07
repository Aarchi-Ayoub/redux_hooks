import React, { Fragment, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { createComment } from "../../actions/CommentsAction";

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
const Create = (props) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [comment, setComment] = useState({
    id: uuidv4(),
    name: "",
    email: "",
    body: "",
  });

  const hendelChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };
  const clearState = () => {
    setComment({
      id: "",
      name: "",
      email: "",
      body: "",
    });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    dispatch(createComment(comment));
    props.history.push(`/comment/${comment.id}`);
    clearState();
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
          <Grid item xs={6}>
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
          <Grid item xs={6}>
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
                color="primary"
                size="large"
              >
                Create
              </Button>
            </center>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Create;
