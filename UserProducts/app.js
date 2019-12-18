const products = JSON.parse(localStorage.getItem("productIntro"));
const userIndex = localStorage.getItem("userIndex");
if (userIndex !== null) {
  const parentEl = document.querySelector(".row");
  const myProducts = products.filter(el => el.userIndex === userIndex);
  if (myProducts.length === 0) {
    document.body.innerHTML = `<h1>Please Add Products</h1>`;
  }
  myProducts.forEach((el,i) => {
    // el.index = i;
    const html = `
      <div class="col l4 m4 s6 ${el.catagory}">
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img
              src="${el.image}"
              alt="${el.title}"
            />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">${el.title}<i class="material-icons right">more_vert</i></span>
            <p><a href="../ProductInfo/index.html?id=${el.index}">View More</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">${el.title}<i class="material-icons right">close</i></span>
            <ul>${el.description}</ul>
          </div>
        </div>
      </div>`;
    parentEl.insertAdjacentHTML("beforeend", html);
  });
  console.log(myProducts)
} else {
  document.body.innerHTML = `<h1>Please Login in or signup to see your products</h1>`;
}
