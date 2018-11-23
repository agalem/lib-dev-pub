import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './CarouselNewArrivals.scss';
import books from '../../temp_database/books';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons/index";
import {faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons/index";

const CustomPrevArrow = (props)  => {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <FontAwesomeIcon
                icon={faArrowAltCircleLeft}
                color="#ffa199"
                size="2x"
            />
        </div>
    );
};

const CustomNextArrow = (props) => {
    const {className, onClick} = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                color="#ffa199"
                size="2x"
            />
        </div>
    );
};

class CarouselNewArrivals extends Component {
        render() {

            const settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
                nextArrow: <CustomNextArrow />,
                prevArrow: <CustomPrevArrow />,
                responsive: [
                    {
                        breakpoint: 1210,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 880,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            };

            const booksList = books.map(function (book) {
                return (
                    <Link className="card-link" to={'/book/'+book.id}>
                        <Card className="card">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt={book.title + book.author}
                                    height="200"
                                    image={require(`../../images/${book.imagePath}`)}
                                    title={book.title + book.author}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h3">
                                        {book.title}
                                    </Typography>
                                    <Typography component="p">
                                        {book.author}
                                    </Typography>
                                    <div className="space-top">
                                        {book.tags.map(function (tag) {
                                            return (<Chip label={tag}/>);
                                        })}
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                )
            });



            return (
                <div className="newArrivals__container">
                    <div className="slider__container width__container">
                        <Typography gutterBottom variant="h5" component="h2" className="section__title">Nowości</Typography>
                        <Slider {...settings}>
                            {booksList}
                        </Slider>
                    </div>
                </div>
            );
    }
}

export default CarouselNewArrivals;