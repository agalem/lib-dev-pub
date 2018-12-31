import React from 'react';
import './Paginate.scss';

import Typography from '@material-ui/core/Typography';

const Paginate = () => {
    return (
        <div className="row">
            <Typography className="arr" variant="body2">{'<<'}</Typography>
            <Typography className="pagination" variant="body2" gutterBottom>1-5 of 13</Typography>
            <Typography className="arr" variant="body2">{'>>'}</Typography>
        </div>
    )
};

export default Paginate;