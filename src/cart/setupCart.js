// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from '../utils.js';
import { openCart } from './toggleCart.js';
import { findProduct } from '../store.js';
import addToCartDOM from './addToCartDOM.js';
// set items

const basketNum = getElement(".cart-item-count")
const totalPrice = getElement(".cart-total")
const cartContainer = getElement(".cart-items")

let cart = getStorageItem("cart")

export const addToCart = (id) => {

  let product = cart.find( oneProduct => oneProduct.id === id)

  if (!product) {

    let newAmoun = findProduct(id)
    newAmoun = {...newAmoun, amount: 1}
    cart = [...cart, newAmoun]

    addToCartDOM(newAmoun)


  } else {

    const newValue = increaseElement(id)
    const elements = [...cartContainer.querySelectorAll(".cart-item-amount")]
    const newItem = elements.find(oneItem => oneItem.dataset.id === id)

    newItem.textContent = newValue

    console.log(newValue);

  }

  basketNumberDOM()
  totalPriceDOM()

  setStorageItem("cart", cart)
  openCart()


};


function basketNumberDOM () {
  const newAmount = cart.reduce( (total, item) => {
    return total += item.amount

  }, 0)

  basketNum.textContent = newAmount
}


function totalPriceDOM () {
  let newAmount = cart.reduce ( (total, item) => {
    return total += item.price * item.amount
  }, 0)

  totalPrice.textContent = formatPrice(newAmount)

}


function writeElement () {
  cart.forEach (oneItem => {
    addToCartDOM(oneItem)
  })
}

function removeElement (id) {
  cart = cart.filter( oneItem => oneItem.id !== id)
}


function increaseElement (id) {
  let newAmount

  cart = cart.map( oneItem => {

    if (oneItem.id === id) {
      newAmount = oneItem.amount + 1
      oneItem = {...oneItem, amount: newAmount}

    }
    return oneItem 
  })
    return newAmount
}

function decreaseElement (id) {
  let newAmount

  cart = cart.map (oneItem => {

    if (oneItem.id === id) {
      newAmount = oneItem.amount - 1
      oneItem = {...oneItem, amount: newAmount}
    }
    return oneItem
  })
    return newAmount
}




function setElementAction () {

  cartContainer.addEventListener("click", e => {

    const element = e.target
    const parent = e.target.parentElement
    const id = e.target.dataset.id
    const parentID = e.target.parentElement.dataset.id

    if (element.classList.contains("cart-item-remove-btn")) {
      removeElement(id)

      parent.parentElement.remove()
    }

    if (parent.classList.contains("cart-item-increase-btn")){
      const a = increaseElement(parentID)
      
      parent.nextElementSibling.textContent = a

    }

    if (parent.classList.contains("cart-item-decrease-btn")) {
      const b = decreaseElement(parentID)

      if ( b === 0) {
        removeElement(parentID)
        parent.parentElement.parentElement.remove()

      } else {
        parent.previousElementSibling.textContent = b

      }
    }
    totalPriceDOM()
    basketNumberDOM()
    setStorageItem("cart", cart)

  })

}

function init () {
  writeElement()
  totalPriceDOM()
  basketNumberDOM()
  setElementAction()
}

init()