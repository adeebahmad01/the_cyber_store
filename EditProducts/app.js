const productIndex = location.href.split('=')[1];
const products = JSON.parse(localStorage.getItem('productIntro'));
const product = products[productIndex];
const userIndex = localStorage.getItem('userIndex');
let values, imageSrc
const elements = {
  title: document.querySelector("#title"),
  features: document.querySelector("#features"),
  price: document.querySelector("#price"),
  description: document.querySelector("#description"),
  catagory: document.querySelector("#catagory"),
  uploadFile: document.querySelector(".uploadFile"),
  form: document.querySelector("form")
};
if(product.userIndex === userIndex){
  elements.title.value = product.title
  elements.features.value = product.feature
  elements.price.value = product.price
  elements.catagory.value = product.catagory
  elements.description.value = product.description
  const displayCard = () => {
    imageSrc = imageSrc? imageSrc : product.image
    values = {
      title: elements.title.value,
      features: elements.features.value,
      price: elements.price.value,
      catagory: elements.catagory.value.toLowerCase(),
      description: elements.description.value
    };
    htmlMarkup = `
      <div class="col l3 m4 s6 ${values.catagory}">
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img style="width: 100%;" src="${imageSrc}" alt="${values.title}" id="img1"/>
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">${values.title}<i class="material-icons right">more_vert</i></span>
            <p><a href="../ProductInfo/index.html">View Details</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4"
              >${values.title}<i class="material-icons right">close</i></span
            >
            <p>
              ${values.description}
            </p>
          </div>
        </div>
      </div>`;
    document.querySelector(".abc").innerHTML = htmlMarkup;
  };
  setTimeout(() => {
    displayCard()
  }, 100);
  
  const input = [
    elements.title,
    elements.catagory,
    elements.description,
    elements.price,
    elements.features
  ];
  input.forEach(el =>{
    el.focus()
    el.addEventListener("focus", displayCard)
    el.addEventListener("keyup", displayCard)
  });
  elements.uploadFile.addEventListener('change',displayCard)
  elements.uploadFile.addEventListener("change", ()=>{
    const imageData = elements.uploadFile.files[0]
    imageSrc = new FileReader()
    imageSrc.readAsDataURL(imageData)
    setTimeout(()=>document.getElementById('img1').src = imageSrc.result,100)
  });
  elements.form.addEventListener('submit',()=>{
    products[productIndex].title = values.title.value
  })
}else{
  document.body.innerHTML = `<h1>You Can only edit products that you created</h1>`
}
