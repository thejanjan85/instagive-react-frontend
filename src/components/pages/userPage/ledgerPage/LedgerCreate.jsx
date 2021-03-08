import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux'
import { userLedgerAdded } from '../../../../app/user'

function LedgerCreate(props) {
    const [dateValue, setDateValue] = useState()
    const [ledgerForm, setLedgerForm] = useState({
        postId: '',
        donorName: '',
        donationType: 'cash',
        paymentAddress: '',
        amount: 0,
        remarks: '',
        date: '' ,
        email: ''
    })

    const handleSubmit = async event => {
        event.preventDefault()
        // if (ledgerForm.postId === 'Select Post' || ledgerForm.postId === '') return alert('Select Post first')
        // if (ledgerForm.date === '') return alert('Select Date first')
        props.userLedgerAdded(ledgerForm, props.userToken)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="postId">Select Post</label>
                    <select id='postId'
                        value={ledgerForm.postId}
                        onChange={e => setLedgerForm({ ...ledgerForm, postId: e.target.value })}
                    >

                        <option>Select Post</option>
                        {props.post && props.post.map(post =>
                            <option key={post._id} value={post._id}>{post.Title}</option>


                        )}


                    </select>
              
              
              
              
                </div>
                <div>
                    <label htmlFor="donorName">Name</label>
                    <input type="text" name="donorName" id="donorName"
                        value={ledgerForm.donorName}
                        onChange={e => setLedgerForm({ ...ledgerForm, donorName: e.target.value })}
                    />
                </div>
                <div>







                    <label htmlFor="">Email(optional)</label>
                    <input type="text" name="" id=""  onChange={e => setLedgerForm({ ...ledgerForm, email: e.target.value })} />
                </div>
                <div>











                    <label htmlFor="donationType">Donation Type</label>
                    <select value={ledgerForm.donationType} onChange={e => setLedgerForm({ ...ledgerForm, donationType: e.target.value })} id='donationType'>
                        <option>Cash</option>
                        <option>In-kind</option>
                    </select>
                </div>







                <div>
                    <label htmlFor="paymentAddress">Payment Method(if money donation)</label>
                    <input type="text" name="paymentAddress" id="paymentAddress"
                        value={ledgerForm.paymentAddress}
                        onChange={e => setLedgerForm({ ...ledgerForm, paymentAddress: e.target.value })}
                    />
                </div>






                
                <div>
                    <label htmlFor="amount">Amoung/Item</label>
                    <input type="text" name="amount" id="amount"
                        value={ledgerForm.amount}
                        onChange={e => setLedgerForm({ ...ledgerForm, amount: e.target.value })}
                    />
                </div>










                <div>
                    <label htmlFor="remarks">Remarks</label>
                    <input type="text" name="remarks" id="remarks"
                        value={ledgerForm.remarks}
                        onChange={e => setLedgerForm({ ...ledgerForm, remarks: e.target.value })}
                    />
                </div>









                <div>
                    <label htmlFor="">Date</label>
                    <DatePicker selected={dateValue} onChange={date => {
                        setDateValue(date)
                        setLedgerForm({ ...ledgerForm, date: date.toString().split(' ').slice(1, 4).toString().replaceAll(',', ' ') })
                    }} />
                </div>












                <div>
                    <Link to='/user/ledger'>Cancel</Link>
                    <button>Save</button>
                </div>
            </form>
        </div>
    );
}


const mapStateToProps = state => {
    console.log(state);
    return {
        post: state.postList,
        userToken: state.auth.token
    }
}

export default connect(mapStateToProps, { userLedgerAdded })(LedgerCreate);