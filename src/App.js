import React from 'react';
import './app.css';
import Banner from './sections/Banner.jsx';
import MovingBanner from './components/MovingBanner.jsx';
import GameCarousel from './sections/GameCarousel.jsx';
import CallToAction from './sections/CallToAction.jsx';
import Filter from './sections/Filter.jsx';
import TestimonialContent from './components/TestimonialContent.jsx';
import Footer from './sections/Footer.jsx';

function App() {
  return (
    <div>
      <section>
        <Banner />
        <MovingBanner />
      </section>
      <section>
        <GameCarousel />
      </section>
      <section>
        <CallToAction />
      </section>
      <section>
        <Filter />
      </section>
      <section>
        <TestimonialContent />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
