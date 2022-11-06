import React from 'react';
import Contacts from './Contacts';
import Hero from './Hero';
import Presentation from './Presentation';
import Projects from './Projects';
import Reviews from './Reviews';

function Main() {
  return (
    <main>
      <Hero />
      <Presentation />
      <Projects />
      <Reviews />
      <Contacts />
    </main>
  );
}

export default Main;
