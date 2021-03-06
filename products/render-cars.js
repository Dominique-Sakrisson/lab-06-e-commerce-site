export function renderCars(cars){
    const li = document.createElement('li');
    li.className = cars.category;
    li.title = cars.description;

    const h3 = document.createElement('h3');
    h3.textContent = cars.name;
    li.append(h3);

    li.textContent = `${cars.name}`;

    const img = document.createElement('img');
    img.src = '../assets/' + cars.image;
    img.classList.add('car-img');
    li.append(img);

    const para = document.createElement('p');
    para.textContent = cars.description;
    li.append(para);
    //title.textContent = cars.name;

    const pricePara = document.createElement('p');
    pricePara.textContent = `$${cars.price}`;
    li.append(pricePara);

    const button = document.createElement('button');
    button.textContent = 'Add to cart';
    li.append(button);
    
    return li;
}
