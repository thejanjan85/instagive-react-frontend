import React from 'react';
import { connect } from 'react-redux';

function AdminRejected(props) {
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
    return (
        <div>
            <h1 className='admin-page-title'>Rejected</h1>
            <table className='table-container'>
                <thead>
                    <tr>
                        {theadData.map(tableHead =>
                            <th key={tableHead.name} className='table-header'>{tableHead.label}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {props.accRejected.map(account =>
                        <tr key={account._id}>
                            {theadData.map(tableHead =>
                                <td key={tableHead.name} className='table-item'>{account[tableHead.name]}</td>
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}


const mapStateToProps = state => {
    console.log(state);
    return { accRejected: state.accounts.rejected }
}

export default connect(mapStateToProps)(AdminRejected);