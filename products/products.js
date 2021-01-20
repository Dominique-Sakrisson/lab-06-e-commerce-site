import { renderCars } from './render-cars.js';
import { cars } from '../data/data.js';

const list = document.getElementById('car-list');

for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    const dom = renderCars(car);
    list.append(dom);
}
