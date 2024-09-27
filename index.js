const row = document.querySelector('.row');
let menCat = document.querySelector('#mensClothing');

// fetching data from api
fetch("https://fakestoreapi.com/products").then(ele => ele.json()).then((data) => {
    console.log(data);
    
    data.forEach((ele) => {

      // truncate title
      let cardTitle = `${ele.title}`
      // console.log(cardTitle);
      let truncateText;
      let titleTruncate = (str)=>{
        if(str.length > 12){
          truncateText = str.substr(0,12) + "...";
        }
        // console.log(truncateText);
      }
      titleTruncate(cardTitle);
        // console.log(truncateText);


      // truncate description
      let cardDescription = ele.description;
      // console.log(cardDescription);
      let descriptionText;
      let descriptionTruncate = (str) => {
        if(str.length > 70){
        descriptionText = cardDescription.substr(0,90)+ '...'
      }
    }
    descriptionTruncate(cardDescription)
    // console.log(descriptionText);
      
      
        let card = `
        <div class="col d-flex justify-content-center">
          <div class="card mb-5" style="width: 22rem;">
            <img src="${ele.image}" class="card-img-top px-5 py-2" style = "width:334px; height:289px">
            <div class="card-body">
              <h5 class="card-title text-center">${truncateText}</h5>
              <p class="card-text text-center px-2 fw-normal">${descriptionText}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item text-center fs-5 fw-light">$ ${ele.price}</li>
            </ul>
            <div class="card-body text-center d-flex justify-content-center">
              <button type="button" class="btn btn-dark py-2 mx-4">Details</button>
              <button type="button" class="btn btn-dark py-2">Add to Cart</button>
            </div>
          </div>
        </div>
        `
        row.insertAdjacentHTML('beforeend', card);

        
      function menClothingHandler(){
        // console.log(`${ele.category}`);
        let menCart = data.filter((ele,index) => {
          // console.log(ele,index);
          // for(let key in ele){
            if(`${ele.category}` == "men's clothing"){
              return ele;
              // console.log(ele);
              
            }
          // }
          // console.log(ele[]);
        })        
        console.log(menCart)
      }

      menCat.addEventListener('click',menClothingHandler)
      })
})


