import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MailIcon from '@material-ui/icons/Mail';
import Bookmarks from '@material-ui/icons/Bookmarks';
import {Link} from 'react-router-dom';
import "./Catalog.scss";
import {books} from '../../temp_database/books';


const Filters = ({props}) => {
    return <div className="filters">

        Filtry
    </div>
};

class Catalog extends Component {


    render() {
        return (
            <div className="catalog">
                <div className="catalog-filters">
                    <div className="divider"/>
                    <Filters/>
                </div>
                <div className="catalog-main">
                    {books.map((book) => {
                        return <div className="bookRow" key={book.id}>
                            <div className="bookRow-data">
                                <Link to={'/book/' + book.id}><Typography variant="title">{book.title}</Typography></Link>
                                <Link to={'/book/' + book.id}><Typography variant="subheading" color="primary">{book.author}</Typography></Link>
                                <Link to={'/book/' + book.id}><Typography variant="subheading">{book.publishedYear + " | " + book.tags}</Typography></Link>
                                <Link to={'/book/' + book.id}><Typography variant="subtitle2" className="bookRow-data-available">Dostępnych: {book.available}</Typography></Link>
                            </div>
                            <div className="bookRow-actions">
                                {!book.available || book.available < 1 ?
                                    <div>
                                        <Button variant="outlined" disabled color="secondary" className="btn_order">
                                            Zamów
                                        </Button>
                                        <div className="flex-inline">
                                            <MailIcon/><Typography variant="caption">Powiadom, gdy będzie dostępne</Typography>
                                        </div>
                                    </div>  :
                                    <Button variant="outlined" color="secondary" className="btn_order" >
                                        Zamów
                                    </Button>}
                                <div className="flex-inline">
                                    <Bookmarks/><Typography variant="caption">Zapisz</Typography>
                                </div>
                            </div>
                            <div className="divider"/>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}


export default Catalog;