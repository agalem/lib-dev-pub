import React, {Component} from 'react';

//dialogs from material ui
class DialogWindow extends Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.handleListItemClick = this.handleListItemClick.bind(this);
    }
    handleClose() {
        this.props.onClose(this.props.selectedValue);
    }
    handleListItemClick = value => {
        this.props.onClose(value);
    }
}

class UserBag extends Component {


    render() {

        return(
            <p>Wybrane Pozycje (0)</p>
        )
    }
}

export default UserBag;