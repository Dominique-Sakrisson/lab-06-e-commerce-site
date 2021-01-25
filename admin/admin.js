


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
    productForm.setAttribute('action', 'localStorage');
    productForm.setAttribute('id', 'form');
    //set form header
    formHeader.textContent = 'Add new product for purchase';

    //set button attributes
    submitButton.setAttribute('id', 'submit');
    submitButton.setAttribute('type', 'submit');
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

    //set input max lengths
    inputId.setAttribute('maxlength', '10');
    inputName.setAttribute('maxlength', '10');
    inputImg.setAttribute('maxlength', '40');
    inputAbout.setAttribute('maxlength', '30');
    inputCategory.setAttribute('maxlength', '10');
    inputPrice.setAttribute('maxlength', '6');
    

    //set input placeholders
    inputId.setAttribute('placeholder', 'product id');
    inputName.setAttribute('placeholder', 'product name');
    inputImg.setAttribute('placeholder', 'img url');
    inputAbout.setAttribute('placeholder', 'description');
    inputCategory.setAttribute('placeholder', 'product category');
    inputPrice.setAttribute('placeholder', 'product price');
    
    //set input validations
    inputId.setAttribute('required', 'required');
    inputName.setAttribute('required', 'required');
    inputImg.setAttribute('required', 'required');
    inputAbout.setAttribute('required', 'required');
    inputCategory.setAttribute('required', 'required');
    inputPrice.setAttribute('required', 'required');
    
    

    //add inputs to the form
    productForm.append(inputId, inputName, inputImg, inputAbout, inputCategory, inputPrice, submitButton);

    formSection.append(productForm);
    return productForm;
}
createAddForm();


function ObjectBuild(id, name, img, about, category, price){
    this.id = id;
    this.name = name;
    this.img = img;
    this.about = about;
    this.category = category;
    this.price = price;
}

submitButton.addEventListener('click', () => {
    const formDetails = document.getElementById('form').elements;
    const zap = new ObjectBuild();
    
    let currentValue;
    for (let i = 0; i < formDetails.length; i++){
        currentValue = formDetails[i].value;
        zap.inputId = currentValue;


        localStorage.setItem('summam', currentValue);
       // if (currentValue.name)
        
       /* for (let ii = 0; formDetails.length; ii++){
            //get the nam
        }*/
    }

    const stringZap = JSON.stringify(zap);
    localStorage.setItem(summam, stringZap);
   
});
