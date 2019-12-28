const userIndex = +localStorage.getItem("userIndex");
const users = JSON.parse(localStorage.getItem("users"));
let values
if (localStorage.getItem("userIndex") !== null) {
  values = {
    email: document.getElementById("email"),
    username: document.getElementById("username"),
    fName: document.getElementById("fName"),
    lName: document.getElementById("lName"),
    adress: document.getElementById("adress"),
    city: document.getElementById("city"),
    country: document.getElementById("country"),
    resPg: document.querySelector(".pRes")
  };
  const Show = () => {
    values.email.value = users[userIndex].email;
    values.username.value = users[userIndex].userName;
    values.fName.value = users[userIndex].firstName;
    values.lName.value = users[userIndex].lastName;
    values.adress.value = users[userIndex].address;
    values.city.value = users[userIndex].city;
    values.country.value = users[userIndex].country;
  };
  Show();
} else {
  document.body.innerHTML = `<h1>Error You must be login to Enter user dashboard</h1>`;
}
const Edit = () => {
  const emails = users.map(el => el.email);
  emails.splice(userIndex, 1);
  const userNames = users.map(el => el.userName);
  userNames.splice(userIndex, 1);
  const userValid = checkValid(values.username.value,userNames,`User Name`,values.username);
  const emailValid = checkValid(values.email.value,emails,`Email`,values.email);
  if(!userValid && !emailValid){
    users[userIndex].email = values.email.value;
    users[userIndex].userName = values.username.value;
    users[userIndex].firstName = values.fName.value;
    users[userIndex].lastName = values.lName.value;
    users[userIndex].address = values.adress.value;
    users[userIndex].city = values.city.value;
    users[userIndex].country = values.country.value;
    localStorage.setItem("users", JSON.stringify(users));
    return true;
  }
  return false;
};
const checkValid = (input, arr, name, el) => {

  if (arr.includes(input)) {
    values.resPg.innerHTML = `${name} has already Taken`;
    let abc = el.getBoundingClientRect();
    values.resPg.style.transform = `translate(${abc.left}px, ${abc.top+window.scrollY}px)`;
    el.focus();
    return arr.includes(input);
  }
  return arr.includes(input);
};