

const allProductsUrl = 'https://course-api.com/javascript-store-products'

// temporary single product
const singleProductUrl =
  'https://course-api.com/javascript-store-single-product'

const getElement = (selection) => {
  const element = document.querySelector(selection)
  if (element) return element
  throw new Error(`Please check "${selection}" selector, no such element exist`)
}

const formatPrice = (price) => {
  const formatedPrice = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
    .format((price / 100).toFixed(2))
  return formatedPrice
}

const getStorageItem = (item) => {
  let storage = localStorage.getItem(item)

  if (storage) {
    storage = JSON.parse(localStorage.getItem(item))

  } else {
    storage = []
  }

  return storage
}

const setStorageItem = (item, value) => {
  localStorage.setItem(item, JSON.stringify(value))
}

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
}
