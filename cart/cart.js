import { renderTableRow } from './render-table-row.js';
//import { cart } from '../data/cart-data.js';
import { getPriceTotal, findById, calcItemTotal } from '../utils.js';
import { cars } from '../data/data.js';
import { alertMsg } from './cart-handler.js';
import { getCart, clearCart, addToCart } from './cart-api.js';


const table = document.querySelector('table');
const orderButton = document.getElementById('place-order');
const clearButton = document.getElementById('clear-cart');

const tr = document.createElement('table');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');

const cart = getCart();
console.log(cart);

let total = 0;
let classCount = 0;

for (let item of cart) {
    const car = findById(item.id, cars);
    const lineTotal = calcItemTotal(item.quantity, car.price);
    const carTotalPrice = getPriceTotal(item, car);

    total += carTotalPrice;
    const tableRowEl = renderTableRow(item, car, lineTotal);

    if (classCount % 2 === 0){
        tableRowEl.classList.add('even');
    } else {
        tableRowEl.classList.add('odd');
    }

    table.append(tableRowEl);
    classCount++;
}
clearButton.addEventListener('click', clearCart);

if (cart.length === 0){
    orderButton.disabled = true;
} else {
    orderButton.addEventListener('click', () => {
        localStorage.removeItem('CART');
        alert('Order placed: \n' + JSON.stringify(cart, true, 2));

        window.location = '../';

    });

}

td1.textContent = `Order total: $${total}`;


tr.append(td1, td2, td3);
tr.classList.add('total');

table.append(tr);

orderButton.addEventListener('click', alertMsg);

