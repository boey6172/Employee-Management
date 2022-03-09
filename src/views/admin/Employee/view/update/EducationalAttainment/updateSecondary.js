import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import {
  Modal,
  Button,
  Box,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
// import { UPDATE_EMPLOYEE } from "../Query";
// import { useMutation } from "@apollo/client";
import { Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paperHead: {
    background: "#e0e0e0",
    color: "#212121",
    height: "40px",
    textAlign: "center",
    fontFamily: "Roboto",
    padding: 10,
  },
  paperBody: {
    padding: "20px",
  },
  paper: {
    marginTop: "-100px",
    backgroundColor: theme.palette.background.paper,
    width: "600px",
  },
  update: {
    backgroundColor: "#1976d2",
    color: "white",
    marginLeft: "5px",
  },
  editIcon: {
    marginTop: "5px",
    color: "#3e2723",
    fontSize: "13px",
    "&:hover": {
      color: "#9e9e9e",
      cursor: "pointer",
    },
  },
}));

const states = {
  educational_attainment: {
    primary: {
      school_name: "",
      school_address: "",
      year_attainment: "",
      year_graduated: "",
    },
    secondary: {
      school_name: "",
      school_address: "",
      year_attainment: "",
      year_graduated: "",
    },
    tertiary: {
      school_name: "",
      school_address: "",
      course: "",
      year_attainment: "",
      year_graduated: "",
    },
  },
};

export default ({ data }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const useFormInstance = useForm({
    shouldFocusError: false,
  });

  const { handleSubmit, getValues, control } = useFormInstance;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const [
  //   updateEmployee,
  //   { loading: loadingUpdateEmployee, error: errorUpdateEmployee },
  // ] = useMutation(UPDATE_EMPLOYEE, {
  //   onCompleted(data) {
  //     window.location = window.location;
  //   },
  // });

  // const [ updateEmployee ] = useMutation(UPDATE_EMPLOYEE, {
  //   onCompleted(data) {
  //     window.location = window.location;
  //   },
  // });

  const onUpdate = async (info) => {
    states.educational_attainment.primary = {
      ...data.educational_attainment.primary,
    };
    states.educational_attainment.tertiary = {
      ...data.educational_attainment.tertiary,
    };
    states.educational_attainment.secondary = info;

    delete states.educational_attainment.primary.__typename;
    delete states.educational_attainment.tertiary.__typename;

    // updateEmployee({ variables: { id: data._id, input: states } });
  };

  const body = (
    <>
      <div className={classes.paper}>
        <div className={classes.paperHead}>
          <p>Educational Attainment</p>
        </div>
        <div className={classes.paperBody}>
          <Grid container spacing={1}>
            <Typography variant="h6" gutterBottom>
              Secondary
            </Typography>
            <Grid item md={12} xs={12}>
              <Controller
                control={control}
                name="school_name"
                rules={{ required: "School name is required" }}
                render={({
                  field: { onChange, onBlur, ref },
                  fieldState: { error },
                }) => (
                  <div>
                    <TextField
                      defaultValue={getValues("school_name")}
                      onChange={onChange}
                      onBlur={onBlur}
                      error={error !== undefined}
                      helperText={error?.message}
                      fullWidth
                      inputRef={ref}
                      label="School Name"
                      margin="normal"
                      type="text"
                      variant="outlined"
                    />
                  </div>
                )}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <Controller
                control={control}
                name="school_address"
                rules={{ required: "School Address is required" }}
                render={({
                  field: { onChange, onBlur, ref },
                  fieldState: { error },
                }) => (
                  <div>
                    <TextField
                      defaultValue={getValues("school_address")}
                      onChange={onChange}
                      onBlur={onBlur}
                      error={error !== undefined}
                      helperText={error?.message}
                      fullWidth
                      inputRef={ref}
                      label="School Address"
                      margin="normal"
                      type="text"
                      variant="outlined"
                    />
                  </div>
                )}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Controller
                control={control}
                name="year_attainment"
                rules={{ required: "Years completed is required" }}
                render={({
                  field: { onChange, onBlur, ref },
                  fieldState: { error },
                }) => (
                  <div>
                    <TextField
                      defaultValue={getValues("year_attainment")}
                      onChange={onChange}
                      onBlur={onBlur}
                      error={error !== undefined}
                      helperText={error?.message}
                      fullWidth
                      inputRef={ref}
                      label="Years Completed"
                      margin="normal"
                      type="text"
                      variant="outlined"
                    />
                  </div>
                )}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Controller
                control={control}
                name="year_graduated"
                rules={{ required: "Years completed is required" }}
                render={({
                  field: { onChange, onBlur, ref },
                  fieldState: { error },
                }) => (
                  <div>
                    <TextField
                      defaultValue={getValues("year_graduated")}
                      onChange={onChange}
                      onBlur={onBlur}
                      error={error !== undefined}
                      helperText={error?.message}
                      fullWidth
                      inputRef={ref}
                      label="Years Graduated"
                      margin="normal"
                      type="text"
                      variant="outlined"
                    />
                  </div>
                )}
              />
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="center" mt={3}>
            <Button
              onClick={handleClose}
              variant="contained"
              size="small"
              className={classes.margin}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={handleSubmit(onUpdate)}
              className={classes.update}
            >
              Update
            </Button>
          </Box>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div>
        <Button onClick={handleOpen} className={classes.editIcon}>
          Edit
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>{body}</Fade>
        </Modal>
      </div>
    </>
  );
};
