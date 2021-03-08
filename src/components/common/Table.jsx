import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

function Table(props) {
    return (
        <table>
            <TableHead />
            <TableBody />
        </table>
    );
}

export default Table;