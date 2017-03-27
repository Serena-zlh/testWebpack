import _ from 'lodash';
function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['你好','哈哈哈'], ' ');

  return element;
}

document.body.appendChild(component());