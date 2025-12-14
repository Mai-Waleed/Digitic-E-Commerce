
// var products = [];
// function getData() {
//   var myhttp = new XMLHttpRequest();
//   myhttp.open("GET", "https://ecommerce.routemisr.com/api/v1/products");
//   myhttp.send();

//   myhttp.addEventListener("readystatechange", function () {
//     if (myhttp.readyState == 4 && myhttp.status == 200) {
//       products = JSON.parse(myhttp.response).data;
//       console.log(products);
//       disData()
//     }
//   });
// }

// function disData() {
//   var Pro = ``;
//   for (var i = 0; i < products.length-2; i++) {
//     Pro += `
//         <div class="feature-col-card">
//                     <div class="card-img">
//                         <img src="${products[i].imageCover}" alt="${products[i].title}" >
//                     </div>
//                     <div class="card-info">
//                         <span>${products[i].category.name}</span>
//                         <a href="#">${products[i].title}</a>
//                         <div class="rate">
//                             <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
//                             <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
//                             <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
//                             <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
//                             <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
//                         </div>
//                         <span class="price">$${products[i].price}</span>
//                         <div class="list">
//                             <i class="fa-regular fa-heart"></i>
//                             <i class="fa-brands fa-opencart"></i>
//                         </div>
//                     </div>
//                 </div>
//         `;
//   }
//   document.querySelector(".feature-col-cards").innerHTML = Pro;
// }

// getData();

