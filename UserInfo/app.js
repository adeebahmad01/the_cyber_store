const checkReferrer = ()=>{
  const href = location.href.split('/');
  href.pop()
  href.pop()
  href.push('LogIn')
  href.push('index.html')
  document.body.innerHTML = '<h1>Error You must be login to Enter user dashboard</h1>'
  setTimeout(()=> {
    location.replace(href.join('/')) 
  }, 5000)
}
import header from '../utils/Header.js';
import footer from '../utils/Footer.js';
let modifiedHeader;
if (localStorage.getItem("userIndex") !== null) {
  //! Getting Array From
  const loginUsers =
    JSON.parse(localStorage.getItem("users")) === null
      ? []
      : JSON.parse(localStorage.getItem("users"));
  const userIndex = +localStorage.getItem("userIndex");
  const items = {
    id: document.querySelector(".id"),
    email: document.querySelector(".email"),
    username: document.querySelector(".userName"),
    name: document.querySelector(".name"),
    address: document.querySelector(".address"),
    city: document.querySelector(".city"),
    country: document.querySelector(".country"),
    date: document.querySelector(".date")
  };
  items.id.innerHTML = loginUsers[userIndex].id;
  items.email.innerHTML = loginUsers[userIndex].email;
  items.username.innerHTML = loginUsers[userIndex].userName;
  items.name.innerHTML = `${loginUsers[userIndex].firstName} ${loginUsers[userIndex].lastName}`;
  items.address.innerHTML = loginUsers[userIndex].address;
  items.city.innerHTML = loginUsers[userIndex].city;
  items.country.innerHTML = loginUsers[userIndex].country;
  items.date.innerHTML = new Date(loginUsers[userIndex].dateReg).toDateString();
}
else{
  checkReferrer()
}

modifiedHeader = header.replace(/%NAME1%/g, `Home`)
modifiedHeader = modifiedHeader.replace(/%HREF1%/g, `../HomePage/index.html`)
modifiedHeader = modifiedHeader.replace(/%NAME2%/g, `My Cart`)
modifiedHeader = modifiedHeader.replace(/%HREF2%/g, `../Cart/index.html`)
modifiedHeader = modifiedHeader.replace(/%NAME3%/g, `My Products`)
modifiedHeader = modifiedHeader.replace(/%HREF3%/g, `../UserProducts/index.html`)
modifiedHeader = modifiedHeader.replace(/%NAME4%/g, `Edit Details`)
modifiedHeader = modifiedHeader.replace(/%HREF4%/g, `../UserEditProfile/index.html`)
modifiedHeader = modifiedHeader.replace(/%NAME5%/g, `All Products`)
modifiedHeader = modifiedHeader.replace(/%HREF5%/g, `../AllProducts/index.html`)
modifiedHeader = modifiedHeader.replace(/%NAME6%/g, `Forgot Password`)
modifiedHeader = modifiedHeader.replace(/%HREF6%/g, `../ForgotPassword/index.html`)

document.body.insertAdjacentHTML('afterbegin', modifiedHeader)
document.body.insertAdjacentHTML('beforeend', footer)