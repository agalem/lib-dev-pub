import React, { Component } from 'react';
import './AdminPage.scss';

import AdminMenu from '../AdminMenu/AdminMenu';

class AdminPage extends Component {
    render() {
        return (
            <div>
                <AdminMenu/>
                <p>Admin</p>
            </div>
        );
    }
}

export default AdminPage;