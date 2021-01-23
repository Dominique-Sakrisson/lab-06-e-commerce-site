// IMPORT MODULES under test here:
import { renderCars } from '../products/render-cars.js';
import { cars } from '../data/data.js';
import { calcItemTotal, findById, getPriceTotal } from '../utils.js';
import { renderTableRow } from '../cart/render-table-row.js';
import { getCart, clearCart, addToCart } from '../cart/cart-api.js';

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

//render 
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

    const tdLinePrice = 60000;
    // Set up your arguments and expectations
    const expected = '<tr><td>BMW 5 Series</td><td>1</td><td>60000</td><td>60000</td></tr>' ;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTableRow(cart, car, tdLinePrice);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual.outerHTML, expected);
});

//addTocart
test('This Function will add an item to our cart', (expect) => {
    //Arrange
    const car = {
        id: 'bmw',
        name: 'BMW 5 Series',
        image: 'bmw.jpg',
        description: 'A sporty vroom vroom machine',
        category: 'sport',
        price: 60000,
    };



    const CART = 'CART';
    const emptyCart = [];
    
    const stringCartItem = JSON.stringify(emptyCart);
    localStorage.setItem(CART, stringCartItem);
   
    // Set up your arguments and expectations
    const expected = [
        {
          "id": "bmw",
          "quantity": 1
        }
      ];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addToCart(car.id);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

//clearCart
test('This Function will clear out the items from the cart', (expect) => {
    //Arrange

    const CART = 'CART';
    const notEmptyCart = 
    {
        id: 'toyo',
        name: 'Toyota Corolla',
        image: 'toyota.jpg',
        description: 'An economic little get-around-mobile',
        category: 'economy',
        price: 22500,
    };
    
    const stringCartItem = JSON.stringify(notEmptyCart);
    localStorage.setItem(CART, stringCartItem);
    
    // Set up your arguments and expectations
    const expected = [];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = clearCart();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

//getCart empty
test('This Function will return and empty array object because the cart is empty', (expect) => {
    //Arrange

    const CART = 'CART';
    const defaultEmptyCart = [];
    
  

    const stringEmptyCart = JSON.stringify(defaultEmptyCart);

    localStorage.setItem(CART, stringEmptyCart);

    
    // Set up your arguments and expectations
    const expected = [] ;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getCart();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

//getCart that is not empty
test('This Function will return the item(s) that are in the cart', (expect) => {
    //Arrange

    const CART = 'CART';
    const notEmptyCart = 
    {
        id: 'toyo',
        name: 'Toyota Corolla',
        image: 'toyota.jpg',
        description: 'An economic little get-around-mobile',
        category: 'economy',
        price: 22500,
    };
    
    const stringCartItem = JSON.stringify(notEmptyCart);
    
    localStorage.setItem(CART, stringCartItem);
    
    // Set up your arguments and expectations
    const expected = 	
    {
      "category": "economy",
      "description": "An economic little get-around-mobile",
      "id": "toyo",
      "image": "toyota.jpg",
      "name": "Toyota Corolla",
      "price": 22500
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getCart();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});








