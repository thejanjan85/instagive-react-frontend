import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import LedgerList from './LedgerList';
import LedgerCreate from './LedgerCreate';

function LedgerPage(props) {
    return (
        <div>
            <Switch>
                <Route path='/user/ledger/create' component={LedgerCreate} />
                <Route path='/user/ledger' exact component={LedgerList} />
                <Redirect to='/not-found' />
            </Switch>
        </div>
    );
}

export default LedgerPage;