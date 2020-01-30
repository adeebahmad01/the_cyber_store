const html = `<li class="collection-item avatar" id="%I%"><div class="div cancel"><button class="transparent delete btn grey-text">&rotimes;</button></div><img src="%IMAGE%" alt="" class="circle" /><span style="font-size: 1.8rem;" class="title">%TITLE%</span><p><span>%PRICE%</span><br /><span>%CATAGORY%</span></p><a href="../OrderInfo/index.html?id=%I%" class="orderBtn btn grey white-text waves-effect waves-block">Order</a><div class="secondary-content"><div class="div up"><button class="btn-small increase transparent grey-text">&bigtriangleup;</button></div><div class="q" contenteditable="true" id="%I%">%QUANTITY%</div><div class="div down"><button class="btn-small decrease transparent grey-text">&bigtriangledown;</button></div></div></li>`;
import header from '../utils/Header.js';
import footer from '../utils/Footer.js';
let modifiedHeader;
import products from '../utils/adminProducts.js';
let cart;
//! The newly added products by user
const users = JSON.parse(localStorage.getItem('users')) || [];
const userIndex = localStorage.getItem('userIndex');
let userProducts = JSON.parse(localStorage.getItem('userProducts')) || [];
const allProducts = userProducts ? [...userProducts,...products] : products;
const elements = {
  collection: document.querySelector('#product'),
  amount: document.querySelector('#amount')
}
const ids = allProducts.map(el=>el.id);
if(!userIndex){
  cart = JSON.parse(localStorage.getItem('cart')) || []
}else{
  cart = users[userIndex].cart || [];
}
const cartProducts = cart.map(el=>{
  if(ids.includes(el.productId)){
    const index = ids.indexOf(el.productId);
    allProducts[index].quantity = el.quantity;
    return allProducts[index];
  }
});
console.log(cartProducts)
const calculateTotal = (amount,price)=>{
  let prices = +price.split(`$`)[1];
  return prices * amount;
}
const renderHtml = (el,i) => {
  let newHtml = html.replace(/%IMAGE%/g , el.image);
  newHtml = newHtml.replace(/%TITLE%/g , el.title);
  newHtml = newHtml.replace(/%PRICE%/g , el.price);
  newHtml = newHtml.replace(/%CATAGORY%/g , el.catagory);
  newHtml = newHtml.replace(/%QUANTITY%/g , el.quantity);
  newHtml = newHtml.replace(/%I%/g , i);
  elements.collection.insertAdjacentHTML('afterbegin', newHtml);
};
cartProducts.forEach(renderHtml);

const jsRenderElements = {
  btnInc: document.querySelectorAll('.increase'),
  btnDec: document.querySelectorAll('.decrease'),
  quantity:document.querySelector('.q')
}
jsRenderElements.btnInc.forEach((el,i)=>{
  el.addEventListener('click',()=>{
    //! UI
    let q = document.querySelectorAll('.q')[i];
    const price = cartProducts[q.id].price
    let innerhtml;
    if(q.innerHTML === `-1`){
      innerhtml = `0`
    }else{
      innerhtml = Math.ceil(+q.innerHTML);
    }
    innerhtml++
    q.innerHTML = `${innerhtml}`
    cartProducts[q.id].quantity = innerhtml;
    cart[q.id].quantity = innerhtml;
    document.querySelector(`.price${q.id}`).innerHTML = `$ ${calculateTotal(innerhtml,price).toFixed(2)}`;
    localStorage.setItem('cart',JSON.stringify(cart))
  });
})
jsRenderElements.btnDec.forEach((el,i)=>{
  el.addEventListener('click',()=>{
    //! UI
    const q = document.querySelectorAll('.q')[i];
    const price = cartProducts[q.id].price
    let innerhtml;
    if(q.innerHTML === `-1`){
      innerhtml = `0`
    }else{
      innerhtml = Math.ceil(+q.innerHTML);
    }
    innerhtml--;
    if(innerhtml === 0){
      return;
    }
    q.innerHTML = `${innerhtml}`
    cartProducts[q.id].quantity = innerhtml;
    cart[q.id].quantity = innerhtml;
    document.querySelector(`.price${q.id}`).innerHTML = `$ ${calculateTotal(innerhtml,price).toFixed(2)}`;
    localStorage.setItem('cart',JSON.stringify(cart));
  })
})
cartProducts.forEach((el,i)=>{
  const abc = document.createElement('li');
  abc.classList.add('collection-item');
  abc.id = `item${i}`;
  abc.innerHTML = `<h4>Total: <span class="price${i}">${el.price}</span></h4>`
  abc.style.height = `${elements.collection.firstElementChild.offsetHeight}px`;
  elements.amount.insertAdjacentElement('afterbegin', abc);
})
cartProducts.forEach((el,i)=>{
  document.querySelector(`.price${i}`).innerHTML = `$${calculateTotal(el.quantity,el.price).toFixed(2)}`
})
document.querySelectorAll('.delete').forEach((el,i)=>{
  el.addEventListener('click', e=>{
    const item = e.target.parentNode.parentNode;
    cart.splice(+item.id,1);
    item.remove();
    localStorage.setItem('cart',JSON.stringify(cart));
    const priceArray = Array.from(elements.amount.children);
    const itemPrice = priceArray.find(el=>el.id === `item${item.id}`);
    itemPrice.remove()
  })
})
document.querySelectorAll('.q').forEach(el=>{
  el.addEventListener('keyup',(e)=>{
    const i = e.target.id
    document.querySelector(`.price${i}`).innerHTML = `$${calculateTotal(e.target.innerHTML, cartProducts[i].price).toFixed(2)}`;
  })
})


modifiedHeader = header.replace(/%NAME1%/g, `Home`);
modifiedHeader = modifiedHeader.replace(/%HREF1%/g, `../HomePage/index.html`);
modifiedHeader = modifiedHeader.replace(/%NAME2%/g, `Products`);
modifiedHeader = modifiedHeader.replace(/%HREF2%/g, `../AllProducts/index.html`);
modifiedHeader = modifiedHeader.replace(/%NAME3%/g, `My Products`);
modifiedHeader = modifiedHeader.replace(/%HREF3%/g, `../UserProducts/index.html`);
modifiedHeader = modifiedHeader.replace(/%NAME4%/g, `My Details`);
modifiedHeader = modifiedHeader.replace(/%HREF4%/g, `../UserInfo/index.html`);
modifiedHeader = modifiedHeader.replace(/%NAME5%/g, `Add Products`);
modifiedHeader = modifiedHeader.replace(/%HREF5%/g, `../UploadProducts/index.html`);
modifiedHeader = modifiedHeader.replace(/%NAME6%/, `Forgot Password`);
modifiedHeader = modifiedHeader.replace(/%HREF6%/, `../ForgotPassword/index.html`);
document.body.insertAdjacentHTML('afterbegin', modifiedHeader);
document.body.insertAdjacentHTML('beforeend', footer);


