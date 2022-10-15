import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const form = getElement(".price-form")
const input = getElement(".price-filter")
const paragrap = getElement(".price-value")
const container = getElement(".products-container")
const search = getElement(".search-input")

const setupPrice = (store) => {

    let maxValue = store.map(oneItem => oneItem.price)
    maxValue = Math.max(...maxValue)
    maxValue = Math.ceil(maxValue / 100)
    input.min = 0
    input.max = maxValue
    input.value = maxValue

    paragrap.textContent = `Price is ${maxValue} $`

    form.addEventListener("input", e => {
        search.value = ""

        const value = parseInt(input.value) 
        paragrap.textContent = `Price is ${value} $`

        const neco = store.filter (oneItem => {
            const {price} = oneItem
            const elko = price / 100

            if (elko < value) {
                return oneItem
            }
        })

        display(neco, container)

        if (neco.length < 1) {
            container.innerHTML = `<h3 class="filter-error">Not found items!</h3>`
        }


    })

};

export default setupPrice;
