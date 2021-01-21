
export function renderTableRow(cartItem, car, linePrice){
    const quantity = cartItem.quantity;
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    const tdQuant = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdLinePrice = document.createElement('td');

    tdName.textContent = car.name;
    tdQuant.textContent = quantity;
    tdPrice.textContent = car.price;
    tdLinePrice.textContent = linePrice;


    tr.append(tdName, tdQuant, tdPrice, tdLinePrice);
    return tr;
}

