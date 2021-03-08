import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Sidebar from '../../common/Sidebar';
import AdminPending from './AdminPending';
import AdminAccepted from './AdminAccepted';
import AdminRejected from './AdminRejected';
import AdminLogin from './AdminLogin';
import '../../../style/adminPage/adminPage.css'

function AdminPage(props) {
    const [adminAuthID, setAdminAuthID] = useState()
    const adminSideBarItems = [
        {
            label: 'Pending',
            path: '/admin/pending'
        },
        {
            label: 'Accepted',
            path: '/admin/accepted'
        },
        {
            label: 'Rejected',
            path: '/admin/rejected'
        },
    ]

    useEffect(() => {
        // check if there's a user in coockies
        setAdminAuthID(localStorage.getItem('admin'))

        const validateAuthID = async () => {
            // Same logic for user login
            // axios for validating ID
            // await axios.post('', authID)
            // .then(() => setAdminAuthID(authID)) 
            // .catch (() => localStorage.removeItem('admin'))
        }

        validateAuthID()
    }, [])

    const renderContent = () => {
        return !adminAuthID ? <AdminLogin /> :
            <div className='admin-page-container'>
                <Sidebar sideBarItems={adminSideBarItems} />
                <div>
                    <Switch>
                        <Route path='/admin/pending' component={AdminPending} />
                        <Route path='/admin/accepted' component={AdminAccepted} />
                        <Route path='/admin/rejected' component={AdminRejected} />
                        <Redirect from='/admin' to='/admin/pending' exact />
                        <Redirect to='/not-found' />
                    </Switch>
                </div>
            </div>
    }

    return (
        <div>
            {renderContent()}
        </div>
    );
}

export default AdminPage;