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
  FormHelperText,
} from '@material-ui/core';
import {useFormik} from "formik";
import axios from 'axios';
import validationSchema from '../../helper/validation';
import PhilippineMap from '../../maps/data.json'


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

const Index = () => {
  const classes = useStyles();
  const states = {
    present_address: {
      location: "",
      region: "",
      city: "",
      province: "",
      barangay: "",
      postal_code: "",
    },
  };

  const [province, setProvince] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState([]);
  const [municipality, setMunicipality] = useState([]);
  const [selectedMunicipality, setSelectedMunicipality] = useState([]);
  const [barangay, setBarangay] = useState([]);
  const [state, setState] = useState(states);


  const onChangeRegion = (e) => {
    const data = e.target.value;
    state.present_address.region = data;

    const [filterMap] = PhilippineMap?.filter((map) => {
      return map.region.region_name === data;
    });

    const province = filterMap.region.province_list;

    setProvince(Object.keys(province));
    setSelectedProvince(province);
  };

  const onChangeProvince = (e) => {
    const data = [e.target.value];
    state.present_address.province = data;

    const filterProvince = Object.keys(selectedProvince)
      .filter((key) => data.includes(key))
      .reduce((obj, key) => {
        obj["municipality"] = selectedProvince[key].municipality_list;
        return obj;
      }, {});
    setMunicipality(Object.keys(filterProvince.municipality));
    setSelectedMunicipality(filterProvince);
    // console.log(province);
  };

  const onChangeMunicipality = (e) => {
    const data = [e.target.value];
    state.present_address.municipality = data;

    const filterMunicipality = Object.keys(selectedMunicipality.municipality)
      .filter((key) => data.includes(key))
      .reduce((obj, key) => {
        obj = selectedMunicipality.municipality[key];
        return obj;
      }, {});

    setBarangay(filterMunicipality.barangay_list);
  };

  const formik = useFormik({
    initialValues: {
      rank: '',
      gender:'',
      username:'',
      password:'',
      confirmPassword:'',
      firstname:'',
      middlename:'',
      lastname:'',
      suffix:'',
      birthday:'',
      contactNumber:'',
      region:'',
      province:'',
      munincipality:'',
      barangay:'',
      empDate:'',
      philNumber:'',
      gsisNumber:'',
      nhmcNumber:'',
      tinNumber:'',
      taxstat:'',
      salaryGrade:'',
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
       
                </CardContent>
              </Card>
              <br/>
              <Card>
                <CardHeader
                  title="Employee Details"
                />
                <Divider/>
                <CardContent>
              
                </CardContent>
                <Divider/>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  p={1}
                >
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    // onClick={handlePost}  
                    fullWidth   
                  >
                    Save
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </form>
      </Container> 
    </Page>
  )
}

export default Index;