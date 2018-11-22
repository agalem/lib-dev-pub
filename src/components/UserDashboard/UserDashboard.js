import React, { Component } from 'react';
import './UserDashboard.scss';
import Typography from '@material-ui/core/Typography';

class UserDashboard extends Component {
    render() {
        return (
          <div className="main-dashboard">
              <aside className="aside">

              </aside>
              <main>
                  <Typography variant="h1">User Dashboard</Typography>
              </main>
          </div>
        );
    }
}

export default UserDashboard;