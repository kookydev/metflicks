const infoId = document.getElementById("info")
const cancel = document.getElementById("info-header-cancel");
const devices = document.getElementById("info-header-devices");
const price = document.getElementById("info-header-price");

const scrollTop = () => {
  infoId.scrollIntoView(true);
}

cancel.addEventListener('click', () => {
  scrollTop();
  cancel.classList.add("active");
  devices.classList.remove("active");
  price.classList.remove("active");

});

devices.addEventListener('click', () => {
  scrollTop();
  cancel.classList.remove("active");
  devices.classList.add("active");
  price.classList.remove("active");

});

price.addEventListener('click', () => {
  scrollTop();
  cancel.classList.remove("active");
  devices.classList.remove("active");
  price.classList.add("active");

});


  
