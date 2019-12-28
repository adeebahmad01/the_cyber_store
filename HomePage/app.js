import html from '../utils/card.js'
let rowId = 0;
let rowIdHtml = 0;

const equalHeight = (parent)=>{
  setTimeout(()=> setTimeout(() => document.querySelectorAll(`${parent} .card-image`).forEach(el=> el.style.height = `${Math.max(...Array.from(document.querySelectorAll(`${parent} img`)).map(el=> el.offsetHeight))+20}px`), 50),200)
  setTimeout(()=>setTimeout(() => document.querySelectorAll(`${parent} .card-content`).forEach(el=> el.style.height = `${Math.max(...Array.from(document.querySelectorAll(`${parent} .card-content`)).map(el=> el.offsetHeight))}px`), 50),200)
}

const products = JSON.parse(localStorage.getItem("productIntro"));
const userProducts = JSON.parse(localStorage.getItem("userProducts"));
const users = JSON.parse(localStorage.getItem("users")) || []
const catagories = ['mouse',`keyboard`,`laptop`, 'cpu','headphone']
const allProducts = userProducts ? [...userProducts,...products] : products;
if(allProducts === products){
  allProducts.forEach((el,i)=> el.index = i)
}
const newProducts = allProducts.slice(0,10) 
const userIndex = localStorage.getItem("userIndex");
const elements = {
  catagoryRow: document.querySelector('.catagory'),
  catagoryName: document.querySelector('.catgoryName'),
  name: document.querySelector('.name'),
  email: document.querySelector('.email'),
  userName: document.querySelector('.user'),
  userId: document.querySelector('.userId'),
  infoContainer: document.querySelector('.nav-nav')
}
const catagoryIndex = Math.floor(Math.random()*catagories.length)
const catagoryProducts = products.filter(el=> el.catagory === catagories[catagoryIndex]);
elements.catagoryName.innerHTML = catagories[catagoryIndex].toUpperCase()
catagoryProducts.forEach(el => {
  let newHtml = html.replace(/%catagory%/g, el.catagory)
  newHtml = newHtml.replace(/%title%/g, el.title);
  newHtml = newHtml.replace(/%image%/g, el.image);
  newHtml = newHtml.replace(/%description%/g, el.description);
  newHtml = newHtml.replace(/%index%/g, el.index);
  elements.catagoryRow.insertAdjacentHTML("beforeend", newHtml);
});
if(userIndex){
  elements.name.innerHTML = `${users[userIndex].firstName} ${users[userIndex].lastName}`
  elements.email.innerHTML = users[userIndex].email
  elements.userName.innerHTML = users[userIndex].userName
  elements.userId.innerHTML = users[userIndex].id
}else{
  elements.infoContainer.innerHTML= `
  <div class="row">
    <div class="s12 center-align"><img src="../images/icons8-name-96.png" alt="Login" class="img" width="150px"></div>
  </div>
  <div class="row">
    <div class="col s6 center-align"><a href="../Login/index.html" class="btn white grey-text center">Login</a></div>
    <div class="col s6 center-align"><a href="../SignUp/index.html" class="btn white grey-text center">SignUp</a></div>
  </div>`
}
const createHtml = ()=>{
  const abc = document.createElement('div')
  abc.className = `row`
  abc.id = `row-${rowId}`;
  rowId++
  document.body.insertBefore( abc , document.body.lastElementChild)
}
createHtml()
for (let i = 0; i < newProducts.length; i++) {
  if(i%4 === 3) createHtml()
}
newProducts.forEach(el => {
  //! Adding html markup to UI !\\
  const a = el.index % 4
  let newHtml = html.replace(/%catagory%/g, el.catagory)
  newHtml = newHtml.replace(/%title%/g, el.title)
  newHtml = newHtml.replace(/%image%/g, el.image)
  newHtml = newHtml.replace(/%description%/g, el.description)
  newHtml = newHtml.replace(/%index%/g, el.index)
  let htmlElement =  document.getElementById(`row-${rowIdHtml}`);
  equalHeight(`#row-${rowIdHtml}`)
  a===3? rowIdHtml++:``
  htmlElement.insertAdjacentHTML("beforeend", newHtml);
});
equalHeight(`.catagory`)