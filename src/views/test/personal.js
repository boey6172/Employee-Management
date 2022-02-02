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

const Index = (formik) => {
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

  return (
    <Page
      className={classes.root}
      title="Signup "
    >      
      <Container  
        maxWidth="lg"
        textAlign="center"
      >
        
        <form 
            // onSubmit={formik.handleSubmit}
        >
          <Typography variant="h3" gutterBottom>
            {/* Create a new Account. */}
          </Typography>
          <Grid
            container
            spacing={2}
            align="center"
          >
            <Grid
              item
              lg={1}
              md={1}
              xs={1}
            > 

            </Grid>
            <Grid
              item
              lg={10}
              md={10}
              xs={10}
              
            >
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
                      md={4}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        name="firstname"
                        label="First Name"
                        // variant="outlined"
                        value={formik.formik.values.firstname}
                        onChange={formik.formik.handleChange}
                        error={formik.formik.touched.firstname && Boolean(formik.formik.errors.firstname)}
                        helperText={formik.formik.touched.firstname && formik.formik.errors.firstname}
                      />
                    </Grid>
                    <Grid
                      item
                      md={2}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        name="middlename"
                        label="Middle Name"
                        // variant="outlined"
                        value={formik.formik.values.middlename}
                        onChange={formik.formik.handleChange}
                        error={formik.formik.touched.middlename && Boolean(formik.formik.errors.middlename)}
                        helperText={formik.formik.touched.middlename && formik.formik.errors.middlename}  
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
                        name="lastname"
                        label="Last Name"
                        // variant="outlined"
                        value={formik.formik.values.lastname}
                        onChange={formik.formik.handleChange}
                        error={formik.formik.touched.lastname && Boolean(formik.formik.errors.lastname)}
                        helperText={formik.formik.touched.lastname && formik.formik.errors.lastname}
                      /> 
                    </Grid>
                    <Grid
                      item
                      md={2}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        name="suffix"
                        label="Suffix"
                        // variant="outlined"
                        value={formik.formik.values.suffix}
                        onChange={formik.formik.handleChange}
                        error={formik.formik.touched.suffix && Boolean(formik.formik.errors.suffix)}
                        helperText={formik.formik.touched.suffix && formik.formik.errors.suffix}
                      />
                    </Grid> 
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >  
                      <FormControl  
                        // variant="outlined" 
                        className={classes.formControl} 
                        fullWidth
                      >
                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                        <Select
                          id="outlined-basic"
                          name="gender"
                          label="Gender"
                          labelId="demo-simple-select-label"
                          value={formik.formik.values.gender}
                          onChange={formik.formik.handleChange}
                          error={formik.formik.touched.gender && Boolean(formik.formik.errors.gender)}
                          // helperText={formik.formik.touched.gender && formik.formik.errors.gender}  
                        >
                        <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={"Male"}>Male</MenuItem>
                          <MenuItem value={"Female"}>Female</MenuItem>
                        </Select>
                        <FormHelperText
                          error={formik.formik.touched.gender && Boolean(formik.formik.errors.gender)}
                        >
                          {formik.formik.touched.gender && formik.formik.errors.gender}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        id="birthday"
                        label="Birthday"
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={formik.formik.values.birthday}
                        onChange={formik.formik.handleChange}
                        error={formik.formik.touched.birthday && Boolean(formik.formik.errors.birthday)}
                        helperText={formik.formik.touched.birthday && formik.formik.errors.birthday}
                      />
                    </Grid>
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        name="contactNumber"
                        label="Contact Number"
                        // variant="outlined"
                        value={formik.formik.values.contactNumber}
                        onChange={formik.formik.handleChange}
                        error={formik.formik.touched.contactNumber && Boolean(formik.formik.errors.contactNumber)}
                        helperText={formik.formik.touched.contactNumber && formik.formik.errors.contactNumber}
                      />
                  </Grid>
              <Grid
                container
                spacing={3}
              >
                <Grid
                  item
                  md={3}
                  xs={12}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Region
                  </InputLabel>
                  <Select
                    fullWidth
                    onChange={(e) => {
                      onChangeRegion(e);
                      // onChange(e);
                    }}
                    // onBlur={onBlur}
                    defaultValue={state.present_address.region}
                    label="Region"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                  >
                    {PhilippineMap?.map((data, index) => (
                      <MenuItem value={data?.region?.region_name} key={index}>
                        {data?.region?.region_name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid
                  item
                  md={3}
                  xs={12}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Province
                  </InputLabel>
                  <Select
                    fullWidth
                    onChange={(e) => {
                      onChangeProvince(e);
                      // onChange(e);
                    }}
                    // onBlur={onBlur}
                    defaultValue={state.present_address.province}
                    label="Province"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                  >
                    {province?.map((province, index) => (
                      <MenuItem value={province} key={index}>
                        {province}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid
                  item
                  md={3}
                  xs={12}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Municipality
                  </InputLabel>
                  <Select
                    fullWidth
                    onChange={(e) => {
                      onChangeMunicipality(e);
                      // onChange(e);
                    }}
                    // onBlur={onBlur}
                    defaultValue={state.present_address.municipality}
                    label="Municipality"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                  >
                    {municipality?.map((municipality, index) => (
                      <MenuItem value={municipality} key={index}>
                        {municipality}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid
                  item
                  md={3}
                  xs={12}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Barangay
                  </InputLabel>
                  <Select
                    fullWidth 
                    // onChange={onChange}
                    // onBlur={onBlur}
                    defaultValue={state.present_address.barangay}
                    label="Barangay"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                  >
                    {barangay?.map((barangay, index) => (
                      <MenuItem value={barangay} key={index}>
                        {barangay}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
                </CardContent>
              </Card>
  
            </Grid>
          </Grid>
        </form>
      </Container> 
    </Page>
  )
}

export default Index;