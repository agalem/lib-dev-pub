import React, { Component } from 'react';
import './BookPage.scss';
import {books} from '../../temp_database/books';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MailIcon from '@material-ui/icons/Mail';
import Bookmarks from '@material-ui/icons/Bookmarks';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class BookPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            book: {}
        }
    }

    componentWillMount() {
        const book = books.find(book => book.id == this.props.match.params.bookId);
        this.setState({book: book});
    }

    render() {
        const book = this.state.book;
        return (
            <div className="bookPage">
                <div className="divider"/>
                <div className="bookPage-container">
                    <div className="bookPage-info">
                        <p className="text-back">Powrót do wyników</p>
                        <div className="divider" />
                        <div className="top">
                            <img className="book-cover" src={require('../../images/' + book.imagePath)} alt={book.title + ' ' + book.author}/>
                            <div className="textbox">
                                <Typography variant="title">{book.title}</Typography>
                                <Typography variant="subheading">{book.author}</Typography>
                                <Typography variant="subheading">{book.publishedYear}</Typography>
                                <Typography variant="caption">Kategorie: {book.tags.map(tag => <a href="/" >{tag + ' '}</a>)}</Typography>
                                <Typography className="subtitle2" variant="subtitle2" >Dostępnych: {book.available}</Typography>
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
                        </div>
                        <div className="divider-light"/>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Tytuł</TableCell>
                                    <TableCell>{book.title}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Autor</TableCell>
                                    <TableCell>{book.author}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Wydawnictwo</TableCell>
                                    <TableCell>...</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Rok Wydania</TableCell>
                                    <TableCell>{book.publishedYear}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Działy</TableCell>
                                    <TableCell>{book.tags}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <div className="bookPage-more"/>
                </div>
            </div>
        );
    }
}

export default BookPage;