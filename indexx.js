// accessing the variables
const row = document.getElementById('cartItems');
// console.log(row)
let products =[];

// fetching API
async function fetchAPI(){
    fetch('https://fakestoreapi.com/products').then(res => res.json()).then((data) => {
        // console.log(data);

        products = data
        displayProducts(products);
        // filterProducts(data);
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
                    <button type="button" class="btn btn-dark py-2 addCart">Add to Cart</button>
                </div>
            </div>
        </div>
        `;
    })
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
// let  
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