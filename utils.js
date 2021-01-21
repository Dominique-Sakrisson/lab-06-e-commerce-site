
export function findById(id, array){
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
    return null;
}

export function getPriceTotal(cartItem, cars){
    return cartItem.quantity * cars.price;
}

export function calcItemTotal(quantity, dollarAmount) {
    return quantity * dollarAmount;
}