import React, { useContext, useState } from 'react';
import DatePicker from "react-datepicker";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container'
import {TextField, Button, Icon, FormControl, InputLabel, Select, Radio, RadioGroup, FormLabel, FormControlLabel, MenuItem
} from '@material-ui/core/'
import {connect} from 'react-redux'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios'





function LedgerList(props) {








  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  
  }))(TableRow)



  const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 700,
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    formControl: {
      minWidth: 120,
    },
  }));  
  
  
  const classes = useStyles();








// Modal

const [dateValue, setDateValue] = useState()
const [ledgerForm, setLedgerForm] = useState({
    postId: '',
    donorName: '',
    donationType: 'Cash',
    paymentAddress: '',
    amount: '',
    remarks: '',
    date: '' ,
    email: ''
})

const handleSubmit = async event => {
    event.preventDefault()
    // if (ledgerForm.postId === 'Select Post' || ledgerForm.postId === '') return alert('Select Post first')
    // if (ledgerForm.date === '') return alert('Select Date first')


    await axios.post(`http://localhost:5000/ledger/${ledgerForm.postId}`, {...ledgerForm, token: localStorage.getItem('user')})



}




const [openModal, setModal] = useState(false);
  
const handleClickOpen = async () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };


  

  return (

    <div>
   









   <Button
        style={{margin: '12px'}}
        onClick={handleClickOpen}
        variant='contained'
        color='primary'
        endIcon={<Icon fontSize="small">add_circle</Icon>
    }
      >Add Data</Button>

      


      <Container component='main' maxWidth='xl' className="shadow-container">




      <div>
      
        <TextField variant='outlined' style={{width: '50%', display: 'relative', left:'25%', marginBottom: '30px'}}label="Search Here"/>


      </div>

      <div style={{ overflowX: 'auto' }}>
        
        
        <TableContainer component={Paper}>
          <Table className={classes.table}
            aria-label='customized table'
          >
            <TableHead>
              <TableRow>
                <StyledTableCell align='center'>POST</StyledTableCell>
                <StyledTableCell align='center'>NAME</StyledTableCell>
                <StyledTableCell align='center'>EMAIL</StyledTableCell>
                <StyledTableCell align='center'>DONATION TYPE</StyledTableCell>
                <StyledTableCell align='center'>
                  Payment Method (If Cash Donation)
                </StyledTableCell>
                <StyledTableCell align='center'>AMOUNT / ITEM QUANTITY</StyledTableCell>
                <StyledTableCell align='center'>REMARKS</StyledTableCell>
                <StyledTableCell align='center'>DATE</StyledTableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {props.ledger &&
                props.ledger.map((data) => (
                  <StyledTableRow key={data._id}>
                    <StyledTableCell  align='center'>{ props.post.filter(postData => postData._id === data.postId )[0].Title }</StyledTableCell>
                    <StyledTableCell align='center'>{data.donorName}</StyledTableCell>
                    <StyledTableCell align='center'>{data.email}</StyledTableCell>
                    <StyledTableCell align='center'>{data.donationType}</StyledTableCell>
                    <StyledTableCell align='center'>{data.paymentAddress}</StyledTableCell>
                    <StyledTableCell align='center'>{data.amount}</StyledTableCell>
                    <StyledTableCell style={{maxWidth: '20vw'}} align='center'>{data.remarks}</StyledTableCell>
                    <StyledTableCell align='center'>{(data.date)}</StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      </Container>






{/* Modal */}

<Dialog open={openModal} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth='sm' fullWidth={true}>
        <DialogTitle id="form-dialog-title"  style={{alignSelf: 'center', fontSize: '50px'}}>Add New Data</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Fill the Inputs Bellow: 
          </DialogContentText>


            <FormControl style={{marginBottom: '12px'}} fullWidth={true} className={classes.formControl}>
            <InputLabel style={{ marginLeft: '12px' }} id='post'>


            Select Post
              </InputLabel>

              <Select
                variant='outlined'
                label='city'
                name='city'
                id='city'
                fullWidth={true}
                value={ledgerForm.postId}
                onChange={(e) =>
                  setLedgerForm({ ...ledgerForm, postId: e.target.value })
                }
              >
                 {props.post && props.post.map(post =>

          <MenuItem  key={post._id} value={post._id}>{post.Title}</MenuItem>


                )}
                              </Select>


            </FormControl>





            <TextField style={{marginBottom: '12px'}} variant="outlined" fullWidth={true} label="Enter Donor Name (Can be Anonymous)" type="text" name="donorName" id="donorName"
                        value={ledgerForm.donorName}
                        onChange={e => setLedgerForm({ ...ledgerForm, donorName: e.target.value })}
                    />



            <TextField style={{marginBottom: '12px'}} variant="outlined" fullWidth={true} label="Enter Email (Optional)" type="text" name="" id=""  onChange={e => setLedgerForm({ ...ledgerForm, email: e.target.value })} />

            <FormControl style={{marginBottom: '12px'}} fullWidth={true} component="fieldset">
              <FormLabel component='legend'>Select Donation Type</FormLabel>


              <RadioGroup
                aria-label='gender'
                name='gender1'
                value={ledgerForm.donationType}
                onChange={(e) =>
                  setLedgerForm({ ...ledgerForm, donationType: e.target.value })
                }>

        <FormControlLabel
                  value='Cash'
                  control={<Radio />}
                  label='Cash'
                />
                <FormControlLabel
                  value='In-Kind'
                  control={<Radio />}
                  label='In-Kind'
                />

</RadioGroup>

                
                </FormControl>

 <TextField style={{marginBottom: '12px'}} variant="outlined" fullWidth={true} label="Enter Payment Method" type="text" name="paymentAddress" id="paymentAddress"
                        value={ledgerForm.paymentAddress}
                        onChange={e => setLedgerForm({ ...ledgerForm, paymentAddress: e.target.value })}
              
              
              
              />

<TextField style={{marginBottom: '12px'}} variant="outlined" fullWidth={true} label="Enter Amount(Cash) / Item Quantity(In-Kind)" type="text" name="amount" id="amount"
                        value={ledgerForm.amount}
                        onChange={e => setLedgerForm({ ...ledgerForm, amount: e.target.value })}
                    />


<TextField style={{marginBottom: '12px'}} variant="outlined" fullWidth={true} rows={4} multiline label="Enter Remarks" type="text" name="remarks" id="remarks"
                        value={ledgerForm.remarks}
                        onChange={e => setLedgerForm({ ...ledgerForm, remarks: e.target.value })}
                    />



      <TextField style={{marginBottom: '12px'}} variant="outlined" fullWidth={true}  InputLabelProps={{
      shrink: true,
    }} type="date"  onChange={date => {
                        setDateValue(date)
                        setLedgerForm({ ...ledgerForm, date: date.target.value })
                    }} />






          </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Donate
          </Button>
        </DialogActions>
    
      </Dialog>






















    </div>
  );
}






const mapStateToProps = (state) => {


return {ledger: state.user.ledger, post: state.user.post, userToken: state.auth.token
}

}



export default connect(mapStateToProps)(LedgerList);
