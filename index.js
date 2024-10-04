// accessing the variables
const row = document.getElementById('cartItems');
let products;

let count = 0;
let sum= 0;
let cart ={};
let cartCount = 0;

if (localStorage.getItem("count")) {
    count = parseInt(localStorage.getItem("count"));
}
if (localStorage.getItem("sum")) {
    sum = parseInt(localStorage.getItem("sum"));
}
if (localStorage.getItem("cartCount")) {
    cartCount = parseInt(localStorage.getItem("cartCount"));
}
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

updateCart();


// fetching API
async function fetchAPI(){
    fetch('https://fakestoreapi.com/products').then(res => res.json()).then((data) => {
        // console.log(data);
        products = data;
        displayProducts(data);
        // console.log(products);
        // console.log(data);
        
        
    })
}
fetchAPI();



function displayProducts(data){
    // console.log(data);
    
    row.innerHTML = '';   // to clear the container
    data.forEach((ele) =>{
        // console.log(ele.title);
        titleTruncate(ele.title); // titleTruncate function
        
        // console.log(ele.description);
        descriptionTruncate(ele.description);  // descriptionTruncate
        
        row.innerHTML +=  `
        <div class="col d-flex justify-content-center">
        <div class="card mb-5" style="width: 22rem;">
        <img src="${ele.image}" class="card-img-top px-5 py-2 img-fluid" style = "width:334px; height:289px">
        <div class="card-body">
        <h5 class="card-title text-center">${truncateTitle}</h5>
        <p class="card-text text-center px-2 fw-normal">${truncateDescription}</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item text-center fs-5 fw-light">$ ${ele.price}</li>
        </ul>
        <div class="card-body text-center d-flex justify-content-center">
        <button type="button" class="btn btn-dark py-2 mx-4">Details</button>
        <button type="button" class="btn btn-dark py-2 cartButton" data-price=${ele.price} data-id=${ele.id} data-image=${ele.image} data-title=${ele.title}>Add to Cart</button>
        </div>
        </div>
        </div>
        `;

    })
        // selecting all the buttons and adding event
        let btns = document.querySelectorAll(".cartButton");
        // console.log(btns);

        for (let i = 0; i < btns.length; i++) {
            let btn = btns[i];
            // console.log(btns[i]);
            btn.addEventListener("click", addCart);
        }
}


// title truncate
let truncateTitle;
function titleTruncate(title){
    // console.log(title);
    if(title.length > 12){
        truncateTitle = title.substr(0,12) + '...';
        // console.log(truncateTitle);
    }
}

// description truncate
let truncateDescription;
function descriptionTruncate(description){
    // console.log(description);
    if(description.length > 50){
        truncateDescription = description.substr(0,90) + '...';
        // console.log(truncateDescription);
    }
}

// filtering products
function filterProducts(category){
    // console.log(category);
    if(category === 'all'){
        displayProducts(products);
        // console.log(products);
        
    }
    else{
        let filterProduct = products.filter(product => product.category === category);
        displayProducts(filterProduct);
        // console.log(filterProduct);
        // console.log(product.category)
    }
}


function addCart(event){
    let price = Number(event.target.dataset.price);   
    let title = event.target.dataset.title;
    let id = event.target.dataset.id;
    let image = event.target.dataset.image;
  
    
    if(id in cart){
        console.log(id,cart);
        cart[id].qty++;
    }
    else{
        let cartItem ={
            id : id,
            title : title,
            price : price,
            image : image,
            qty: 1
        };
        cart[id] = cartItem;
        cartCount++;
    }

    count++;
    sum += price;
    console.log(cart);

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart()

}


function updateCart(){
    document.getElementById("count").textContent = cartCount;
    localStorage.setItem('cartCount',cartCount);
    localStorage.setItem("count", count);
    localStorage.setItem("sum",Math.round(sum));
}
