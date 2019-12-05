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
  emailRes: document.querySelector('.emailRes')
}
const checkArray = () =>{
  if (emailArr.includes(loginElements.email.value)) {
    let index = emailArr.indexOf(loginElements.email.value);
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
  return true
}