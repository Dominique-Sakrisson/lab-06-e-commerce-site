import { findById } from '../utils.js';

const CART = 'CART';
const defaultEmptyCart = [];


export function getCart(){
    const stringCart = localStorage.getItem(CART);
    
    if (stringCart) {
        const parsedCart = JSON.parse(stringCart);
       
        return parsedCart;
    } else {
        //No cart was found, give the user a cart to work with
        const stringDefaultEmptyCart = JSON.stringify(defaultEmptyCart);
        //Put an empty string in the cart
        localStorage.setItem(CART, stringDefaultEmptyCart);

        //return the cart for the user
        return defaultEmptyCart;
    }
}

export function clearCart(){
    //grab our empty cart object, and string it
    const stringDefaultEmptyCart = JSON.stringify(defaultEmptyCart);
    //set the empty cart to the local storage cart
    localStorage.setItem(CART, stringDefaultEmptyCart);
    return getCart();
}

export function addToCart(id){
    const localCart = getCart();
    const cartItem = findById(id, localCart);

    const quantityToAdd = Number(getSelectedOption(id));

    if (cartItem){
        cartItem.quantity += quantityToAdd; 
    } else {
        const lineItem = {
            id: id,
            quantity: quantityToAdd,
        };
        localCart.push(lineItem);
    }
    const stringLineItem = JSON.stringify(localCart);
    localStorage.setItem(CART, stringLineItem);
    return getCart();
}

function getSelectedOption(id) {
    //get the select via its id
    const select = document.getElementById(`select-${id}`);
    //make a loop that keeps track of the current select item
    //each iteration checks if the current item selected value is true
    //if so function returns that value
    let opt;
    for (let i = 0; i < select.options.length; i++){
        opt = select.options[i];
        if (opt.selected === true) {
            return opt.value;
        }
    }
    return opt;
}