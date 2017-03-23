//PACKAGES
import React from 'react';
import {render} from 'react-dom';
import {hashHistory} from 'react-router';
import Routes from './config/routes';
  
render(
    <Routes history={hashHistory} />,
  document.getElementById('root')
);
