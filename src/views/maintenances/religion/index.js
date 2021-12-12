import React, { useState, useEffect } from 'react';
import Page from '../../../components/Page';
import {
  Container,
  Grid,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  makeStyles,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560
  }
}));

const Index = () => {
  const classes = useStyles();
  
  return (
    <Page
      className={classes.root}
      title="Registration "
    >      
      <Container maxWidth="lg">
      <Grid
        container
        spacing={1}
      >
        <Grid
          item
          lg={12}
          md={12}
          xs={12}
        >
          <Card>
            <CardHeader
              subheader="Input your Religion"
              title="Religion"
            />
            <Divider />
            <CardContent>
              <Grid
                container
                spacing={1}
              >
                <form noValidate autoComplete="off">
                  <TextField id="outlined-basic" label="Religion" variant="outlined" />
                </form>
              </Grid>
            </CardContent>
            <Divider />
            <Box
              display="flex"
              justifyContent="flex-end"
              p={2}
            >
              <Button
                color="primary"
                variant="contained"
                // onClick={handlePost}
              >
                Save
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
      
    </Container>
 
    </Page>
  )
}

export default Index;