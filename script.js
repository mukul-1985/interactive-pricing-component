
function pageViewSliderUpdate(value) {
  const priceElement = document.getElementById('price')
  const pagesElement = document.getElementById('pages')
  const isYearlyBilling = document.getElementById('billingType').checked

  if(value < 50000) {
    priceElement.textContent = isYearlyBilling ? `${8 * .75}.00` : '$8.00'
  } else if(value < 100000) {
    priceElement.textContent = isYearlyBilling ? `${12 * .75}.00` : '$12.00'
  } else if(value < 500000) {
    priceElement.textContent = isYearlyBilling ? `${16 * .75}.00` : '$16.00'
  } else if(value < 1000000) {
    priceElement.textContent = isYearlyBilling ? `${24 * .75}.00` : '$24.00'
  } else {
    priceElement.textContent = isYearlyBilling ? `${36 * .75}.00` : '$36.00'
  }
  
  if ( value < 1000000) {
    pagesElement.textContent = `${value / 1000}K `
  } else {
    pagesElement.textContent = `1M `
  }

  document.getElementById('pageViewSlider').style.background = `linear-gradient(to right, var(--full-slider-bar) ${value / 10000}%,  var(--empty-slider-bar) ${value / 10000}%)`
}

function updatePrice() {
  pageViewSliderUpdate(document.getElementById('pageViewSlider').value)
}