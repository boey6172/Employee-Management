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




const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, documentTypes, ...rest }) => {
  const classes = useStyles();
  const ClassesStyle = Classes();

  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

    console.log(documentTypes)

  const handleRemove = (id) => {   
    // if(window.confirm('Are you Sure on deleting this item'))
    //   instance.delete(`./paymentType/${id}.json`).then((response)=>{
    //   })
    alert(id)
  }
  
  
if(documentTypes){
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
                  Document Type
                </TableCell>
                <TableCell>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {documentTypes.map((documentType) => (
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
                        {documentType.documentType}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                  {/* <Dialog  payment = {payment}/> */}
                    &nbsp;
                  <Button 
                    onClick={() => handleRemove(documentType.id)}
                    variant="contained"
                    className={ClassesStyle.buttonDelete}
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
  documentTypes: PropTypes.array.isRequired
};

export default Results;
