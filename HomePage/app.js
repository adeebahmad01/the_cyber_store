
import html from "../utils/card.js";
import header from '../utils/Header.js';
import footer from '../utils/Footer.js';
let modifiedHeader;
let rowId = 0;
let rowIdHtml = 0;
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const equalHeight = parent => {
  setTimeout(() => {
    const heights = Array.from(document.querySelectorAll(`${parent} img`)).map(
      el => el.offsetHeight
    );
    let maxHeight;
    setTimeout(() => {
      maxHeight = Math.max(...heights);
      document
        .querySelectorAll(`${parent} .card-image`)
        .forEach(el => (el.style.height = `${maxHeight}px`));
    }, 50);
  }, 200);
  setTimeout(() => {
    const heights = Array.from(
      document.querySelectorAll(`${parent} .card-content`)
    ).map(el => el.offsetHeight);
    let maxHeight;
    setTimeout(() => {
      maxHeight = Math.max(...heights);
      document
        .querySelectorAll(`${parent} .card-content`)
        .forEach(el => (el.style.height = `${maxHeight}px`));
    }, 50);
  }, 200);
};

const products = JSON.parse(localStorage.getItem("productIntro"));
const userProducts = JSON.parse(localStorage.getItem("userProducts"));
const users = JSON.parse(localStorage.getItem("users")) || [];
const catagories = ["mouse", `keyboard`, `laptop`, "cpu", "headphone"];
const allProducts = userProducts ? [...userProducts, ...products] : products;
allProducts.forEach((el, i) => (el.index = i));
const newProducts = allProducts.slice(0, 10);
const userIndex = localStorage.getItem("userIndex");
const elements = {
  catagoryRow: document.querySelector(".catagory"),
  catagoryName: document.querySelector(".catgoryName"),
  name: document.querySelector(".name"),
  email: document.querySelector(".email"),
  userName: document.querySelector(".user"),
  userId: document.querySelector(".userId"),
  infoContainer: document.querySelector(".nav-nav")
};

const catagoryIndex = Math.floor(Math.random() * catagories.length);
const catagoryProducts = products.filter(
  el => el.catagory === catagories[catagoryIndex]
);
elements.catagoryName.innerHTML = catagories[catagoryIndex].toUpperCase();
catagoryProducts.forEach(el => {
  let newHtml = html.replace(/%catagory%/g, el.catagory);
  newHtml = newHtml.replace(/%title%/g, el.title);
  newHtml = newHtml.replace(/%image%/g, el.image);
  newHtml = newHtml.replace(/%description%/g, el.description);
  newHtml = newHtml.replace(/%index%/g, el.index);
  elements.catagoryRow.insertAdjacentHTML("beforeend", newHtml);
});
if (userIndex) {
  elements.name.innerHTML = `${users[userIndex].firstName} ${users[userIndex].lastName}`;
  elements.email.innerHTML = users[userIndex].email;
  elements.userName.innerHTML = users[userIndex].userName;
  elements.userId.innerHTML = users[userIndex].id;
} else {
  elements.infoContainer.innerHTML = `
  <div class="row">
    <div class="s12 center-align"><img src="../images/gmail.png" alt="Login" class="img" width="150px"></div>
  </div>
  <div class="row">
    <div class="col s6 center-align"><a href="../Login/index.html" class="btn white grey-text center">Login</a></div>
    <div class="col s6 center-align"><a href="../SignUp/index.html" class="btn white grey-text center">SignUp</a></div>
  </div>`;
}
const createHtml = () => {
  const abc = document.createElement("div");
  abc.className = `row`;
  abc.id = `row-${rowId}`;
  rowId++;
  document.body.insertBefore(abc, document.body.lastElementChild);
};
createHtml();
for (let i = 0; i < newProducts.length; i++) {
  if (i % 4 === 3) createHtml();
}
newProducts.forEach(el => {
  //! Adding html markup to UI !\\
  const a = el.index % 4;
  let newHtml = html.replace(/%catagory%/g, el.catagory);
  newHtml = newHtml.replace(/%title%/g, el.title);
  newHtml = newHtml.replace(/%image%/g, el.image);
  newHtml = newHtml.replace(/%description%/g, el.description);
  newHtml = newHtml.replace(/%index%/g, el.index);
  let htmlElement = document.getElementById(`row-${rowIdHtml}`);
  equalHeight(`#row-${rowIdHtml}`);
  a === 3 ? rowIdHtml++ : ``;
  htmlElement.insertAdjacentHTML("beforeend", newHtml);
});
equalHeight(`.catagory`);

const cartBtns = document.querySelectorAll(".cart");
class Cart {
  constructor(productIndex, userIndex, userId, productId, quantity) {
    this.userIndex = userIndex;
    this.productIndex = productIndex;
    this.userId = userId;
    this.productId = productId;
    this.quantity = quantity;
  }
}
let myCart;
const cartId = cart.map(el => el.productId);
cartBtns.forEach((el, i) =>
  el.addEventListener("click", e => {
    i = e.target.parentNode.parentNode.nextElementSibling.lastElementChild.lastElementChild.href.split(
      `=`
    )[1];
    console.log(i);
    const cartProduct = allProducts[i];
    const productAdmin = { ...users[cartProduct.userIndex] };
    if (!cartProduct.userIndex || cartProduct.userIndex === `-1`) {
      cartProduct.userIndex = `-1`;
      productAdmin.id = `ADMIN`;
    }
    if (userIndex) {
      if (cartId.includes(cartProduct.id)) {
        cart[cartId.indexOf(cartProduct.id)].quantity++;
      } else {
        myCart = new Cart(
          cartProduct.index,
          cartProduct.userIndex,
          productAdmin.id,
          cartProduct.id,
          1
        );
        cart.push(myCart);
        cartId.push(myCart.productId);
      }
    } else {
      if (cartId.includes(cartProduct.id)) {
        cart[cartId.indexOf(cartProduct.id)].quantity++;
      } else {
        myCart = new Cart(
          cartProduct.index,
          cartProduct.userIndex,
          productAdmin.id,
          cartProduct.id,
          1
        );
        cart.push(myCart);
        cartId.push(myCart.productId);
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  })
);
// setInterval(()=>{
  
// },1000)
window.addEventListener('load', ()=>{
  equalHeight(`.catagory`);
  for (let i = 0; i < rowId; i++) {
    equalHeight(`#row-${i}`)
  }
})
modifiedHeader = header.replace(/%NAME1%/g, `Products`)
modifiedHeader = modifiedHeader.replace(/%HREF1%/g, `../AllProducts/index.html`)
modifiedHeader = modifiedHeader.replace(/%NAME2%/g, `My Cart`)
modifiedHeader = modifiedHeader.replace(/%HREF2%/g, `../Cart/index.html`)
modifiedHeader = modifiedHeader.replace(/%NAME3%/g, `My Products`)
modifiedHeader = modifiedHeader.replace(/%HREF3%/g, `../UserProducts/index.html`)
modifiedHeader = modifiedHeader.replace(/%NAME4%/g, `My Details`)
modifiedHeader = modifiedHeader.replace(/%HREF4%/g, `../UserInfo/index.html`)
modifiedHeader = modifiedHeader.replace(/%NAME5%/g, `Login`)
modifiedHeader = modifiedHeader.replace(/%HREF5%/g, `../Login/index.html`)
modifiedHeader = modifiedHeader.replace(/%NAME6%/, `Forgot Password`)
modifiedHeader = modifiedHeader.replace(/%HREF6%/, `../ForgotPassword/index.html`)
document.body.insertAdjacentHTML('afterbegin', modifiedHeader)
document.body.insertAdjacentHTML('beforeend', footer)