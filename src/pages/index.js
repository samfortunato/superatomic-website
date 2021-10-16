import React from 'react';

import { Header } from '../components/header/header.jsx';
import { LaunchDate } from '../components/launch-date/launch-date.jsx';

import './index.scss';

function Index() {
  return (
    <>
      <Header />

      <main>
        <LaunchDate />
      </main>
    </>
  );
}

export default Index;
