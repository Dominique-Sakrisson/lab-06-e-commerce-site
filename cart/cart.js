import { getPriceTotal, renderTableRow } from './render-table-row.js';
import { cart } from '../data/cart-data.js';
import { findById } from '../utils.js';
import { cars } from '../data/data.js';
import { alertMsg } from './cart-handler.js';


const table = document.querySelector('table');
const orderButton = document.querySelector('button');

const tr = document.createElement('table');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');

let total = 0;

for (let item of cart) {
    const car = findById(item.id, cars);
    
    const carTotalPrice = getPriceTotal(item, car);

    total += carTotalPrice;
    
    const tableRowEl = renderTableRow(item, car);
    table.append(tableRowEl);
}

td3.textContent = `Order total: $${total}`;

tr.append(td1, td2, td3);

table.append(tr);

orderButton.addEventListener('click', alertMsg);