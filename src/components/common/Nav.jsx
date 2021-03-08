import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux'


import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { authRemove } from '../../app/auth'
import logo from '../../img/Instagive-logo-2.png'
import '../../style/common/Nav.css'

function Nav(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav className="navBar">
            <span>
                <Link to="/" className='navLogo'>
                    <img src={logo} alt="logo" height='45px' className='logo' style={{ marginRight: 10 }} />
                    <p className='navLogoName'>InstaGive</p>
                </Link>
                <span>
                    {/* Other nav links */}
                </span>
            </span>
            <span className='navLogin'>
                {props.auth.token ?
                    <span>
                        {props.auth.type === 'user' ?
                            <span>
                                <div>
                                    <IconButton
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleMenu}
                                        color="inherit"
                                    >
                                        <AccountCircle fontSize='large' />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        <MenuItem>
                                            <NavLink to="/user/ledger" className='navLink'>Ledger</NavLink>
                                        </MenuItem>
                                        <MenuItem>
                                            <NavLink to="/user" className='navLink'>Dashboard</NavLink>
                                        </MenuItem>
                                        <MenuItem>
                                            <NavLink to="/user/change-password" className='navLink'>ChangePassword</NavLink>
                                        </MenuItem>
                                        <MenuItem>
                                            <NavLink to='/' className='navLink' onClick={() => {
                                                localStorage.removeItem('user')
                                                localStorage.removeItem('admin')
                                                props.authRemove()
                                            }}>Logout</NavLink>
                                        </MenuItem>
                                    </Menu>
                                </div>
                            </span> :
                            <NavLink to='/' className='navLink' onClick={() => {
                                localStorage.removeItem('user')
                                localStorage.removeItem('admin')
                                props.authRemove()
                            }}>Logout</NavLink>
                        }
                    </span> :
                    <span>
                        <NavLink to="/auth/register" className='navLink'>Signup</NavLink>
                        |
                        <NavLink to="/auth/login" className='navLink'>Login</NavLink>
                    </span>
                }
            </span>
        </nav>
    );
}


const mapStateToProps = state => {
    console.log(state);
    return { auth: state.auth }
}

export default connect(mapStateToProps, { authRemove })(Nav);