import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSignInAlt} from "@fortawesome/free-solid-svg-icons/index";

import './Header.scss';

class Header extends Component {
    state = {
        open: false,
    };

    handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
    };

    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }

        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;

        return (
          <div className="header">
              <div className="width__container">
                  <Typography component="h1" variant="h3"><Link className="no-underline title" to={process.env.PUBLIC_URL + '/'} >Library</Link></Typography>
                  <div className="header_bar">
                      <ul className="menu_list">
                          <li className="menu_list-item">
                              <Typography variant="button">
                                  Katalog
                              </Typography>
                          </li>
                          <li className="menu_list-item">
                              <Typography variant="button">
                                  Aktualności
                              </Typography>
                          </li>
                          <li className="menu_list-item">
                              <Button color="primary" className="btn_sign-in"
                                      buttonRef={node => {
                                          this.anchorEl = node;
                                      }}
                                      aria-owns={open ? 'menu-list-grow' : undefined}
                                      aria-haspopup="true"
                                      onClick={this.handleToggle}>
                                  Zaloguj się
                                  <FontAwesomeIcon className="left-space" icon={faSignInAlt} />
                              </Button>
                              <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
                                  {({ TransitionProps, placement }) => (
                                      <Grow
                                          {...TransitionProps}
                                          id="menu-list-grow"
                                          style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                      >
                                          <Paper>
                                              <ClickAwayListener onClickAway={this.handleClose}>
                                                  <MenuList >
                                                      <MenuItem onClick={this.handleClose}>
                                                          <Link className="no-underline" to={process.env.PUBLIC_URL +  '/user'}>
                                                              <Button variant="contained" color="secondary">
                                                                  Konto Użytkownika
                                                              </Button>
                                                          </Link>
                                                      </MenuItem>
                                                      <MenuItem onClick={this.handleClose}>
                                                          <Link className="no-underline" to={process.env.PUBLIC_URL + '/admin'}>
                                                              <Button variant="contained">
                                                                  Bibliotekarz
                                                              </Button>
                                                          </Link>
                                                      </MenuItem>
                                                  </MenuList>
                                              </ClickAwayListener>
                                          </Paper>
                                      </Grow>
                                  )}
                              </Popper>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
        );
    }
}

export default Header;