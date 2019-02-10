const infoId = document.getElementById("info")
const cancel = document.getElementById("info-header-cancel");
const devices = document.getElementById("info-header-devices");
const price = document.getElementById("info-header-price");
const cancelBody = document.getElementById("info-body-cancel");
const devicesBody = document.getElementById("info-body-devices");
const priceBody = document.getElementById("info-body-price");

const scrollTop = () => {
  infoId.scrollIntoView(true);
}

cancel.addEventListener('click', () => {
  scrollTop();
  cancel.classList.add("active");
  cancelBody.style.display = "flex";
  devices.classList.remove("active");
  devicesBody.style.display = "none";
  price.classList.remove("active");
  priceBody.style.display = "none";
});

devices.addEventListener('click', () => {
  scrollTop();
  cancel.classList.remove("active");
  cancelBody.style.display = "none";
  devices.classList.add("active");
  devicesBody.style.display = "flex";
  price.classList.remove("active");
  priceBody.style.display = "none";
});

price.addEventListener('click', () => {
  scrollTop();
  cancel.classList.remove("active");
  cancelBody.style.display = "none";
  devices.classList.remove("active");
  devicesBody.style.display = "none";
  price.classList.add("active");
  priceBody.style.display = "flex";

});


  
