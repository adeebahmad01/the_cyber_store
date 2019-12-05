//? Remove the user index if the user is on sign up page
localStorage.removeItem("userIndex");

//! Getting Array From
const signupUsers =
  JSON.parse(localStorage.getItem("users")) === null
    ? []
    : JSON.parse(localStorage.getItem("users"));

//* Making array from the emails of the localstorage
let emails = signupUsers.map(el => el.email);
let userNames = signupUsers.map(el => el.userName);

//? Selecting Elements Of SignUp Page
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

//? Creating new user from Constructor function
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

//! Functions used all over the page
const signupFunctions = {
  //? CHeck if the userName & Email is in the coressponding Array & Return False and voice versa
  checkValid: (input, arr, name, index, el) => {

    //* If array includes input the move inside the if statment
    if (arr.includes(input)) {

      //? Make the text visible with the User Name and Email input
      signupElements.resPg[index].style.opacity = 1;
      signupElements.resPg[index].innerHTML = `${name} has already Taken`;

      //* Again focusing the email || username input
      el.focus();

      //! Return true
      return arr.includes(input);

    }

    //? If email is not present simply return false && Making inner html of pg empty
    signupElements.resPg[index].innerHTML = ``;
    return arr.includes(input);
  },

  passConfirmation: (pass, cnfmPass) => {
    //* If both pass and confirm pass are equal then enter if statement
    if (pass === cnfmPass) {

      //? Making the text invisible && Return True
      signupElements.resPg[3].style.opacity = 0;
      return true;

    }
    //! Else focus the confirm pass input
    signupElements.passwordConfirm.focus();

    //*Setting the inner HTML of pg to Error  & Return False
    signupElements.resPg[3].style.opacity = 1;
    signupElements.resPg[3].innerHTML = `Password didn't Match`;
    return false;

  },
  checkPassword: inputtxt => {

    //? controlling the password length and characters within it
    var passw = /^[A-Za-z]\w{7,14}$/;

    //* If the pass satisfy the conditions then make text opacity 0 & return true
    if (inputtxt.match(passw)) {
      signupElements.resPg[2].style.opacity = 0;
      signupElements.resPg[2].innerHTML = ``;
      return true;
    }
    
    //! If password doesn't satisfy the conditions then focus the password input
    else {
      signupElements.password.focus();
      //* Change the inner HTML of paragrapth & Return false
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

    //? Getting the value of individual inputs through Values Array
    const [
      fName,
      lName,
      userName,
      email,
      password,
      passConfirm,
      address,
      city,
      country
    ] = values;

    //* Again Getting array from emails & userNames
    emails = signupUsers.map(el => el.email);
    userNames = signupUsers.map(el => el.userName);

    if (
      signupFunctions.checkPassword(password) && //? if Password is strong
      signupFunctions.passConfirmation(password, passConfirm) && //*  if passwords are same
      !signupFunctions.checkValid(email,emails,"Email",1,signupElements.email) && //! If email is not present in array 
      !signupFunctions.checkValid(userName,userNames,"user name",0,signupElements.userName) //? If userName is not present in array 
    ) {
      //* Setting constructor through props
      const user = new User(
        fName,
        lName,
        userName,
        email,
        password,
        address,
        city,
        country
      );

      //! Pushing user into  Array & Saving it into Local Storage then return true
      signupUsers.push(user);
      localStorage.setItem("users", JSON.stringify(signupUsers));
      return true;
    }
    //* Return False
    return false;
  }
};


signupElements.email.addEventListener("blur", e => {
  signupFunctions.checkValid(e.target.value,emails,`Email Address`,1,signupElements.email);
});
signupElements.password.addEventListener("blur", e =>
  signupFunctions.checkPassword(e.target.value)
);
signupElements.userName.addEventListener("blur", e =>
  signupFunctions.checkValid(e.target.value,userNames,`User Name`,0,signupElements.userName));
signupElements.passwordConfirm.addEventListener("blur", e =>
  signupFunctions.passConfirmation(signupElements.password.value,e.target.value)
);