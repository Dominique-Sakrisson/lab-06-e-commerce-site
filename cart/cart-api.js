import { findById } from '../utils.js';

const CART = 'CART';
const defaultEmptyCart = [];

export function getCart(){
    const stringCart = localStorage.getItem(CART);
    
    if (stringCart) {
        const parsedCart = JSON.parse(stringCart);
        console.log(parsedCart);
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
}

export function addToCart(id){
    const localCart = getCart();
    const cartItem = findById(id, localCart);
    if (cartItem){
        cartItem.quantity++;
    } else {
        const lineItem = {
            id: id,
            quantity: 1,
        };
        localCart.push(lineItem);
    }
    const stringLineItem = JSON.stringify(localCart);
    localStorage.setItem(CART, stringLineItem);
}