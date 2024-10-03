let cartList = {};
// console.log(cartList);

// getting elements from local storage
let cartElement = document.getElementById('cart');

let totalPrice = +localStorage.getItem('sum')  // Price of all elements
// console.log(totalPrice);

let totalAmount = totalPrice + 30;  // toatal price with shipping
// console.log(totalAmount);

let totalCount = localStorage.getItem('count'); // total number of products in cart
// console.log(totalCount);

// let totalCartItems = localStorage.getItem('cartCount');  // total products without repeatation
// console.log(totalCartItems);


if(localStorage.getItem('cart')){
    cartList = JSON.parse(localStorage.getItem('cart'));
}
else{
    cartElement.innerHTML = `
            <p class="d-flex justify-content-center mt-5 fs-1 fw-normal">Your Cart is Empty</p>
            <a href="index.html" class="text-decoration-none text-dark d-flex justify-content-center mb-5"><button type="button" class="btn btn-outline-dark ms-2"><i class="fa-solid fa-arrow-left"></i> Continue Shopping </button></a>
    `;

}



// item list
let col1 = document.createElement('div');
col1.setAttribute('class','col-lg-8 col-sm-12 mb-5');
// console.log(col1);

let itemDiv = document.createElement('div');
itemDiv.setAttribute('class','me-4 border rounded-2 flex-wrap');
// console.log(itemDiv);

let h5 = document.createElement('h5');
h5.setAttribute('class','border-bottom p-2 bg-light rounded-top');
let h5Text = document.createTextNode('Item List')
h5.appendChild(h5Text);

let itemDisplay = document.createElement('div');

// console.log(h5);
// console.log(itemDiv);


col1.appendChild(itemDiv)
itemDiv.appendChild(h5)
itemDiv.appendChild(itemDisplay)
cartElement.appendChild(col1)

for(let id in cartList){
    let item = cartList[id];
    // console.log(id);
    
    itemDisplay.innerHTML += `
        <div class="d-lg-flex align-items-center p-2 border-bottom border-2 mb-2 d-sm-block text-center">
            <img src="${item.image}" alt="img" class="me-3" style="width: 100px;">
            <h5>${item.title}</h5>
            <button type="button" class="btn btn-light mx-3 sub" onclick='add(${item.qty},-1)'>-</button>
            <span>${item.qty}</span>
            <button type="button" class="btn btn-light mx-3" onclick='add(${item.qty},1)'>+</button> <br>
            <span class='ms-5'>${item.qty}</span>
            <span class='mx-4'>*</span>
            <span><b>$ ${item.price}</b></span>
        </div>
    `    

    // console.log(cartElement);
    
}
  // summary list
  let col2 = document.createElement('div');
  col2.setAttribute('class','col-lg-4 col-sm-12');
// console.log(col2);

let summaryDiv = document.createElement('div');
  summaryDiv.setAttribute('class','border rounded-2')
// console.log(summaryDiv);

let summaryList = document.createElement('div');
//   summaryList.setAttribute('class','p-2');

summaryList.innerHTML =`
  <h5 class="border-bottom p-2 bg-light rounded-top">Order Summary</h5>
  <div class="d-flex justify-content-between p-2">
      <p>Products (<span>${totalCount}</span>) </p>
      <p>$ <span> ${totalPrice} </span> </p>
  </div>
  <div class="d-flex justify-content-between p-2">
      <p>Shipping</p>
      <p>$ 30</p>
  </div>
  <div class="d-flex justify-content-between p-2">
      <h5>Total Amount</h5>
      <h5>$ <span> ${totalAmount} </span> </h5>
  </div>
  <div class="d-flex justify-content-center mb-2">
      <button type="button" class="btn btn-dark">Go to Checkout</button>
  </div>
`
col2.appendChild(summaryDiv)
summaryDiv.appendChild(summaryList)
cartElement.appendChild(col2)

// // add function
// let add = (quantity, value) => {
//     console.log(quantity,value);
//     for(let key in cart){
//         // console.log(key,cart.id);
        
//         console.log(key, cart[key].id);
//         if(key == cart[key].id){
//         cart[key].qty += value;
//     }
//         // console.log(cart[key].qty);
        
//     }
    

// }

// let addFn = document.querySelector('.add');
// // console.log(addFn);
console.log(cart);


// addItem = () => {
//     console.log(cart);
//         // for(let ele in cart){
//         //     console.log(ele);
            
//         // }
        
// }

// addFn.addEventListener('click',addItem)
