import React, { useState, useEffect } from 'react';
import Page from '../../components/Page';
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
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import {useFormik} from "formik";
import axios from 'axios';
import * as Yup from 'yup'

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
  },
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const validationSchema = Yup.object({
  rank: Yup
    .string('Enter a Rank')
    .min(2, 'Rank should be of minimum 2 characters length')
    .required('Enter a Rank'),
  // password: yup
  //   .string('Enter your password')
  //   .min(8, 'Password should be of minimum 8 characters length')
  //   .required('Password is required'),
});

const Index = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      rank: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, {resetForm}) => {
      // alert(JSON.stringify(values, null, 2));
      onSubmit(values)
      resetForm();
      
    },
  });

  const onSubmit = (data) => {
    // axios.post("http://localhost:3001/ranks", data).then((response)=>{
    //     console.log(response.data)
    //   })
    alert("success")
  }


  
  return (
    <Page
      className={classes.root}
      title="Signup "
    >      
      <Container maxWidth="lg">
        <form onSubmit={formik.handleSubmit}>
          <Typography variant="h3" gutterBottom>
            Create a new Account.
          </Typography>
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
                  title="Account Info"
                />
                <Divider/>
                <CardContent>
                  <Grid
                    container
                    spacing={1}
                  >                
                    <Grid
                      item
                      md={4}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        name="uname"
                        label="User Name"
                        variant="outlined"
                        value={formik.values.rank}
                        onChange={formik.handleChange}
                        error={formik.touched.rank && Boolean(formik.errors.rank)}
                        helperText={formik.touched.rank && formik.errors.rank}
                      />
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        name="pword"
                        label="Password"
                        variant="outlined"
                        value={formik.values.rank}
                        onChange={formik.handleChange}
                        error={formik.touched.rank && Boolean(formik.errors.rank)}
                        helperText={formik.touched.rank && formik.errors.rank}
                      />
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        name="pword2"
                        label="Confirm Password"
                        variant="outlined"
                        value={formik.values.rank}
                        onChange={formik.handleChange}
                        error={formik.touched.rank && Boolean(formik.errors.rank)}
                        helperText={formik.touched.rank && formik.errors.rank}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid 
              item
              lg={12}
              md={12}
              xs={12}
            >
              <Card>
                <CardHeader
                  title="Personal Info"
                />
                <Divider/>
                <CardContent>
                  <Grid
                    container
                    spacing={1}
                  >
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        name="fname"
                        label="First Name"
                        variant="outlined"
                        value={formik.values.rank}
                        onChange={formik.handleChange}
                        error={formik.touched.rank && Boolean(formik.errors.rank)}
                        helperText={formik.touched.rank && formik.errors.rank}
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        name="mname"
                        label="Middle Name"
                        variant="outlined"
                        value={formik.values.rank}
                        onChange={formik.handleChange}
                        error={formik.touched.rank && Boolean(formik.errors.rank)}
                        helperText={formik.touched.rank && formik.errors.rank}  
                      />  
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        name="lname"
                        label="Last Name"
                        variant="outlined"
                        value={formik.values.rank}
                        onChange={formik.handleChange}
                        error={formik.touched.rank && Boolean(formik.errors.rank)}
                        helperText={formik.touched.rank && formik.errors.rank}
                      /> 
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        name="suffix"
                        label="Suffix"
                        variant="outlined"
                        value={formik.values.rank}
                        onChange={formik.handleChange}
                        error={formik.touched.rank && Boolean(formik.errors.rank)}
                        helperText={formik.touched.rank && formik.errors.rank}
                      />
                    </Grid> 
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >  
                      <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                        <Select
                          id="outlined-basic"
                          name="gender"
                          label="Gender"
                          variant="outlined"
                          value={formik.values.rank}
                          onChange={formik.handleChange}
                          error={formik.touched.rank && Boolean(formik.errors.rank)}
                          helperText={formik.touched.rank && formik.errors.rank}  
                        >
                          <MenuItem>Male</MenuItem>
                          <MenuItem>Female</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <form className={classes.container} noValidate>
                        <TextField
                          id="date"
                          label="Birthday"
                          type="date"
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </form>
                    </Grid>
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        name="contactnum"
                        label="Contact Number"
                        variant="outlined"
                        value={formik.values.rank}
                        onChange={formik.handleChange}
                        error={formik.touched.rank && Boolean(formik.errors.rank)}
                        helperText={formik.touched.rank && formik.errors.rank}
                      />
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid 
              item
              lg={12}
              md={12}
              xs={12}
            >
              <Card>
                <CardHeader
                  title="Employee Details"
                />
                <Divider/>
                <CardContent>
                  <Grid
                    container
                    spacing={1}
                  >
                    <Grid
                      item
                      md={4}
                      xs={12}
                    >
                      <form className={classes.container} noValidate>
                        <TextField
                          id="date2"
                          label="Date of Employment"
                          type="date"
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </form>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        name="phNum"
                        label="Phil. Health no."
                        variant="outlined"
                        value={formik.values.rank}
                        onChange={formik.handleChange}
                        error={formik.touched.rank && Boolean(formik.errors.rank)}
                        helperText={formik.touched.rank && formik.errors.rank}
                      />
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        name="gsisNum"
                        label="GSIS Number"
                        variant="outlined"
                        value={formik.values.rank}
                        onChange={formik.handleChange}
                        error={formik.touched.rank && Boolean(formik.errors.rank)}
                        helperText={formik.touched.rank && formik.errors.rank}  
                      />  
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        name="nhmcAccNum"
                        label="NHMC Acc. No."
                        variant="outlined"
                        value={formik.values.rank}
                        onChange={formik.handleChange}
                        error={formik.touched.rank && Boolean(formik.errors.rank)}
                        helperText={formik.touched.rank && formik.errors.rank}
                      /> 
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        name="tin"
                        label="Tin Number"
                        variant="outlined"
                        value={formik.values.rank}
                        onChange={formik.handleChange}
                        error={formik.touched.rank && Boolean(formik.errors.rank)}
                        helperText={formik.touched.rank && formik.errors.rank}
                      />   
                    </Grid>
                    <Grid
                      item
                      md={4}
                      xs={12}
                    >
                      <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Witholding Tax Status</InputLabel>
                        <Select
                          fullWidth
                          id="outlined-basic"
                          name="wtaxStat"
                          label="Witholding Tax Stat."
                          variant="outlined"
                          value={formik.values.rank}
                          onChange={formik.handleChange}
                          error={formik.touched.rank && Boolean(formik.errors.rank)}
                          helperText={formik.touched.rank && formik.errors.rank}  
                        >
                          <MenuItem>Single</MenuItem>
                          <MenuItem>Married</MenuItem>
                          <MenuItem>Widowed</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        name="salGrade"
                        label="Salary Grade"
                        variant="outlined"
                        value={formik.values.rank}
                        onChange={formik.handleChange}
                        error={formik.touched.rank && Boolean(formik.errors.rank)}
                        helperText={formik.touched.rank && formik.errors.rank}
                      />
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Box
              display="flex"
              justifyContent="flex-end"
              p={2}
            >
              <Button
                color="primary"
                variant="contained"
                type="submit"
                // onClick={handlePost}     
              >
                Save
              </Button>
            </Box>
          </Grid>
        </form>
      </Container> 
    </Page>
  )
}

export default Index;