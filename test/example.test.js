// IMPORT MODULES under test here:
import { renderCars } from '../products/render-cars.js';
import { cars } from '../data/data.js';

import { calcItemTotal, findById, getPriceTotal } from '../utils.js';


const test = QUnit.test;
//renderCars test
test('This function will take in a car objectt and return a list item properly formatted in HTML code', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li class="economy" title="An economic little get-around-mobile">Toyota Corolla<img src="../assets/toyota.jpg" class="car-img"><p>An economic little get-around-mobile</p><p>$22500</p><button>Add to cart</button></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCars(cars[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

//getPriceTotal test
test('when passed an item quantity of 3 and price of 60,000 function should return 180000', (expect) => {
    const cart = {
        id: 'bmw',
        quantity: 3,
    };

    const car = {
        id: 'bmw',
        name: 'BMW 5 Series',
        image: 'bmw.jpg',
        description: 'A sporty vroom vroom machine',
        category: 'sport',
        price: 60000,
    };
    
    //Arrange
    // Set up your arguments and expectations
    const expected = 180000;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getPriceTotal(cart, car);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
//findById test
test('When passed an item id and an array, will return the first id property from the array that matches the item id', (expect) => {

    const cart = [
        {
            id: 'toyo',
            quantity: 2,
        },
        {
            id: 'bmw',
            quantity: 3,
        },
        {
            id: 'honda',
            quantity: 4,
        }
    ];

    const cars = [
        {
            id: 'toyo',
            name: 'Toyota Corolla',
            image: 'toyota.jpg',
            description: 'An economic little get-around-mobile',
            category: 'economy',
            price: 22500,
        },
        {
            id: 'bmw',
            name: 'BMW 5 Series',
            image: 'bmw.jpg',
            description: 'A sporty vroom vroom machine',
            category: 'sport',
            price: 60000,
        }, 
        {   
            id: 'honda',
            name: 'Honda CR-V',
            image: 'honda.jpg',
            description: 'Be it children or pasta, this thing fits alot',
            category: 'crossover',
            price: 26470,
    
        }
    ];
    const expected = {
        id: 'toyo',
        name: 'Toyota Corolla',
        image: 'toyota.jpg',
        description: 'An economic little get-around-mobile',
        category: 'economy',
        price: 22500,
    };

    const actual = findById(cart[0].id, cars);


    expect.deepEqual (actual, expected);
});

//calcItemTotal
test('This Function will take in two integer values and return the product', (expect) => {
    //Arrange
    const cart = {
        id: 'bmw',
        quantity: 1,
    };

    const car = {
        id: 'bmw',
        name: 'BMW 5 Series',
        image: 'bmw.jpg',
        description: 'A sporty vroom vroom machine',
        category: 'sport',
        price: 60000,
    };

    // Set up your arguments and expectations
    const expected = 60000 ;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(cart.quantity, car.price);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
