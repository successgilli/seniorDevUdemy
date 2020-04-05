import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import robotArray from './robots.js';

import Card from '../../components/Card/Card.js';
import SearchBox from '../../components/SerchBox/SerchBox';
import Scroll from '../../components/Scroll/Scroll';

import { getRobots } from '../../store/modules/robots/index';

import 'tachyons';

const App = ({
  searchVal,
  getRobots: fetchRobots,
  pending,
  failure,
  initial
}) => {
  const [robotvalues, setRobotArrayValues] = useState({
    current: []
  });

  // const getRobots = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //   const Jsonresp = await response.json();
  //   return Jsonresp;
  // };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
  
    fetchRobots()
  }, []);

  useEffect(() => {
    setRobotArrayValues({
      current: initial
    });
  }, [initial]);

  const { current } = robotvalues;

  const robots = current.map(({ name, email, id }) => (
    <Card
      name={name}
      email={email}
      id={id}
      key={id}
    />
  ));

  useEffect(() => {
    let filteredRobots = initial.filter(({ name }) => {
      return name.toLowerCase().includes(searchVal.toLowerCase());
    });

    setRobotArrayValues({
      ...robotvalues,
      current: filteredRobots
    });
  }, [searchVal])

  return (
    <div className="tc">
      <h1 className='f1'>Robo Friends</h1>
      <div>
        <SearchBox />
      </div>
      <Scroll>
        <div>
          {(pending) && <h3>Loading ...</h3>}
          {(failure) && <h3>Failed To Fetch</h3>}
          {(robots.length !== 0) && robots}
        </div>
      </Scroll>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    searchReducer: { name },
    robots: { initial, failure, pending }
  } = state;

  return {
    searchVal: name,
    initial,
    failure,
    pending
  }
}

export default connect(mapStateToProps, { getRobots })(App);
