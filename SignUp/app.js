//! Getting Array From
const signupUsers =
  JSON.parse(localStorage.getItem("users")) === null
    ? []
    : JSON.parse(localStorage.getItem("users"));
//? Selecting Elements Of SignUp Page
let emails = signupUsers.map(el => el.email);
let userNames = signupUsers.map(el => el.userName);
const RestrictionPg = ["u", "e", "p", "cp"];
const signupElements = {
  email: document.querySelector("#email"),
  userName: document.querySelector("#userName"),
  password: document.querySelector("#password"),
  passwordConfirm: document.querySelector("#passConfirm"),
  form: document.querySelector(".form"),
  allInputs: Array.from(
    document.querySelectorAll(
      'input[type="text"],' + 'input[type="email"],' + 'input[type="password"]'
    )
  ),
  resPg: RestrictionPg.map(el => document.querySelector("." + el + "Res"))
};
class User {
  constructor(fName, lName, userName, email, password, address, city, country) {
    this.firstName = fName;
    this.lastName = lName;
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.address = address;
    this.city = city;
    this.country = country;
    this.dateReg = new Date();
    this.id = Math.random()
      .toString(36)
      .substr(2, 9);
  }
}

const signupFunctions = {
  checkValid: (input, arr, name, index,el) => {
    if (arr.includes(input)) {
      signupElements.resPg[index].style.opacity = 1;
      signupElements.resPg[index].innerHTML = `${name} has already Taken`;
      el.focus()
      return arr.includes(input);

    }
    signupElements.resPg[index].innerHTML = ``;
    return arr.includes(input);
  },
  passConfirmation: (pass, cnfmPass) => {
    if (pass === cnfmPass) {
      signupElements.resPg[3].style.opacity = 0;
      return true;
    }
    signupElements.passwordConfirm.focus();
    signupElements.resPg[3].style.opacity = 1;
    signupElements.resPg[3].innerHTML = `Password didn't Match`;
    return false;
  },
  checkPassword: inputtxt => {
    var passw = /^[A-Za-z]\w{7,14}$/;
    if (inputtxt.match(passw)) {
      signupElements.resPg[2].style.opacity = 0;
      return true;
    } else {
      signupElements.password.focus();
      signupElements.resPg[2].style.opacity = 1;
      signupElements.resPg[2].innerHTML =
        "Password must contain 7 to 16 characters with characters, numbers, underscore and first character must be a letter.";
      return false;
    }
  },
  userAdd: () => {
    //* Getting Value of All inputs
    const values = signupElements.allInputs.map(el => el.value);
    if (values.indexOf("") !== -1) return; //? Stop if there is no input value
    const [
      fName,lName,
      userName,email,
      password,passConfirm,
      address,city,
      country] = values;
      emails = signupUsers.map(el => el.email);
      userNames = signupUsers.map(el => el.userName);

    if (
      signupFunctions.checkPassword(password) , //? Stop if Password is weak
      signupFunctions.passConfirmation(password, passConfirm) , //* Stop if passwords are not same
      !signupFunctions.checkValid(email, emails, "Email", 1,signupElements.email) ,
      !signupFunctions.checkValid(userName, userNames, "user name", 0, signupElements.userName)
    ) {
      console.log(signupFunctions.checkPassword(password),
      signupFunctions.passConfirmation(password, passConfirm),
      signupFunctions.checkValid(email, emails, "Email", 1, signupElements.email),
      signupFunctions.checkValid(userName, userNames, "user name", 0, signupElements.userName))
      const user = new User(
        fName,lName,
        userName,email,
        password,address,
        city,country
      );
      signupUsers.push(user);
      localStorage.setItem("users", JSON.stringify(signupUsers));
      return true
    }
    return false
  }
};
// signupElements.form.addEventListener("submit", signupFunctions.userAdd);
signupElements.email.addEventListener("blur", e => {
  signupFunctions.checkValid(e.target.value, emails, `Email Address`, 1,signupElements.email);
});
signupElements.password.addEventListener("blur", e =>
  signupFunctions.checkPassword(e.target.value)
);
signupElements.userName.addEventListener("blur", e =>
  signupFunctions.checkValid(e.target.value, userNames, `User Name`, 0,signupElements.userName)
);
signupElements.passwordConfirm.addEventListener("blur", e =>
  signupFunctions.passConfirmation(
    signupElements.password.value,
    e.target.value
  )
);
