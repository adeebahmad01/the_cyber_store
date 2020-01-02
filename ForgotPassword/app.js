//! Getting Array From Local Storage
const forgotPassUsers = JSON.parse(localStorage.getItem("users")) === null ? [] : JSON.parse(localStorage.getItem("users"));
import header from '../utils/Header.js';
import footer from '../utils/Footer.js';
let modifiedHeader;
//? Removing existing resetPassIndex
localStorage.removeItem('resetPassIndex')

//* Making array of email and userName
const emails = forgotPassUsers.map((el) => el.email);
const userNames = forgotPassUsers.map((el) => el.userName);

/`Selecting All Elements of the page`/
const forgotPassElements ={
  form: document.querySelector('form'),
  email: document.querySelector('#email'),
  userName: document.querySelector('#userName'),
  unRes: document.querySelector('.unRes'),
  emailRes: document.querySelector('.emailRes')
}

//! Checking Weather if the email and username is present in Array
const checkAvailabilty = () =>{
  if (emails.includes(forgotPassElements.email.value)) {

    //? Taking index of the email
    const index = emails.indexOf(forgotPassElements.email.value);
    
    //* Saving index if userName and email are checked
    if(checkUsername(forgotPassElements.userName.value,index,userNames)){
      localStorage.setItem('resetPassIndex', index)
    }
    return checkUsername(forgotPassElements.userName.value,index,userNames);
  }
  else{
    /`If Email is not present then show a Error msg`/
    forgotPassElements.emailRes.innerHTML = `Email not registered <a href="../SignUp/index.html">Signup Now</a>`;
    return false
  }
}
forgotPassElements.form.onsubmit= ()=>checkAvailabilty()
const checkUsername = (input, i, array)=>{
  //! if input is not present in array the show error msg
  if(input !== array[i] ){
    forgotPassElements.unRes.innerHTML = 'Incorrect Username'
    return false
  }
  return true
}

modifiedHeader = header.replace(/%NAME1%/g, `Home`)
modifiedHeader = modifiedHeader.replace(/%HREF1%/g, `../HomePage/index.html`)
modifiedHeader = modifiedHeader.replace(/%NAME2%/g, `my details`)
modifiedHeader = modifiedHeader.replace(/%HREF2%/g, `../UserInfo/index.html`)
modifiedHeader = modifiedHeader.replace(/%display3%/g, `none`)
modifiedHeader = modifiedHeader.replace(/%NAME4%/g, `Login`)
modifiedHeader = modifiedHeader.replace(/%HREF4%/g, `../Login/index.html`)
modifiedHeader = modifiedHeader.replace(/%NAME5%/g, `Sign Up`)
modifiedHeader = modifiedHeader.replace(/%HREF5%/g, `../SignUp/index.html`)
modifiedHeader = modifiedHeader.replace(/%NAME6%/g, `All Products`)
modifiedHeader = modifiedHeader.replace(/%HREF6%/g, `../AllProducts/index.html`)

document.body.insertAdjacentHTML('afterbegin', modifiedHeader)
document.body.insertAdjacentHTML('beforeend', footer)