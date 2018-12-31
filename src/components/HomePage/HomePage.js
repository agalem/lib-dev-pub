import React, { Component } from 'react';

import './HomePage.scss';
import SearchComponentMain from '../SearchComponentMain/SearchComponentMain';
import CarouselNewArrivals from '../CarouselNewArrivals/CarouselNewArrivals';
import UpdatesPreview from '../UpdatesPreview/UpdatesPreviev';
import Footer from '../Footer/Footer';

class HomePage extends Component {
    render() {
        return (
          <div>
              <div className="image_bgr--top" />
              <SearchComponentMain/>
              <CarouselNewArrivals/>
              <UpdatesPreview/>
              <Footer/>
          </div>
        );
    }
}

export default HomePage;