//!*********************************!\\
//*Rendering the Side Catagories bar*\\
//?*********************************?\\

const catagories = [`mouse`, `keyboard`, `laptop`,`cpu`, `headphone`];

userProducts.forEach(el=>{
  if(!catagories.includes(el.catagory)) catagories.push(el.catagory)
})

catagories.forEach(el=>{
  let capital = el.split(``);
  capital[0] = capital[0].toUpperCase()
  capital = capital.join(``)
  const markup = `
  <li><button class="waves-effect ${el}-btn">${capital}</button></li>
  <li>
    <div class="divider"></div>
  </li>`
  elements.list.insertAdjacentHTML('beforeend',markup)
})
//* Catagory selecting Variable
let array;

//? To show all products
const showAll = ()=> document.querySelectorAll(".col").forEach(el=>{
  elements.productName.innerHTML = ``;
  el.classList.remove(`hidden`);
  el.classList.remove(`fade`);
})

//! TO show selected products
const showProducts = (nameProduct)=>{

  //* Selecting all elements with class of catagory
  array = document.querySelectorAll(`.${nameProduct}`)
  
  //? Selecting all cards
  const allProducts = document.querySelectorAll(".col");

  //! Adding Class of Hidden
  allProducts.forEach(el => el.classList.add("hidden"));

  //* Changing HTML of Heading
  elements.productName.innerHTML = nameProduct;

  //? Removing class of hidden from specific elements
  array.forEach(el => el.classList.remove("hidden"));
}

//! Adding Listener to all Buttons
catagories.forEach(el=>{
  document.querySelector(`.${el}-btn`).addEventListener('click', ()=> showProducts(el))
})