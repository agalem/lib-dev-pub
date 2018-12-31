import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MailIcon from '@material-ui/icons/Mail';
import Bookmarks from '@material-ui/icons/Bookmarks';
import {Link} from 'react-router-dom';


import "./CatalogPage.scss";
import Pagination from '../Paginate/Paginate';
import Filters from '../CatalogFilters/CatalogFilters';

import {books} from '../../temp_database/books';

class CatalogPage extends Component {


    render() {
        return (
            <div className="width__container">
                <div className="search">
                    <Typography>Wyszukujęsz frazę "..." wg kryterium: Wszystkie pola</Typography>
                </div>
                <div className="catalog">
                    <aside className="catalog-filters">
                        <div className="divider"/>
                        <Filters/>
                    </aside>
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
                                                <MailIcon className="icon"/><Typography variant="caption">Powiadom, gdy będzie dostępne</Typography>
                                            </div>
                                        </div>  :
                                        <Button variant="outlined" color="secondary" className="btn_order" >
                                            Zamów
                                        </Button>}
                                    <div className="flex-inline">
                                        <Bookmarks className="icon"/><Typography variant="caption">Zapisz</Typography>
                                    </div>
                                </div>
                                <div className="divider"/>
                            </div>
                        })}
                        <Pagination/>
                    </div>
                </div>
            </div>
        );
    }
}


export default CatalogPage;