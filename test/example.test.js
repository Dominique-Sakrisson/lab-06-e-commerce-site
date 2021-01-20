// IMPORT MODULES under test here:
import { renderCars } from '../products/render-cars.js';
import { cars } from '../data/data.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
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
