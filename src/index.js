import _ from 'lodash'
import './style.sass'
import Icon from './watermelon.jpeg'
function component() {
    const element = document.createElement('div');
  
    // Lodash imported by script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')

    const watermelon = new Image()
    watermelon.src = Icon
    element.appendChild(watermelon)
    return element;
}
  
document.body.appendChild(component());