//! Getting Array From
const forgotPassUsers = JSON.parse(localStorage.getItem("users")) === null ? [] : JSON.parse(localStorage.getItem("users"));

const emails = forgotPassUsers.map((el) => el.email);
const userNames = forgotPassUsers.map((el) => el.userName);

const forgotPassElements ={
  form: document.querySelector('form'),
  email: document.querySelector('#email'),
  userName: document.querySelector('#userName'),
  unRes: document.querySelector('.unRes'),
  emailRes: document.querySelector('.emailRes')
}

const checkAvailabilty = () =>{
  if (emails.includes(forgotPassElements.email.value)) {
    const index = emails.indexOf(forgotPassElements.email.value);
    localStorage.setItem('resetPassIndex', index)
    return checkUsername(forgotPassElements.userName.value,index,userNames);
  }
  else{
    forgotPassElements.emailRes.innerHTML = `Email not registered <a href="../SignUp/index.html">Signup Now</a>`;
    return false
  }
}

const checkUsername = (input, i, array)=>{
  if(input !== array[i] ){
    forgotPassElements.unRes.innerHTML = 'Incorrect Username'
    return false
  }
  return true
}