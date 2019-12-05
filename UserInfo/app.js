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
