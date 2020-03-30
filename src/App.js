import React, { useState, useEffect } from 'react';
// import robotArray from './robots.js';

import Card from './Card.js';
import SearchBox from './SerchBox';
import Scroll from './Scroll';

import 'tachyons';

const App = () => {
  const [robotvalues, setRobotArrayValues] = useState({
    initial: [],
    current: []
  });

  const getRobots = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const Jsonresp = await response.json();
    return Jsonresp;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const addRobotsToState = async () => {
      const res = await getRobots();

      setRobotArrayValues({
        initial: res,
        current: res
      });
    };

    addRobotsToState();
  }, []);

  const { current, initial } = robotvalues;

  const robots = current.map(({ name, email, id }) => (
    <Card
      name={name}
      email={email}
      id={id}
      key={id}
    />
  ));

  const searchChange = (value) => {
    let filteredRobots = initial.filter(({ name }) => {
      return name.toLowerCase().includes(value.toLowerCase());
    });

    setRobotArrayValues({
      ...robotvalues,
      current: filteredRobots
    });
  };

  return (
    <div className="tc">
      <h1 className='f1'>Robo Friends</h1>
      <div>
        <SearchBox changeEvent={searchChange} />
      </div>
      <Scroll>
        <div>
          {(current.length) ? robots : <h3>Loading ...</h3>}
        </div>
      </Scroll>
    </div>
  );
};

export default App;
