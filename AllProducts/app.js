//? Making html Markup
import html from "../utils/card.js";
import header from "../utils/Header.js";
import footer from "../utils/Footer.js";
import products from '../utils/adminProducts.js';
let modifiedHeader;
let cart;
//! The newly added products by user
const users = JSON.parse(localStorage.getItem("users")) || [];
const userIndex = localStorage.getItem("userIndex");
if(!userIndex){
  cart = JSON.parse(localStorage.getItem('cart')) || []
}else{
  cart = users[userIndex].cart || [];
}
let userProducts = JSON.parse(localStorage.getItem("userProducts")) || [];
let rowId = 0;
let rowIdHtml = 0;
const elements = {
  list: document.querySelector(".sidenav"),
  productName: document.querySelector(".prod")
};
if (products.length === 0) {
  myProducts.forEach(el=> products.push(el))
  
}
//* Adding The newly created product in the begginning of the array
const allProducts = [...userProducts, ...products];

const createHtml = () => {
  const abc = document.createElement("div");
  abc.className = `row`;
  abc.id = `row-${rowId}`;
  rowId++;
  document.body.insertBefore(abc, document.body.lastElementChild);
};
createHtml();
for (let i = 0; i < allProducts.length; i++) {
  if (i % 4 === 3) createHtml();
}
allProducts.forEach((el, i) => {
  //! Setting index of the element
  el.index = i;
  //! Adding html markup to UI !\\
  const a = el.index % 4;
  let newHtml = html.replace(/%catagory%/g, el.catagory);
  newHtml = newHtml.replace(/%title%/g, el.title);
  newHtml = newHtml.replace(/%image%/g, el.image);
  newHtml = newHtml.replace(/%description%/g, el.description);
  newHtml = newHtml.replace(/%price%/g, el.price);
  newHtml = newHtml.replace(/%index%/g, el.index);
  let htmlElement = document.getElementById(`row-${rowIdHtml}`);
  a === 3 ? rowIdHtml++ : ``;
  htmlElement.insertAdjacentHTML("beforeend", newHtml);
});

//* Initializing Materialize
M.AutoInit();

//!*********************************!\\
//*Rendering the Side Catagories bar*\\
//?*********************************?\\

const catagories = [`mouse`, `keyboard`, `laptop`, `cpu`, `headphone`];

userProducts.forEach(el => {
  if (!catagories.includes(el.catagory)) catagories.push(el.catagory);
});

catagories.forEach(el => {
  let capital = el.split(``);
  capital[0] = capital[0].toUpperCase();
  capital = capital.join(``);
  const markup = `
  <li><button class="waves-effect  ${el}-btn">${capital}</button></li>
  <li>
    <div class="divider"></div>
  </li>`;
  elements.list.insertAdjacentHTML("beforeend", markup);
});
//* Catagory selecting Variable
let array;

//? To show all products
document.querySelector(".all-btn").onclick = () =>
  document.querySelectorAll(".filter").forEach(el => {
    elements.productName.innerHTML = ``;
    el.classList.remove(`hidden`);
  });

//! TO show selected products
const showProducts = nameProduct => {
  //* Selecting all elements with class of catagory
  array = document.querySelectorAll(`.${nameProduct}`);
  //? Selecting all cards
  const allProductCards = document.querySelectorAll(".filter");
  //! Adding Class of Hidden
  allProductCards.forEach(el => el.classList.add("hidden"));
  //* Changing HTML of Heading
  elements.productName.innerHTML = nameProduct;
  //? Removing class of hidden from specific elements
  array.forEach(el => el.classList.remove("hidden"));
};

//! Adding Listener to all Buttons
catagories.forEach(el => {
  document
    .querySelector(`.${el}-btn`)
    .addEventListener("click", () => showProducts(el));
});
const cartBtns = document.querySelectorAll(".cart");
class Cart {
  constructor(
    productIndex,
    userIndex,
    userId,
    productId,
    quantity,
    buyerIndex
  ) {
    this.userIndex = userIndex;
    this.productIndex = productIndex;
    this.userId = userId;
    this.productId = productId;
    this.quantity = quantity;
    this.buyerIndex = buyerIndex;
  }
}
let myCart;
const cartId = cart.map(el => el.productId);
cartBtns.forEach((el, i) =>
  el.addEventListener("click", () => {
    const cartProduct = allProducts[i];
      const productAdmin = { ...users[cartProduct.userIndex] };
      if (!cartProduct.userIndex || cartProduct.userIndex === `-1`) {
        cartProduct.userIndex = `-1`;
        productAdmin.id = `ADMIN`;
      }
      if (cartId.includes(cartProduct.id)) {
        cart[cartId.indexOf(cartProduct.id)].quantity++;
      } else {
        myCart = new Cart(
          cartProduct.index,
          cartProduct.userIndex,
          productAdmin.id,
          cartProduct.id,
          1,
          userIndex ? userIndex : `-1`
        );
        cart.push(myCart);
        cartId.push(myCart.productId);
      }
    if(userIndex){
      users[userIndex].cart = cart;
      localStorage.setItem('users', JSON.stringify(users));
    }else{
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  })
);

window.addEventListener("load", () => {
  setTimeout(() => {
    const heights = Array.from(document.querySelectorAll(".card-image img")).map(
      el => el.offsetHeight
    );
    let maxHeight = Math.max(...heights);
    document
      .querySelectorAll(`.card-image`)
      .forEach(el => (el.style.height = `${maxHeight + 20}px`));
  }, 1);
  setTimeout(() => {
    const heights = Array.from(document.querySelectorAll(".card-content")).map(
      el => el.offsetHeight
    );
    let maxHeight = Math.max(...heights);
    document
      .querySelectorAll(`.card-content`)
      .forEach(el => (el.style.height = `${maxHeight + 20}px`));
  }, 1);
});
modifiedHeader = header.replace(/%NAME1%/g, `Home`);
modifiedHeader = modifiedHeader.replace(/%HREF1%/g, `../HomePage/index.html`);
modifiedHeader = modifiedHeader.replace(/%NAME2%/g, `My Cart`);
modifiedHeader = modifiedHeader.replace(/%HREF2%/g, `../Cart/index.html`);
modifiedHeader = modifiedHeader.replace(/%NAME3%/g, `My Products`);
modifiedHeader = modifiedHeader.replace(
  /%HREF3%/g,
  `../UserProducts/index.html`
);
modifiedHeader = modifiedHeader.replace(/%NAME4%/g, `My Details`);
modifiedHeader = modifiedHeader.replace(/%HREF4%/g, `../UserInfo/index.html`);
modifiedHeader = modifiedHeader.replace(/%NAME5%/g, `Sign Up`);
modifiedHeader = modifiedHeader.replace(/%HREF5%/g, `../SignUp/index.html`);
modifiedHeader = modifiedHeader.replace(/%NAME6%/g, `Forgot Password`);
modifiedHeader = modifiedHeader.replace(
  /%HREF6%/g,
  `../ForgotPassword/index.html`
);

document.body.insertAdjacentHTML("afterbegin", modifiedHeader);
document.body.insertAdjacentHTML("beforeend", footer);
fetch('../abc.env').then(el=> el.json()).then(el=> console.log(el))