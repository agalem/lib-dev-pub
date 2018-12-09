import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
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
        return (
          <div className="header">
              <div className="width__container">
                  <Typography component="h1" variant="h3"><Link className="no-underline title" to={process.env.PUBLIC_URL + '/'} >Library</Link></Typography>
                  <div className="header_bar">
                      <ul className="menu_list">
                          <li className="menu_list-item">
                              <Link to={'/catalog'} >
                                  <Typography variant="button">
                                      Katalog
                                  </Typography>
                              </Link>
                          </li>
                          <li className="menu_list-item">
                              <Link to={'/news'} >
                                  <Typography variant="button">
                                      Aktualności
                                  </Typography>
                              </Link>
                          </li>
                          <li className="menu_list-item">
                              <Link to={'/auth'} className="btn_sign-in-link">
                                  <Typography variant="button" className="btn_sign-in">
                                      Zaloguj się
                                      <FontAwesomeIcon className="left-space" icon={faSignInAlt} />
                                  </Typography>
                              </Link>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
        );
    }
}

export default Header;