import React from 'react';
import { Provider } from 'react-redux';

import Routes from '../Routes/index.js';
import store from '../../store/index.js';


const Render = () => (
        <Routes />
);

export default Render;


console.log(Render)