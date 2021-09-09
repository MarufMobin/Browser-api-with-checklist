// const addCart = () =>{
//     // Catch Data
//     catchData()
// }
// const catchData = () =>{

//     const inputField = document.getElementById('input-field-price');
//     const inputVlaue = inputField.value;

//     const inputFieldPrice = document.getElementById('input-field-name');
//     const inputValuePrice = inputFieldPrice.value;

//     if( inputVlaue !=='' &&  inputValuePrice !== ''){
//         displayData(`${inputValuePrice} ${inputVlaue} `)
//     }else{
//         errorMess(true)
//     }
    
//     inputField.value = '';
//     inputFieldPrice.value = '';
// }

// const errorMess = (isset) =>{
//     if( isset ){
//         const errorDiv = document.getElementById('error-div');
//     const h3 = document.createElement('h3');
//     h3.style.textAlign = 'center'; 
//     h3.innerHTML = `
//         <p> Please input a Valid Data</p>
//     `;
//     errorDiv.appendChild(h3);
//     }else{
//         const errorDiv = document.getElementById('error-div');
//         errorDiv.innerHTML = '';
//     }
// }


// const displayData = (value) =>{
//     const ul = document.getElementById('prerent-container');
//     const li = document.createElement('li');
//     li.classList.add('style-li')
//     li.innerText = value;
//     ul.appendChild(li);
//     chectItem(value)
//     errorMess( false );
// }

// // is Value are Availabe or not

// const chectItem = (value) =>{
//     const previous = localStorage.getItem('cart');
//     // console.log(previous,"previous Value")
//     let objCart;

//     if( value ){
//         objCart = JSON.parse(previous);
//         // console.log(objCart, "object Cart")
//     }else{
//         objCart = {};
//     }
//     // console.log(objCart)
//     return objCart;
// }

// // Local storage 

// const assingVlaue = ( ) =>{
//     const findValue = chectItem()
//     console.log(findValue)

//     const stringifyValue = JSON.stringify(findValue)
//     localStorage.setItem('cart',stringifyValue)
// }

// chectItem()



// Fresh Way to 
// input-field-name input-field-price prerent-container error-div addCart()


// 1st, fist step fetch data in our input field 




// 2nd, display data in our ui 

// const displayProduct = ( name,price ) =>{

//     const ul = document.getElementById('prerent-container');
//     const li = document.createElement('li');
//     li.classList.add('style-li');
//     li.innerText = `${name} ${price}`;
//     ul.appendChild(li);

// }
const displayProduct = () =>{

   const cart = localStorage.getItem('cart');
   const cartItems = JSON.parse(cart);
   const ul = document.getElementById('prerent-container');
   ul.textContent = "";
//     const li = document.createElement('li');
//     li.classList.add('style-li');
//     li.innerText = `${cartItem}`;
//     ul.appendChild(li);
   for( const cartItem of cartItems){
       console.log(cartItem["name"])
       console.log(cartItem["price"])
       console.log(cartItem["quantity"])
       const li = document.createElement('li');
        li.classList.add('style-li');
        
        li.innerText = `${cartItem["price"]} ${cartItem["quantity"]} ${cartItem["name"]}`;
       
         ul.appendChild(li);

   }

}
// 3rd, check already value in local storage



// 4 ( check Already Done ) => 



// 1st Step 
const addCart = () =>{

    const inputFieldName = document.getElementById('input-field-name');
    const inputNameValue = inputFieldName.value;

    const inputFieldPrice = document.getElementById('input-field-price');
    const inputPriceValue = inputFieldPrice.value;

    if( !( inputPriceValue && inputNameValue )){
        
        return alert('jhdklsfkdjfkl');
    }

    // displayProduct( inputNameValue , inputPriceValue )
    addProductToCart( inputNameValue , inputPriceValue )
    inputFieldName.value = '';
    inputFieldPrice.value = '';
   displayProduct() 
}

// 2nd step 

const getFindItem = () =>{

    const presentValue = localStorage.getItem('cart');
    let setObject;

    if( presentValue ){
      setObject = JSON.parse(presentValue);
    }else{
        setObject = [];     
    }
    return setObject;
}

// 3rd Strep
const addProductToCart = ( name, price ) =>{

    const findProduct = getFindItem();
    let update = 0;
    
    for( const product of findProduct){
        console.log(product)
        if( product['name'].toLowerCase() == name.toLowerCase()){
            product['price'] = price;
            product['quantity'] += 1;
            update = update + 1;
        }            
    }
    if (update == 0) {
        const product = {};
        product['name'] = name;
        product['quantity'] = 1;
        product['price'] = price;
        findProduct.push(product);
    }
    const cardStringify = JSON.stringify( findProduct )
    localStorage.setItem('cart', cardStringify)  
}

// 4 Th Step 
const displayProduct = () =>{

    const cart = localStorage.getItem('cart');
    const cartItems = JSON.parse(cart);
    const ul = document.getElementById('prerent-container');
    ul.textContent = "";
    for( const cartItem of cartItems){
        console.log(cartItem["name"])
        console.log(cartItem["price"])
        console.log(cartItem["quantity"])
        const li = document.createElement('li');
         li.classList.add('style-li');
         
         li.innerText = `${cartItem["price"]} ${cartItem["quantity"]} ${cartItem["name"]}`;
        
          ul.appendChild(li);
 
    }
 
 }

// 5th Step 

const placeOrder = () =>{
    // console.log("click Me");
    localStorage.removeItem('cart');
    document.getElementById('prerent-container').innerHTML = "";
}

displayProduct()