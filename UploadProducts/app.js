M.AutoInit();
const userIndex = localStorage.getItem("userIndex");
let imageSrc, htmlMarkup;
if (userIndex !== null) {
  let markups = JSON.parse(localStorage.getItem("productCard")) || [];
  const uploadProductElements = {
    title: document.querySelector("#title"),
    features: document.querySelector("#features"),
    price: document.querySelector("#price"),
    description: document.querySelector("#description"),
    catagory: document.querySelector("#catagory"),
    uploadFile: document.querySelector(".uploadFile"),
    form: document.querySelector("form")
  };
  class Product {
    constructor(title, price, catagory, description, feature,src) {
      this.title = title;
      this.price = price;
      this.description = description;
      this.feature = feature;
      this.image = src;
      this.catagory = catagory;
      this.userIndex = userIndex;
      this.date = new Date()
    }
  }
  uploadProductElements.form.addEventListener("submit", e => {
    const values = {
      title: uploadProductElements.title.value,
      features: uploadProductElements.features.value,
      price: uploadProductElements.price.value,
      catagory: uploadProductElements.catagory.value.toLowerCase(),
      description: uploadProductElements.description.value
    };
    const element = new Product(
      values.title,
      values.price,
      values.catagory,
      values.description,
      values.features,
      imageSrc.result
    );
    markups.push(element);
    localStorage.setItem("productCard", JSON.stringify(markups));
  });
  const displayCard = () => {
    htmlMarkup = `
      <div class="col l3 m4 s6 ${uploadProductElements.catagory.value}">
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img style="width: 100%;" src="${imageSrc? imageSrc.result: ``}" alt="${uploadProductElements.title.value}" id="img1"/>
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">${uploadProductElements.title.value}<i class="material-icons right">more_vert</i></span>
            <p><a href="../ProductInfo/index.html">View Details</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4"
              >${uploadProductElements.title.value}<i class="material-icons right">close</i></span
            >
            <p>
              ${uploadProductElements.description.value}
            </p>
          </div>
        </div>
      </div>`;
    document.querySelector(".abc").innerHTML = htmlMarkup;
  };
  const input = [
    uploadProductElements.title,
    uploadProductElements.catagory,
    uploadProductElements.description,
    uploadProductElements.price,
    uploadProductElements.features
  ];
  input.forEach(el => el.addEventListener("keyup", displayCard));
  uploadProductElements.uploadFile.addEventListener('change',displayCard)
  uploadProductElements.uploadFile.addEventListener("change", ()=>{
    const imageData = uploadProductElements.uploadFile.files[0]
    imageSrc = new FileReader()
    imageSrc.readAsDataURL(imageData)
    setTimeout(()=>document.getElementById('img1').src = imageSrc.result,100)
  });
}else{
  document.body.innerHTML = `<h1>Please Login in or signup to add products</h1>`
}