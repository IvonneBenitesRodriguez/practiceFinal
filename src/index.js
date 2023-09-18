import _ from 'lodash';
// import printMe from './js/print.js';
import './style.css';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // btn.innerHTML = 'Click me and check the console!';
  // btn.onclick = printMe;

  // element.appendChild(btn);

  return element;
}

document.body.appendChild(component());