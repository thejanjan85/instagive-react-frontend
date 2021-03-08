import React from 'react';
import '../../style/common/sideBar.css'
import { NavLink } from 'react-router-dom'

function Sidebar(props) {
    return (
        <aside className='sidebar-container'>
            {props.sideBarItems.map(({ label, path }) =>
                <div className='sidebar-link-container' key={label}>
                    <NavLink to={path} className='sidebar-link'>{label}</NavLink>
                </div>
            )}
        </aside>
    );
}

export default Sidebar;