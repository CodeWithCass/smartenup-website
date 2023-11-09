import React from 'react';
import './app.css';
import Banner from './sections/Banner.jsx'
import GameCarousel from './sections/GameCarousel.jsx'

function App() {
  return (
    <div>
      <section>
        <Banner/>
      </section>
      <section>
        <GameCarousel/>
      </section>
      <section>Call to action</section>
      <section>Filters</section>
      <section>Testimonials Carousel</section>
      <section>Footer</section>
    </div>
  );
}

export default App;
