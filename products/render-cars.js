import { addToCart } from '../cart/cart-api.js';
//import { findById } from '../utils.js';


export function renderCars(cars){
    const li = document.createElement('li');
    li.className = cars.category;
    li.title = cars.description;

    const h3 = document.createElement('h3');
    h3.textContent = cars.name;
    li.append(h3);

    li.textContent = `${cars.name}`;
    li.style.fontSize = '1.3rem';

    const img = document.createElement('img');
    img.src = '../assets/' + cars.image;
    img.classList.add('car-img');
    li.append(img);

    const para = document.createElement('p');
    para.textContent = cars.description;
    li.append(para);

    const pricePara = document.createElement('p');
    pricePara.textContent = `$${cars.price}`;
    li.append(pricePara);

    const addButton = document.createElement('button');
    addButton.textContent = 'Add to cart';
    addButton.addEventListener('click', () =>{
        addToCart(cars.id);
    });
    
    li.append(addSelect(cars.id));
    li.append(addButton);

    return li;
}

function addSelect(id){
    //create a select element on DOM, and assign id attribute
    const select = document.createElement('select');
    select.setAttribute('id', `select`);
    //create options, set text content, and values
    const option1 = document.createElement('option');
    option1.textContent = 1;
    option1.value = 1;
    const option2 = document.createElement('option');
    option2.textContent = 2;
    option2.value = 2;
    const option3 = document.createElement('option');
    option3.textContent = 3;
    option3.value = 3;
    const option4 = document.createElement('option');
    option4.textContent = 4;
    option4.setAttribute('value', 4);
    //append all options to the select dropdown
    select.append(option1, option2, option3, option4);
    return select;
}