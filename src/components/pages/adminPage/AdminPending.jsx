import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { connect } from 'react-redux'

import { accountApproved, accountRejected } from '../../../app/accounts'


function AdminPending(props) {

    const theadData = [
        {
            label: 'Organization',
            name: 'orgName'
        },
        {
            label: 'Email',
            name: 'email'
        },
        {
            label: 'City',
            name: 'city'
        },
        {
            label: 'Rep. Name',
            name: 'repName'
        },
    ]

    const handleApproveAccount = async (account) => {
        // await axios.post(`http://localhost:5000/admin/changestatus/${account}/approved`)
        //     .then(() => accountList = [])
        props.accountApproved(account)
        // window.location.reload();
    };

    const handleRejectAccount = async (account) => {
        props.accountRejected(account)
    }

    return (
        <div>
            <h1 className='admin-page-title'>Pending</h1>
            <table className='table-container'>
                <thead>
                    <tr>
                        {theadData.map(tableHead =>
                            <th key={tableHead.name} className='table-header'>{tableHead.label}</th>
                        )}
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {props.accountPending.map(account =>
                        <tr key={account._id}>
                            {theadData.map(tableHead =>
                                <td key={tableHead.name} className='table-item'>
                                    {account[tableHead.name]}
                                </td>
                            )}
                            <td className='table-item' id='table-button-container'>
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className='table-icon'
                                    size='lg'
                                    onClick={() => handleApproveAccount(account)}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    className='table-icon'
                                    size='lg'
                                    onClick={() => handleRejectAccount(account)}
                                />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}


const mapStateToProps = state => {
    return { accountPending: state.accounts.pending }
}
export default connect(mapStateToProps, { accountApproved, accountRejected })(AdminPending);