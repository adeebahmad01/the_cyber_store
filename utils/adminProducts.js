const userProducts = localStorage.getItem('userProducts') || []
const products = [
  {
    title: `Neon Light Mouse`,
    catagory: `mouse`, 
    price: `$12.80` ,
    description: `<li>The wireless mode: Battery updates to 30-day play time in a single charge, no batteries are required</li><li>The Wired mode: you can also use it as a wired gaming mouse with the provided cable so the mouse will never power off.</li>`
  },
  {
    title: `Neon Mouses`,
    catagory: `mouse`, 
    price: `$9.99` ,
    description: `<li>Professional-Grade Wired/Wireless Gaming Mouse: Ultra-fast lag-free wired or wireless connection trusted by professional eSports gamers</li><li>Pivot Button design: Consistently fast, accurate, reliable click performance with a crisp, clean click feel</li>`
  },
  {
    title: `Super Gaming Mouse`,
    catagory: `mouse`, 
    price: `$19.99` ,
    description: `<li>Personalized RGB lighting: Customize lighting to match your style from up to 16.8 million colors</li><li>Customizable physical button layout: Ambidextrous design for left or right hand and any mouse grip style</li>`
  },
  {
    title: `Wireless Mouse`,
    catagory: `mouse`, 
    price: `$5.00` ,
    description: `<li>200 - 12,000 dpi: Zero smoothing or filtering for consistent responsiveness and control at any speed</li><li>PMW3366 Optical Gaming Sensor: Exceptional tracking accuracy, widely accepted by pro gamers as the best gaming mouse sensor</li>`
  },
  {
    title: `Wireless keyboard`,
    catagory: `keyboard`, 
    price: `$17.50` ,
    description: `<li>Connect using LIGHTSPEED or Bluetooth - Connect to LIGHTSPEED wireless for super fast 1ms report rate or connect to other devices with the push of a button using Bluetooth connectivity</li><li>Multihost Bluetooth functionality - Offers convenient pairing for up to eight devices</li>`
  },
  {
    title: `Video Keyboard`,
    catagory: `keyboard`, 
    price: `$24.99` ,
    description: `<li>Romer-G mechanical switches - Deliver quiet, precise mechanical performance and 70-million click life for incredible feel and durability</li><li>Six programmable G-keys - Put custom macro sequences and in-app commands at your fingertips. Customize G-key profiles individually for each app</li>`
  },
  {
    title: `iOS Keyboard`,
    catagory: `keyboard`, 
    price: `$29.99` ,
    description: `<li>Windows and Mac compatible - Works with most operation systems include Windows, Mac OS, Chrome OS, Android, and iOS for use with your existing devices</li><li>OS Independent</li>`
  },
  {
    title: `Neon Keyboard`,
    catagory: `keyboard`, 
    price: `$39.99` ,
    description: `<li>Arx Control App and smartphone dock: Instantly access in-game data on your smartphone or tablet without interrupting the game</li><li>9 programmable G-keys: Create custom game macros to execute complex commands with lightning speed and accuracy</li>`
  },
  {
    title: `Dell AZ081S`,
    catagory: `laptop`, 
    price: `$190.00` ,
    description: `<li>Imagine, design and create without boundaries. The powerful AMD Ryzen™ 7 processor features machine intelligence that anticipates your needs. Discover true responsiveness with 4 cores and 8 threads for ultimate performance.</li><li>Backed by 6GB GDDR6 dedicated video memory for an ultrafast, advanced GPU to fuel your games.</li>`
  },
  {
    title: `ASUS A9000`,
    catagory: `laptop`, 
    price: `$210.00` ,
    description: `<li>Thin and light design with DVD/CD drive omitted for improved portability. 4-cell lithium-ion battery.</li><li>Connects to your network or hotspots on all current Wi-Fi standards. Connect to a Wireless-AC router for speed nearly 3x faster than Wireless-N.</li>`
  },
  {
    title: `HP C9900K`,
    catagory: `laptop`, 
    price: `$279.99` ,
    description: `<li>Low-voltage platform. Powerful six-core, twelve-way processing provides blazing-fast performance when you need it most. The Intel Turbo Boost technology delivers dynamic power on demand.</li><li>Reams of high-bandwidth DDR4 RAM let you smoothly run your graphics-heavy PC games and video-editing applications, as well as numerous programs and browser tabs at the same time.</li>`
  },
  {
    title: `HP Folio 9470m`,
    catagory: `laptop`, 
    price: `$999.99` ,
    description: `<li>While offering less storage space than a hard drive, a flash-based SSD has no moving parts, resulting in faster start-up times and data access, no noise, and reduced heat production and power draw on the battery.</li><li>Connect to a Wireless-AC router for nearly 3x the speed, more capacity, and wider coverage than Wireless-N (150 Mbps). The Gigabit Ethernet LAN port lets you plug into wired networks.</li>`
  },
  {
    title: `Wireless Headphone`,
    catagory: `headphone`, 
    price: `$20.00` ,
    description: `<li>Available in bundled BLX, GLX-D, and PGX Digital wireless systems, the PGA31 features TA4F 4-pin connectors that make it a viable replacement for any Shure wireless headset system.</li><li>Permanently charged electret condenser cartridge delivers detailed, crisp vocals</li>`
  },
  {
    title: `Headphone`,
    catagory: `headphone`, 
    price: `$14.99` ,
    description: `<li>Flexible gooseneck design and discrete adjustment capabilities optimize microphone positioning for further source isolation</li><li>Available with BLX, GLX-D, and PGX Digital wireless systems, renowned for ease-of-use and reliable performance</li>`
  },
  {
    title: `Airpods`,
    catagory: `headphone`, 
    price: `$29.99` ,
    description: `<li>The wideband frequency range – spanning 12Hz to 22kHz – delivers deep bass, rich mid-levels, and soaring highs. Hear the detail in every track and stay in tune with all your music. </li><li>Listen in total comfort. These headphones have a self-adjusting headband and soft cushioned earcups that cover the whole ear.</li>`
  },
  {
    title: `Airdots`,
    catagory: `headphone`, 
    price: `$40.00` ,
    description: `<li>The closed-back, enfolding design wraps around the ear, helping to seal in music and keep distractions out. Acoustics are reflected back towards your ears, so you hear even the subtlest of sounds</li><li>The headphones’ swivelling earcup design enables easy storage when you’re not using them, and enhances portability when you’re travelling.</li>`
  },
  {
    title: `HP CTX_19JA0`,
    catagory: `cpu`, 
    price: `$80.98` ,
    description: `<li>3.60 GHz up to 5.00 GHz / 16 MB Cache</li><li>Compatible only with Motherboards based on Intel 300 Series Chipsets</li>`
  },
  {
    title: `CORE 2 DO`,
    catagory: `cpu`, 
    price: `$98.99` ,
    description: `<li>There are different models, configurations and tech kits available for many desktop and laptop computers. Many desktops, for example, are customizable and let you choose the technology you want inside of it.</li><li>Screen resolution has a big impact on performance. A 3840×2160 screen, for instance, is very demanding on a graphics card, even with a GTX 1080. If it’s an option, consider a 1920×1080 screen.</li>`
  },
  {
    title: `Gaming pc`,
    catagory: `cpu`, 
    price: `$299.99` ,
    description: `<li>This MSI Trident X Plus 9SE-062US desktop comes fitted with the latest 9th generation Coffee Lake octa-core Intel i9-9990K.</li><li>The chipset has a clocking speed of 3.6GHz. The RAM is a mammoth 32 GB (2 x 16 GB) DDR4. 512 GB PCleNVMe SSD plus 2TB 5400RPM HDD is the storage capacity.</li>`
  },
  {
    title: `CORE i9 9900K`,
    catagory: `cpu`, 
    price: `$1000.99`,
    description: `<li>At the heart of this machine is an Intel Corei7-8700K six-core processor offering a clocking speed of 3.7 GHz. With a Turbo boost, this can go up to 4.7 GHz.</li><li>The RAM is 16 GB DDR4 and memory is 1 TB HDD. There is an additional 240 GB SSD.</li>`
   }
];
//? Creating an array of ids
const ids = JSON.parse(localStorage.getItem('ids')) || [];
for (let i = 0; i <= products.length; i++) {
  //! IF length of ids is smaller than products length
  if (products.length - ids.length >= 1) {
    //* Add an id in the beggining of the array
    ids.unshift(
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  }
}
localStorage.setItem(`ids`,JSON.stringify(ids))
products.forEach((el, i) => {
  el.image = `../images/electronics${i + 1}.jpg`;
  el.feature = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente ab rerum, illum delectus consectetur libero error. Laudantium aperiam voluptate ipsa provident, deleniti porro minima, quod fugiat odit cupiditate libero odio?`;
  el.date = new Date(`july 7 2001`);
  el.id = ids[i];
  el.index = i + userProducts.length;
});
export default products;