
function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = "你好，第一版本"

  return element;
}

document.body.appendChild(component());