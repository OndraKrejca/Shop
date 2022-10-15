// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
// specific
import { addToCart } from '../cart/setupCart.js';
import { singleProductUrl, getElement, formatPrice } from '../utils.js';

// selections
const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM = getElement('.single-product-company');
const priceDOM = getElement('.single-product-price');
const colorsDOM = getElement('.single-product-colors');
const descDOM = getElement('.single-product-desc');
const cartBtn = getElement('.addToCartBtn');

// cart product
let productID;

// show product when page loads

window.addEventListener("DOMContentLoaded", async function () {

    const url = window.location.search

    try {
        const resp = await fetch (`${singleProductUrl}${url}`)

        if (resp.status === 200 && resp.status <= 299) {
            const data = await resp.json()

            const {id, fields} = data
            productID = id

            const {name, company, description, price, colors, image} = fields
            const {url: img} = image[0].thumbnails.large

            pageTitleDOM.textContent = `Home / ${name}`
            document.title = name.toUpperCase()

            imgDOM.src = img
            titleDOM.textContent = name
            companyDOM.textContent = company
            descDOM.textContent = description
            priceDOM.textContent = formatPrice(price)

            colors.forEach (oneColor => {
                const span = document.createElement("span")
                span.classList.add("product-color")
                span.style.background = oneColor
                colorsDOM.appendChild(span)
            })
            
        } else {
            centerDOM.innerHTML = `
                <div>
                <h3 class="error"> Sorry items not found</h3>
                <a href="index.html" class="btn">Back home</a>
                </div>
            `
        }
        
    } catch (error) {
        throw new Error ("Chyba!!!!!!!!!!")
        
    }

    loading.style.display = "none"

})

cartBtn.addEventListener ("click", () => {
    addToCart(productID)
})