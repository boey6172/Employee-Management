import React, { useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
// import moment from 'moment';
// import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles,
  Button,
} from '@material-ui/core';
import Loading from '../../../../widgets/loading'
import DeleteIcon from '@material-ui/icons/Delete';
// import Dialog from './updateDialog';
import Classes from '../../../../widgets/classes'
import instance from '../../../../instance/instance';
import Update from './update';



const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, religions, ...rest }) => {
  const classes = useStyles();
  const ClassesStyle = Classes();

  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);


  const confirm = (id) =>{
    window.confirm('Are you sure you wish to delete this item?') ? handleRemove(id) : cancel("cancel")
  
  }
  const cancel = () =>{
  }
  
  const handleRemove = (id) => {   
    // const {id} = data;
    const request = {id};
  
    instance.post("./religion/delete", request,
    {
      headers:{
          token:localStorage.getItem("token")
      }
    }
    ).then((response) => {
      console.log(response)
      if(!response.error)
      {
        // console.log(response)
        window.location = window.location;
        // alert("Saved" . response)
      }else{
          alert(response.error) 
      }
    }) 
  }
  
  
  
if(religions){
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      {/* <PerfectScrollbar> */}
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Religion
                </TableCell>
                <TableCell>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {religions.map((religion) => (
                <TableRow>
                  <TableCell>
                    <Box
                      alignItems="center"
                      display="flex"
                    >
                      {/* <Avatar
                        className={classes.avatar}
                        src={customer.avatarUrl}
                      >
                        {getInitials(customer.name)}
                      </Avatar> */}
                      {/* {expenses.expenseCategory} */}
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {religion.religion}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                  <Update
                    style={{ cursor: "pointer" }}
                    data={religion}
                  />
                    &nbsp;
                  <Button 
                    onClick={() => confirm(religion.id)}
                    // variant="contained"
                    // className={ClassesStyle.buttonDelete}
                  >
                   <DeleteIcon/>
                  </Button>
                  </TableCell>
                </TableRow>
               ))} 
            </TableBody>
          </Table>
        </Box>
      {/* </PerfectScrollbar> */}
    </Card>
  );
}
else{
  return(
    <Loading />
  )
}
};

Results.propTypes = {
  className: PropTypes.string,
  religions: PropTypes.array.isRequired
};

export default Results;
