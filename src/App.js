import React, { useState } from 'react';
import robotArray from './robots.js';

import Card from './Card.js';
import SearchBox from './SerchBox';

import 'tachyons';

const App = () => {
  const [ robotvalues, setRobotArrayValues ] = useState(robotArray);

  const robots = robotvalues.map(({ name, email, id }) => (
    <Card
      name={name}
      email={email}
      id={id}
      key={id}
    />
  ));

  const searchChange = (value) => {
    let filteredRobots = robotArray.filter(({ name }) => {
      return name.toLowerCase().includes(value.toLowerCase());
    });

    setRobotArrayValues(filteredRobots);
  };

  return (
    <div className="tc">
      <h1 className='f1'>Robo Friends</h1>
      <div>
        <SearchBox changeEvent={searchChange} />
      </div>
      <div>
        {robots}
      </div>
    </div>
  );
};

export default App;
