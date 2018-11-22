import React, { Component } from 'react';

import './HomePage.scss';
import SearchComponentMain from '../SearchComponentMain/SearchComponentMain';
import CarouselNewArrivals from '../CarouselNewArrivals/CarouselNewArrivals';
import UpdatesPreview from '../UpdatesPreview/UpdatesPreviev';

class HomePage extends Component {
    render() {
        return (
          <div>
              <div className="image_bgr--top" />
              <SearchComponentMain/>
              <CarouselNewArrivals/>
              <UpdatesPreview/>
          </div>
        );
    }
}

export default HomePage;