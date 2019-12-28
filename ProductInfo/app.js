//! 
const users = JSON.parse(localStorage.getItem('users')) || [];
const productIndex = location.href.split('=')[1]
let product;
if(JSON.parse(localStorage.getItem('userProducts'))){
  product = [...JSON.parse(localStorage.getItem('userProducts')),... JSON.parse(localStorage.getItem('productIntro'))][productIndex];
}else{
  product = JSON.parse(localStorage.getItem('productIntro'))[productIndex]
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