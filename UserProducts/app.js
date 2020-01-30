import html from '../utils/card.js';
import header from '../utils/Header.js';
import footer from '../utils/Footer.js';
let modifiedHeader;
let rowId = 0;
let rowIdHtml = 0;
import products from '../utils/adminProducts.js';
const userProducts = JSON.parse(localStorage.getItem("userProducts"));
const allProducts = userProducts ? [...userProducts,...products] : products;
const userIndex = localStorage.getItem("userIndex");
if (userIndex !== null) {
  const myProducts = allProducts.filter(el => el.userIndex === userIndex);
  if (myProducts.length === 0) {
    document.body.innerHTML = `<h1>Please Add Products</h1><a href="../UploadProducts/index.html">Add Products</a>`;
  }
  const createHtml = ()=>{
    const abc = document.createElement('div')
    abc.className = `row`
    abc.id = `row-${rowId}`;
    rowId++;
    document.body.insertBefore( abc , document.body.lastElementChild);
  }
  createHtml()
  for (let i = 0; i < myProducts.length; i++) {
    if(i%4 === 3) createHtml()
  }
  myProducts.forEach((el,i) => {
    let newHtml = html.replace(/%catagory%/g, el.catagory);
    newHtml = newHtml.replace(/%title%/g, el.title);
    newHtml = newHtml.replace(/%image%/g, el.image);
    newHtml = newHtml.replace(/%price%/g, el.price)
    newHtml = newHtml.replace(/%description%/g, el.description);
    newHtml = newHtml.replace(/%index%/g, el.index);
    newHtml = newHtml.replace('<button class="btn-floating halfway-fab cart waves-effect waves-light red"><i class="material-icons">add</i></button>',``)
    let htmlElement =  document.getElementById(`row-${rowIdHtml}`);
    if(i%4 === 3){
      rowIdHtml++
    }
    htmlElement.insertAdjacentHTML("beforeend", newHtml);
    setTimeout(()=> setTimeout(() => document.querySelectorAll(`.card-image`).forEach(el=> el.style.height = `${Math.max(...Array.from(document.querySelectorAll('img')).map(el=> el.offsetHeight))+20}px`), 50),200);
    setTimeout(()=>setTimeout(() => document.querySelectorAll(`.card-content`).forEach(el=> el.style.height = `${Math.max(...Array.from(document.querySelectorAll('.card-content')).map(el=> el.offsetHeight))}px`), 50),200);
  });
} else {
  document.body.innerHTML = `<h1>Please Login in or signup to see your products</h1><a href="../Login/index.html">Login Now</a>`;
}
modifiedHeader = header.replace(/%NAME1%/g, `Home`)
modifiedHeader = modifiedHeader.replace(/%HREF1%/g, `../HomePage/index.html`)
modifiedHeader = modifiedHeader.replace(/%NAME2%/g, `My Cart`)
modifiedHeader = modifiedHeader.replace(/%HREF2%/g, `../Cart/index.html`)
modifiedHeader = modifiedHeader.replace(/%NAME3%/g, `Products`)
modifiedHeader = modifiedHeader.replace(/%HREF3%/g, `../AllProducts/index.html`)
modifiedHeader = modifiedHeader.replace(/%NAME4%/g, `My Details`)
modifiedHeader = modifiedHeader.replace(/%HREF4%/g, `../UserInfo/index.html`)
modifiedHeader = modifiedHeader.replace(/%NAME5%/g, `Login`)
modifiedHeader = modifiedHeader.replace(/%HREF5%/g, `../Login/index.html`)
modifiedHeader = modifiedHeader.replace(/%NAME6%/, `Forgot Password`)
modifiedHeader = modifiedHeader.replace(/%HREF6%/, `../ForgotPassword/index.html`)
document.body.insertAdjacentHTML('afterbegin', modifiedHeader)
document.body.insertAdjacentHTML('beforeend', footer)