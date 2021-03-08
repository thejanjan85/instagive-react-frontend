import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'

import { accountRejected } from '../../../app/accounts'

function AdminAccepted(props) {
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

    const handleEditButton = (account) => {
        console.log(account);
    }

    const handleDeleteButton = async (account) => {
        props.accountRejected(account)
    }

    return (
        <div>
            <h1 className='admin-page-title'>Accepted</h1>
            <table className='table-container'>
                <thead>
                    <tr>
                        {theadData.map(tableHead =>
                            <th key={tableHead.name} className='table-header'>{tableHead.label}</th>
                        )}
                        <th className='table-header'>No. of Post</th>
                        <th className='table-header'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {props.accApproved.map(account =>
                        <tr key={account._id}>
                            {theadData.map(tableHead =>
                                <td key={tableHead.name} className='table-item'>
                                    {account[tableHead.name]}</td>
                            )}
                            <td className='table-item'>

                            </td>
                            <td className='table-item'>
                                {/* <FontAwesomeIcon
                                    icon={faEdit}
                                    className='table-icon'
                                    size='lg'
                                    onClick={e => handleEditButton(account)}
                                    style={{ cursor: 'pointer' }}
                                /> */}
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    className='table-icon'
                                    size='lg'
                                    onClick={e => handleDeleteButton(account)}
                                    style={{ cursor: 'pointer' }}
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
    return { accApproved: state.accounts.approved }
}

export default connect(mapStateToProps, { accountRejected })(AdminAccepted);