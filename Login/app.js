
import header from '../utils/Header.js';
import footer from '../utils/Footer.js';
let modifiedHeader;
//! Getting Array From
localStorage.removeItem('userIndex')
const loginUsers =
  JSON.parse(localStorage.getItem("users")) === null
    ? []
    : JSON.parse(localStorage.getItem("users"));
const emailArr = loginUsers.map((el) => el.email);
const passwords = loginUsers.map((el) => el.password);
const loginElements ={
  form: document.querySelector('form'),
  email: document.querySelector('#email'),
  password: document.querySelector('#password'),
  passRes: document.querySelector('.passRes'),
  emailRes: document.querySelector('.emailRes'),
  btn: document.querySelector('.login')
}
const checkArray = (e) =>{
  e.preventDefault()
  if (emailArr.includes(loginElements.email.value)) {
    let index = emailArr.indexOf(loginElements.email.value);
    document.body.style.overflow = `hidden`
    localStorage.setItem('userIndex', index)
    return checkPassword(loginElements.password.value,index,passwords);
  }
  else{
    loginElements.emailRes.innerHTML = `Email not registered <a href="../SignUp/index.html">Signup Now</a>`;
    return false
  }
}

const checkPassword = (input, i, array)=>{
  if(input !== array[i] ){
    loginElements.passRes.innerHTML = 'Incorrect password'
    return false
  }
  window.location.href = "https://adeebahmad01.github.io/the_cyber_store"
  return true
}

loginElements.form.onsubmit= (e)=> checkArray(e)
modifiedHeader = header.replace(/%NAME1%/g, `Home`)
modifiedHeader = modifiedHeader.replace(/%HREF1%/g, `../HomePage/index.html`)
modifiedHeader = modifiedHeader.replace(/%NAME2%/g, `My Cart`)
modifiedHeader = modifiedHeader.replace(/%HREF2%/g, `../Cart/index.html`)
modifiedHeader = modifiedHeader.replace(/%NAME3%/g, `All Products`)
modifiedHeader = modifiedHeader.replace(/%HREF3%/g, `../AllProducts/index.html`)
modifiedHeader = modifiedHeader.replace(/%display4%/g, `none`)
modifiedHeader = modifiedHeader.replace(/%NAME5%/g, `Sign Up`)
modifiedHeader = modifiedHeader.replace(/%HREF5%/g, `../SignUp/index.html`)
modifiedHeader = modifiedHeader.replace(/%NAME6%/, `Forgot Password`)
modifiedHeader = modifiedHeader.replace(/%HREF6%/, `../ForgotPassword/index.html`)
document.body.insertAdjacentHTML('afterbegin', modifiedHeader)
document.body.insertAdjacentHTML('beforeend', footer);
M.AutoInit();
