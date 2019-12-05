const allProducts = document.querySelectorAll(".col");
const mouses = document.querySelectorAll(".mouse");
const keyboards = document.querySelectorAll(".keyboard");
const laptops = document.querySelectorAll(".laptop");
const headphones = document.querySelectorAll(".headphone");
const cpus = document.querySelectorAll(".cpu");
M.AutoInit();
const mouseBtn = document.querySelector(".mouse-btn");
const keyboardBtn = document.querySelector(".keyboard-btn");
const handsetBtn = document.querySelector(".handset-btn");
const cpuBtn = document.querySelector(".cpu-btn");
const laptopBtn = document.querySelector(".laptop-btn");
const productName = document.querySelector(".prod");
const productsArray = JSON.parse(localStorage.getItem('productCard'));
productsArray.forEach(el=> document.querySelector('.row').insertAdjacentHTML('afterbegin',el))
mouseBtn.addEventListener("click", () => {
  allProducts.forEach(el => {
    el.classList.add("fade");
    setTimeout(() => {
      el.classList.add("hidden");
    }, 500);
  });
  productName.innerHTML = `Mouses`;
  mouses.forEach(mouse => {
    setTimeout(() => {
      mouse.classList.remove("hidden");
      mouse.classList.remove("fade");
    }, 600);
    mouse.classList.add("block");
  });
});
keyboardBtn.addEventListener("click", () => {
  allProducts.forEach(el => {
    el.classList.add("fade");
    setTimeout(() => {
      el.classList.add("hidden");
    }, 500);
  });
  productName.innerHTML = `Keyboards`;
  keyboards.forEach(keyboard => {
    setTimeout(() => {
      keyboard.classList.remove("hidden");
      keyboard.classList.remove("fade");
    }, 600);
    keyboard.classList.add("block");
  });
});
laptopBtn.addEventListener("click", () => {
  allProducts.forEach(el => {
    el.classList.add("fade");
    setTimeout(() => {
      el.classList.add("hidden");
    }, 500);
  });
  productName.innerHTML = `Laptops`;
  laptops.forEach(laptop => {
    setTimeout(() => {
      laptop.classList.remove("hidden");
      laptop.classList.remove("fade");
    }, 600);
    laptop.classList.add("block");
  });
});
cpuBtn.addEventListener("click", () => {
  allProducts.forEach(el => {
    el.classList.add("fade");
    setTimeout(() => {
      el.classList.add("hidden");
    }, 500);
  });
  productName.innerHTML = `CPU`;
  cpus.forEach(cpu => {
    setTimeout(() => {
      cpu.classList.remove("hidden");
      cpu.classList.remove("fade");
    }, 600);
    cpu.classList.add("block");
  });
});
handsetBtn.addEventListener("click", () => {
  allProducts.forEach(el => {
    el.classList.add("fade");
    setTimeout(() => {
      el.classList.add("hidden");
    }, 500);
  });
  productName.innerHTML = `Headphones & Handsets`;
  headphones.forEach(cpu => {
    setTimeout(() => {
      cpu.classList.remove("hidden");
      cpu.classList.remove("fade");
    }, 600);
    cpu.classList.add("block");
  });
});

