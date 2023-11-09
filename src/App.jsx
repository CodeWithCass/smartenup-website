import React from 'react';
import './app.scss';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <section>
        <Navbar/>
      </section>
      <section>Game Carousel</section>
      <section>Call to action</section>
      <section>Filters</section>
      <section>Testimonials Carousel</section>
      <section>Footer</section>
    </div>
  );
}

export default App;
