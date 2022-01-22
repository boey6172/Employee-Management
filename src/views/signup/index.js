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
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1)

  },
  container:{
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
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
  username: Yup
    .string('Enter your Username')
    .min(8, 'username should be of minimum 8 characters length')
    .required('Username is required'),
  password: Yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required('Password is required'),
  confirmPassowrd:Yup
    .string('Enter your password')
    .oneOf([Yup.ref('password'),null], 'Password Must match'),
  gender: Yup
    .string('Select a Gender')
    // .min(2, 'Rank should be of minimum 2 characters length')
    .required('Select a Gender'),
});

const Index = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      rank: '',
      gender:'',
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
      <Container  
        maxWidth="lg"
        textAlign="center"
      >
        
        <form onSubmit={formik.handleSubmit}>
          <Typography variant="h3" gutterBottom>
            Create a new Account.
          </Typography>
          <Grid
            container
            spacing={2}
            align="center"
          >
            <Grid
              item
              lg={2}
              md={2}
              xs={2}
            > 

            </Grid>
            <Grid
              item
              lg={8}
              md={8}
              xs={8}
              
            >
              <Card >
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
                        name="username"
                        label="Username"
                        variant="outlined"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}
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
                        name="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
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
                        name="confirmPassowrd"
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        value={formik.values.confirmPassowrd}
                        onChange={formik.handleChange}
                        error={formik.touched.confirmPassowrd && Boolean(formik.errors.confirmPassowrd)}
                        helperText={formik.touched.confirmPassowrd && formik.errors.confirmPassowrd}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

            <br/>
              <Card >
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
                      <FormControl  variant="outlined" className={classes.formControl} fullWidth>
                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                        <Select
                          id="outlined-basic"
                          name="gender"
                          label="Gender"
                          labelId="demo-simple-select-label"
                          value={formik.values.gender}
                          onChange={formik.handleChange}
                          error={formik.touched.gender && Boolean(formik.errors.gender)}
                          helperText={formik.touched.gender && formik.errors.gender}  
                        >
                        <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={"Male"}>Male</MenuItem>
                          <MenuItem value={"Female"}>Twenty</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      
                        <TextField
                          fullWidth
                          id="date"
                          label="Birthday"
                          type="date"
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          value={formik.values.rank}
                          onChange={formik.handleChange}
                          error={formik.touched.rank && Boolean(formik.errors.rank)}
                          helperText={formik.touched.rank && formik.errors.rank}
                        />
                      
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
              <br/>
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
                        <TextField
                          fullWidth
                          id="date2"
                          label="Date of Employment"
                          type="date"
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
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
                      <FormControl variant="outlined" className={classes.formControl} fullWidth>
                        <InputLabel id="demo-simple-select-label">Witholding Tax Status</InputLabel>
                        <Select
                          id="outlined-basic"
                          name="rank"
                          label="Witholding Tax Status"
                          labelId="demo-simple-select-label"
                          // variant="outlined"
                          value={formik.values.rank}
                          onChange={formik.handleChange}
                          error={formik.touched.rank && Boolean(formik.errors.rank)}
                          helperText={formik.touched.rank && formik.errors.rank}  
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={"Single"}>Single</MenuItem>
                          <MenuItem value={"Married"}>Married</MenuItem>
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