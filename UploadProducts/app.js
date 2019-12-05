
// localStorage.setItem('abc', htmlMarkup)
const inputs = Array.from(document.querySelectorAll('textarea,input'))
inputs.pop()
let imageSrc, htmlMarkup;
let markups = JSON.parse(localStorage.getItem('productCard')) || []
const uploadFile = document.querySelector('.uploadFile');
inputs.forEach(el=> el.addEventListener('change', ()=>{
  if (uploadFile.files && uploadFile.files[0]) {  // $('img')[0]
      imageSrc = URL.createObjectURL(uploadFile.files[0]);
  }
  let title = document.getElementById('title')
  let des = document.getElementById('des')
  if(title){
    title = title.value
  }else{
    title = ''
  }
  if(des){
    des = des.value
  }else{
    des = ''
  }
  htmlMarkup = `
  <div class="col l3 m4 s6 mouse">
    <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img style="width: 100%;" src="${imageSrc}" alt="${title}" id="img1"/>
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">${title}<i class="material-icons right">more_vert</i></span>
        <p><a href="../ProductInfo/index.html">View Details</a></p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4"
          >${title}<i class="material-icons right">close</i></span
        >
        <p>
          ${des}
        </p>
      </div>
    </div>
  </div>`;
  document.querySelector('.abc').innerHTML = htmlMarkup;
}))
document.querySelector('form').addEventListener('submit', ()=>{
  markups.push(htmlMarkup)
  localStorage.setItem('productCard', JSON.stringify(markups))
})