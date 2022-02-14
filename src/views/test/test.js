import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid
} from '@material-ui/core/';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Personal from './personal'
import Auth from './auth'
import Emp from './emp_details'
import {useFormik} from "formik";
import auth from '../../helper/validation/auth';
import personalValidation from '../../helper/validation/personal';
import empValidation from '../../helper/validation/empDetails';





const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const Index = () =>{
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  
  const getSteps = () => {
    return ['Enter your Login Credentials', 'Personal Information', 'Employment Details'];
  }

  const formik = useFormik({
    initialValues: {
      username:'',
      password:'',
      confirmPassword:'',
    },
    validationSchema: auth,
    onSubmit: (values, {resetForm}) => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    },
  });

  const personal = useFormik({
    initialValues: {
      firstname:'',
      middlename:'',
      lastname:'',
      suffix:'',
      birthday:'',
      contactNumber:'',
      region:'',
      province:'',
      municipality:'',
      barangay:'',
      gender:'',
    },
    validationSchema: personalValidation,
    onSubmit: (values, {resetForm}) => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    },
  });

  const empDetails = useFormik({
    initialValues: {
      empDate:'',
      philNumber:'',
      gsisNumber:'',
      nhmcNumber:'',
      tinNumber:'',
      taxstat:'',
      salaryGrade:'',
    },
    validationSchema: empValidation,
    onSubmit: (values, {resetForm}) => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    },
  });

  const steps = getSteps();

  const handleNext = () => {
    // alert(activeStep)
    const step = getStepIndex();
    switch (step) {
      case 0:
         formik.handleSubmit()
      case 1:
          personal.handleSubmit()
      case 2:
          empDetails.handleSubmit()
      default:
        return 'Unknown stepIndex';
    }
    
  };
  const getStepIndex = () => {
    return activeStep;
  }

  const handleBack = () => {
    getStepIndex()
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    getStepIndex()
    setActiveStep(0);
    
  };



const getStepContent = (stepIndex) => {
  switch (stepIndex) {
    case 0:
      return <Auth  formik={formik}/>
    case 1:
      return <Personal formik={personal}/>;
    case 2:
      return <Emp formik={empDetails}/>;
    default:
      return 'Unknown stepIndex';
  }
}


const onSubmit = (data) => {
  // axios.post("http://localhost:3001/ranks", data).then((response)=>{
  //     console.log(response.data)
  //   })
  alert("success")
}


  return (
    
    <Grid
      container
      spacing={2}
      align="center"
    >
    <Grid
      item
      lg={12}
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
        <div className={classes.root}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>All steps completed</Typography>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>
                  {getStepContent(activeStep)}
                </Typography>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Grid>
  </Grid>
  
  );
}

export default Index;
