//! The newly added products by user
let productsArray = JSON.parse(localStorage.getItem('productCard')) || [];
let rowId = 0;
let rowIdHtml = 0;
//? All elements of the page
const elements = {
  productName: document.querySelector(".prod"),
  parentEl:document.querySelector('.row'),
  list: document.querySelector('#slide-out')
}

//* Creating an array with All Available Products
const products = [{title: `Neon Light Mouse`, catagory: `mouse` , price:`12.80$`},
  {title: `Neon Mouses`, catagory: `mouse` , price:`9.99$`},
  {title: `Super Gaming Mouse`, catagory: `mouse` , price:`19.99$`},
  {title: `Wireless Mouse`, catagory: `mouse` , price:`5.00$`},
  {title: `Wireless keyboard`, catagory: `keyboard` , price:`17.50$`},
  {title: `Video Keyboard`, catagory: `keyboard` , price:`24.99$`},
  {title: `iOS Keyboard`, catagory: `keyboard` , price:`29.99$`},
  {title: `Neon Keyboard`, catagory: `keyboard` , price:`39.99$`},
  {title: `Dell AZ081S` , catagory:`laptop` , price:`190.00$`},
  {title: `ASUS A9000` , catagory:`laptop` , price:`210.00$`},
  {title: `HP C9900K` , catagory:`laptop` , price:`279.99$`},
  {title: `HP Folio 9470m` , catagory:`laptop` , price:`999.99$`},
  {title: `Wireless Headphone`, catagory: `headphone` , price:`20.00$`},
  {title: `Headphone`, catagory: `headphone` , price:`14.99$`},
  {title: `Airpods`, catagory: `headphone` , price:`29.99$`},
  {title: `Airdots`, catagory: `headphone` , price:`40.00$`},
  {title: `HP CTX_19JA0`, catagory: `cpu` , price:`80.98$`},
  {title: `CORE 2 DO`, catagory: `cpu` , price:`98.99$`},
  {title: `Gaming pc`, catagory: `cpu` , price:`299.99$`},
  {title: `CORE i9 9900K`, catagory: `cpu` , price:`1000.99$`}];

//? Descriptions of all products
const description = [`<li>The wireless mode: Battery updates to 30-day play time in a single charge, no batteries are required</li>
  <li>The Wired mode: you can also use it as a wired gaming mouse with the provided cable so the mouse will never power off.</li>`,
  `<li>Professional-Grade Wired/Wireless Gaming Mouse: Ultra-fast lag-free wired or wireless connection trusted by professional eSports gamers</li>
  <li>Pivot Button design: Consistently fast, accurate, reliable click performance with a crisp, clean click feel</li>`,
  `<li>Personalized RGB lighting: Customize lighting to match your style from up to 16.8 million colors</li>
  <li>Customizable physical button layout: Ambidextrous design for left or right hand and any mouse grip style</li>`,
  `<li>200 - 12,000 dpi: Zero smoothing or filtering for consistent responsiveness and control at any speed</li>
  <li>PMW3366 Optical Gaming Sensor: Exceptional tracking accuracy, widely accepted by pro gamers as the best gaming mouse sensor</li>`,
  `<li>Connect using LIGHTSPEED or Bluetooth - Connect to LIGHTSPEED wireless for super fast 1ms report rate or connect to other devices with the push of a button using Bluetooth connectivity</li>
  <li>Multihost Bluetooth functionality - Offers convenient pairing for up to eight devices</li>`,
  `<li>Romer-G mechanical switches - Deliver quiet, precise mechanical performance and 70-million click life for incredible feel and durability</li>
  <li>Six programmable G-keys - Put custom macro sequences and in-app commands at your fingertips. Customize G-key profiles individually for each app</li>`,
  `<li>Windows and Mac compatible - Works with most operation systems include Windows, Mac OS, Chrome OS, Android, and iOS for use with your existing devices</li>
  <li>OS Independent</li>`,
  `<li>Arx Control App and smartphone dock: Instantly access in-game data on your smartphone or tablet without interrupting the game</li>
  <li>9 programmable G-keys: Create custom game macros to execute complex commands with lightning speed and accuracy</li>`,
  `<li>Imagine, design and create without boundaries. The powerful AMD Ryzen™ 7 processor features machine intelligence that anticipates your needs. Discover true responsiveness with 4 cores and 8 threads for ultimate performance.</li>
  <li>Backed by 6GB GDDR6 dedicated video memory for an ultrafast, advanced GPU to fuel your games.</li>`,
  `<li>Thin and light design with DVD/CD drive omitted for improved portability. 4-cell lithium-ion battery.</li>
  <li>Connects to your network or hotspots on all current Wi-Fi standards. Connect to a Wireless-AC router for speed nearly 3x faster than Wireless-N.</li>`,
  `<li>Low-voltage platform. Powerful six-core, twelve-way processing provides blazing-fast performance when you need it most. The Intel Turbo Boost technology delivers dynamic power on demand.</li>
  <li>Reams of high-bandwidth DDR4 RAM let you smoothly run your graphics-heavy PC games and video-editing applications, as well as numerous programs and browser tabs at the same time.</li>`,
  `<li>While offering less storage space than a hard drive, a flash-based SSD has no moving parts, resulting in faster start-up times and data access, no noise, and reduced heat production and power draw on the battery.</li>
  <li>Connect to a Wireless-AC router for nearly 3x the speed, more capacity, and wider coverage than Wireless-N (150 Mbps). The Gigabit Ethernet LAN port lets you plug into wired networks.</li>`,
  `<li>Available in bundled BLX, GLX-D, and PGX Digital wireless systems, the PGA31 features TA4F 4-pin connectors that make it a viable replacement for any Shure wireless headset system.</li>
  <li>Permanently charged electret condenser cartridge delivers detailed, crisp vocals</li>`,
  `<li>Flexible gooseneck design and discrete adjustment capabilities optimize microphone positioning for further source isolation</li>
  <li>Available with BLX, GLX-D, and PGX Digital wireless systems, renowned for ease-of-use and reliable performance</li>`,
  `<li>The wideband frequency range – spanning 12Hz to 22kHz – delivers deep bass, rich mid-levels, and soaring highs. Hear the detail in every track and stay in tune with all your music. </li>
  <li>Listen in total comfort. These headphones have a self-adjusting headband and soft cushioned earcups that cover the whole ear.</li>`,
  `<li>The closed-back, enfolding design wraps around the ear, helping to seal in music and keep distractions out. Acoustics are reflected back towards your ears, so you hear even the subtlest of sounds</li>
  <li>The headphones’ swivelling earcup design enables easy storage when you’re not using them, and enhances portability when you’re travelling.</li>`,
  `<li>3.60 GHz up to 5.00 GHz / 16 MB Cache</li>
  <li>Compatible only with Motherboards based on Intel 300 Series Chipsets</li>`,
  `<li>There are different models, configurations and tech kits available for many desktop and laptop computers. Many desktops, for example, are customizable and let you choose the technology you want inside of it.</li>
  <li>Screen resolution has a big impact on performance. A 3840×2160 screen, for instance, is very demanding on a graphics card, even with a GTX 1080. If it’s an option, consider a 1920×1080 screen.</li>`,
  `<li>This MSI Trident X Plus 9SE-062US desktop comes fitted with the latest 9th generation Coffee Lake octa-core Intel i9-9990K.</li>
  <li>The chipset has a clocking speed of 3.6GHz. The RAM is a mammoth 32 GB (2 x 16 GB) DDR4. 512 GB PCleNVMe SSD plus 2TB 5400RPM HDD is the storage capacity.</li>`,
  `<li>At the heart of this machine is an Intel Corei7-8700K six-core processor offering a clocking speed of 3.7 GHz. With a Turbo boost, this can go up to 4.7 GHz.</li>
  <li>The RAM is 16 GB DDR4 and memory is 1 TB HDD. There is an additional 240 GB SSD.</li>`];

//! Setting the description Image source feature and date of the product
products.forEach((el, i) => {
  el.description = description[i];
  el.image = `../images/electronics${i + 1}.jpg`;
  el.feature = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente ab rerum, illum delectus consectetur libero error. Laudantium aperiam voluptate ipsa provident, deleniti porro minima, quod fugiat odit cupiditate libero odio?`;
  el.date = new Date(`july 7 2001`)
});
//* Adding The newly created product in the begginning of the array
productsArray.forEach(el=> products.unshift(el))
//? Creating an array of ids
const ids = JSON.parse(localStorage.getItem('productID')) || [];
for (let i = 0; i <= (products.length); i++) {
  //! IF length of ids is smaller than products length 
  if(products.length - ids.length >= 1){
    //* Add an id in the beggining of the array
    ids.unshift(Math.random().toString(36).substr(2, 9))
  }
}
const createHtml = ()=>{
  const abc = document.createElement('div')
  abc.className = `row`
  abc.id = `row-${rowId}`;
  rowId++
  document.body.insertBefore( abc , document.body.lastElementChild)
}
createHtml()
for (let i = 0; i < products.length; i++) {
  if(i%4 === 3) createHtml()
}
//? Saving the id in localstorage
localStorage.setItem('productID', JSON.stringify(ids))
products.forEach((el,i) => {
  //! Setting index of the element
  el.index = i;
  //* Setting id of the element
  el.id = ids[i]
  //? Making html Markup
  const html = `
  <div class="col l3 m4 s6 ${el.catagory}">
    <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img
          src="${el.image}"
          alt="${el.title}"
        />
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">${el.title}<i class="material-icons right">more_vert</i></span>
        <p><a class="link" href="../ProductInfo/index.html?id=${el.index}">View More</a></p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">${el.title}<i class="material-icons right">close</i></span>
        <ul>${el.description}</ul>
      </div>
    </div>
  </div>`;
  //! Adding html markup to UI !\\
  const a = el.index % 4
  console.log(a);
  
  let htmlElement =  document.getElementById(`row-${rowIdHtml}`);
  if(a === 3){
    rowIdHtml++
  }
  htmlElement.insertAdjacentHTML("beforeend", html);
 });
//* Save the products into local storage
localStorage.setItem('productIntro', JSON.stringify(products))
//* Initializing Materialize
M.AutoInit();