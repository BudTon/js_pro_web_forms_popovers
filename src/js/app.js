/* eslint-disable no-unused-vars */
import CreatedElement from '../components/createdElement';
import Tooltip from '../components/tooltip';

const parent = document.querySelector('.container');
/* eslint-disable no-new */
new CreatedElement(parent);

const btn = document.querySelector('.btn');
/* eslint-disable no-new */
new Tooltip(btn);
