
export function renderTableRow(cartItem, car){
    const quantity = cartItem.quantity;
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    const tdQuant = document.createElement('td');
    const tdPrice = document.createElement('td');

    tdName.textContent = car.name;
    tdQuant.textContent = quantity;
    tdPrice.textContent = car.price;

    tr.append(tdName, tdQuant, tdPrice);
    return tr;
}

export function getPriceTotal(cartItem, cars){
    return cartItem.quantity * cars.price;
}