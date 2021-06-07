import React, { Fragment } from "react";
import { Container, Box, Typography } from "@material-ui/core";

const Home = () => {
  return (
    <Fragment>
      <Container>
        <Box my={10}>
          <Typography variant="h1" component="h2" gutterBottom>
            <center>Home</center>
          </Typography>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Home;
