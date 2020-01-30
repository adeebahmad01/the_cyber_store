//! 
import header from '../utils/Header.js';
import footer from '../utils/Footer.js';
let modifiedHeader;
const users = JSON.parse(localStorage.getItem('users')) || [];
const productIndex = location.href.split('=')[1]
let product;
const userProducts = JSON.parse(localStorage.getItem('userProducts'));
import myProducts from '../utils/adminProducts.js';
if(userProducts){
  product = [...userProducts,...myProducts][productIndex];
}else{
  product = myProducts[productIndex]
}
const elements = {
  name: document.querySelector('.name'),
  catagory: document.querySelector('.catagory'),
  id: document.querySelector('.id'),
  userName: document.querySelector('.userName'),
  price: document.querySelector('.price'),
  description: document.querySelector('.description'),
  date: document.querySelector('.date'),
  image: document.querySelector('.image'),
  feature:document.querySelector('.feature'),
  btn: document.querySelector('.btn')
}
if(!productIndex) document.body.innerHTML = `<h1>Please Select a product</h1>`;
else{
  elements.name.innerHTML = product.title;
  elements.catagory.innerHTML = product.catagory;
  elements.id.innerHTML = product.id;
  elements.userName.innerHTML = users[product.userIndex] ? users[product.userIndex].userName : `Admin`;
  elements.price.innerHTML = product.price
  elements.description.innerHTML = product.description;
  elements.date.innerHTML = new Date(product.date).toDateString();
  elements.feature.innerHTML = product.feature
  elements.image.src = product.image;
  elements.image.alt = product.title;
  elements.btn.href = `${elements.btn.href}?id=${productIndex}`
}

modifiedHeader = header.replace(/%NAME1%/g, `Home`)
modifiedHeader = modifiedHeader.replace(/%HREF1%/g, `../HomePage/index.html`)
modifiedHeader = modifiedHeader.replace(/%NAME2%/g, `My Products`)
modifiedHeader = modifiedHeader.replace(/%HREF2%/g, `../UserProducts/index.html`)
modifiedHeader = modifiedHeader.replace(/%NAME3%/g, `Forgot Password`)
modifiedHeader = modifiedHeader.replace(/%HREF3%/g, `../ForgotPassword/index.html`)
modifiedHeader = modifiedHeader.replace(/%NAME4%/g, `My Cart`)
modifiedHeader = modifiedHeader.replace(/%HREF4%/g, `../Cart/index.html`)
modifiedHeader = modifiedHeader.replace(/%display5%/g, `none`)
modifiedHeader = modifiedHeader.replace(/%HREF5%/g, `../SignUp/index.html`)
modifiedHeader = modifiedHeader.replace(/%NAME6%/g, `All Products`)
modifiedHeader = modifiedHeader.replace(/%HREF6%/g, `../AllProducts/index.html`)

document.body.insertAdjacentHTML('afterbegin', modifiedHeader)
document.body.insertAdjacentHTML('beforeend', footer)