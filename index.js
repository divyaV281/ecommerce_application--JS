const row = document.querySelector('.row');
let cards;
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
        if(str.length > 90){
        descriptionText = cardDescription.substr(0,90)+ '...'
      }
    }
    descriptionTruncate(cardDescription)
    // console.log(descriptionText);
      
      
        let card = `
        <div class="col d-flex justify-content-center">
          <div class="card mb-5" style="width: 22rem;">
            <img src="${ele.image}" class="card-img-top p-2" style = "width:325px; height:325px">
            <div class="card-body">
              <h5 class="card-title text-center">${truncateText}</h5>
              <p class="card-text text-center px-2 fw-normal">${descriptionText}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item text-center">$ ${ele.price}</li>
            </ul>
            <div class="card-body text-center">
              <a href="#" class="card-link"><button type="button" class="btn btn-dark">Details</button></a>
              <a href="#" class="card-link"><button type="button" class="btn btn-dark">Add to Cart</button></a>
            </div>
          </div>
        </div>
        `
        row.insertAdjacentHTML('beforeend', card)


        // let cardTitle = `${ele.title}`
        // // console.log(cardTitle);
        // let titleTruncate = function(str){
        //   let truncateText;
        //   if(str.length > 12){
        //     truncateText = str.substr(0,12) + "...";
        //   }
        //   console.log(truncateText);
          
        // }
        // titleTruncate(cardTitle)
        // titleTruncate(cardTitle)
        // for(let i=0; i<card.length; i++){
        //   if(cardTitle.length == 12){
        //     console.log(cardTitle);
            
        //   }
        // }

        
        // cards = card
    })
    // console.log(cards);
    let imageTitle = document.querySelector('h5')
})
// console.log(cards);


