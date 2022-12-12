function proiz() {
  let f = document.getElementById('p');
  f.addEventListener('input', function () { proiz(); });
  let s = document.getElementsByName("prodType");
  let select = s[0];
  let price = 0;
  let prices = getPrices();
  let priceIndex = parseInt(select.value) - 1;
  if (priceIndex >= 0) {
    price = prices.prodTypes[priceIndex];
  }
  let radioDiv = document.getElementById("radios");
  radioDiv.style.display = select.value == "2" ? "block" : "none";
  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function (radio) {
    if (radio.checked) {
      let optionPrice = prices.prodOptions[radio.value];
      if (optionPrice !== undefined) {
        price += optionPrice;
      }
    }
  });
  let checkDiv = document.getElementById("checkboxes");
  checkDiv.style.display = select.value == "3" ? "block" : "none";
  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      let propPrice = prices.prodProperties[checkbox.name];
      if (propPrice !== undefined) {
        price += propPrice;
      }
    }
  });
  let f2 = document.getElementById('p').value;
  s[0].addEventListener('change', function (event) {
    if (select.value === '1') {

      document.getElementById('prodPrice').innerHTML =
        'Цена: ' + prices.prodTypes[0] * f2 + ' рублей';
    }
    else if (select.value === '2') {
      document.getElementById('prodPrice').innerHTML =
        'Цена: ' + prices.prodTypes[1] * f2 + ' рублей.';
    }
    else if (select.value === '3') {
      document.getElementById('prodPrice').innerHTML =
        'Цена: ' + prices.prodTypes[2] * f2 + ' рублей.';
    }
  });
  let price_pr = document.getElementById('prodPrice');
  price_pr.innerHTML = 'Цена: ' + price * f2 + ' рублей.';
}
function getPrices() {
  return {
    prodTypes: [49000, 3000, 18000],
    prodOptions: {
      option2: 500,
      option3: 3999,
    },
    prodProperties: {
      prop1: 1500,
      prop2: 3000,
    },
  };
}
window.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
  let s = document.getElementsByName("prodType");
  let select = s[0];
  select.addEventListener("change", function (event) {
    proiz();
  });
  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function (radio) {
    radio.addEventListener("change", function (event) {
      proiz();
    });
  });
  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      proiz();
    });
  });
  proiz();
});
function cislo() {
  if (event.keyCode < 48 || event.keyCode > 57)
    event.returnValue = false;
}
