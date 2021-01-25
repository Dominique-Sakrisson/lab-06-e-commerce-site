
const submitButton = document.createElement('button');

export function createAddForm(){
    //create elements for the form, title of form and inputs
    const formSection = document.getElementById('form-section');
    const productForm = document.createElement('form');
    const formHeader = document.createElement('h1');
    const inputId = document.createElement('input');
    const inputName = document.createElement('input');
    const inputImg = document.createElement('input');
    const inputAbout = document.createElement('input');
    const inputCategory = document.createElement('input');
    const inputPrice = document.createElement('input');
    

    //set form attribute
    //productForm.setAttribute('action', 'post');
    productForm.setAttribute('id', 'form');
    //set form header
    formHeader.textContent = 'Add new product for purchase';
    //set button id
    submitButton.setAttribute('id', 'submit');
    //set button text
    submitButton.textContent = 'Submit New Item';


    //set input type
    inputId.setAttribute('type', 'text');
    inputName.setAttribute('type', 'text');
    inputImg.setAttribute('type', 'text');
    inputAbout.setAttribute('type', 'text');
    inputCategory.setAttribute('type', 'text');
    inputPrice.setAttribute('type', 'number');

    //set input name
    inputId.setAttribute('name', 'id');
    inputName.setAttribute('name', 'item-name');
    inputImg.setAttribute('name', 'img');
    inputAbout.setAttribute('name', 'description');
    inputCategory.setAttribute('name', 'category');
    inputPrice.setAttribute('name', 'price');

    //set input placeholders
    inputId.setAttribute('placeholder', 'product id');
    inputName.setAttribute('placeholder', 'product name');
    inputImg.setAttribute('placeholder', 'img url');
    inputAbout.setAttribute('placeholder', 'description');
    inputCategory.setAttribute('placeholder', 'product category');
    inputPrice.setAttribute('placeholder', 'product price');
    
    //add inputs to the form
    productForm.append(inputId, inputName, inputImg, inputAbout, inputCategory, inputPrice, submitButton);

    formSection.append(productForm);
    return productForm;
}
createAddForm();


submitButton.addEventListener('click', () => {
    const formDetails = document.getElementById('form').elements;
    for (let i = 0; i < formDetails.length; i++){
        let currentValue = formDetails[i].value;
        console.log(currentValue);
        alert(currentValue);
    }
    

});


