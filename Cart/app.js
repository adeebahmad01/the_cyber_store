const html = `<li class="collection-item avatar"><img src="%IMAGE%" alt="" class="circle" /><span style="font-size: 1.8rem;" class="title">%TITLE%</span><p><span>%PRICE%</span><br><span>%CATAGORY%</span></p><div class="secondary-content"><div class="div up"><button class="btn-small increase transparent grey-text">&bigtriangleup;</button></div><div class="q" id="%I%">%QUANTITY%</div><div class="div down"><button class="btn-small decrease transparent grey-text">&bigtriangledown;</button></div></div></li>`;
const products = JSON.parse(localStorage.getItem('productIntro')) || [];
const cart = JSON.parse(localStorage.getItem('cart')) || [];
//! The newly added products by user
const users = JSON.parse(localStorage.getItem('users')) || []
const userIndex = JSON.parse(localStorage.getItem('userIndex'));
let userProducts = JSON.parse(localStorage.getItem('userProducts')) || [];
const allProducts = userProducts ? [...userProducts,...products] : products;
const elements = {
  collection: document.querySelector('.collection')
}
const ids = allProducts.map(el=>el.id)
let rowId = 0;
let rowIdHtml = 0;
const cartProducts = cart.map(el=>{
  if(ids.includes(el.productId)){
    const index = ids.indexOf(el.productId);
    allProducts[index].quantity = el.quantity
    return allProducts[index]
  }
});

const calculateTotal = (amount,price)=>{
  let prices = +price.split(`$`)[1];
  return prices * amount
}

const renderHtml = (el,i) => {
  let newHtml = html.replace(/%IMAGE%/g , el.image)
  newHtml = newHtml.replace(/%TITLE%/g , el.title)
  newHtml = newHtml.replace(/%PRICE%/g , el.price)
  newHtml = newHtml.replace(/%CATAGORY%/g , el.catagory)
  newHtml = newHtml.replace(/%QUANTITY%/g , el.quantity)
  newHtml = newHtml.replace(/%I%/g , i)
  elements.collection.insertAdjacentHTML('afterbegin', newHtml)
};
const collection = document.querySelector('.collection');
cartProducts.forEach(renderHtml)

const jsRenderElements = {
  btnInc: document.querySelectorAll('.increase'),
  btnDec: document.querySelectorAll('.decrease'),
  quantity:document.querySelector('.q')
}
jsRenderElements.btnInc.forEach((el)=>{
  el.addEventListener('click',(e)=>{
    //! UI
    let q = e.target.parentNode.nextElementSibling;
    const price = e.target.parentNode.parentNode.previousElementSibling.firstElementChild.innerHTML
    let innerhtml = +q.innerHTML;
    innerhtml++
    q.innerHTML = `${innerhtml}`
    cartProducts[q.id].quantity = innerhtml;
    cart[q.id].quantity = innerhtml;
    document.querySelector(`.price${q.id}`).innerHTML = `$`+ calculateTotal(innerhtml,price).toFixed(2)
  })
})
jsRenderElements.btnDec.forEach(el=>{
  el.addEventListener('click',(e)=>{
    //! UI
    const q = e.target.parentNode.previousElementSibling;
    const price = e.target.parentNode.parentNode.previousElementSibling.firstElementChild.innerHTML
    let innerhtml = +q.innerHTML;
    innerhtml--;
    if(innerhtml === 0){
      return;
    }
    q.innerHTML = `${innerhtml}`
    cartProducts[q.id].quantity = innerhtml;
    cart[q.id].quantity = innerhtml;
    document.querySelector(`.price${q.id}`).innerHTML = `$`+ calculateTotal(innerhtml,price).toFixed(2)
  })
})
const createListItems = (i)=>{
  const abc = document.createElement('li');
  abc.classList.add('collection-item');
  abc.id = `item${i}`;
  abc.innerHTML = `<h4>Total: <span class="price${i}">${cartProducts[i].price}</span></h4>`
  abc.style.height = `${zero.firstElementChild.offsetHeight}px`;
  one.insertAdjacentElement('afterbegin', abc)
}
for (let i = 0; i < cart.length; i++) {
  createListItems(i)
}

cartProducts.forEach((el,i)=>{
  document.querySelector(`.price${i}`).innerHTML = `$${calculateTotal(el.quantity,el.price).toFixed(2)}`
})