import { getElement } from '../utils.js';
import display from '../displayProducts.js';
import setupPrice from "../filters/price.js"

const setupSearch = (store) => {

const form = getElement(".input-form")
const input = getElement(".search-input")
const container = getElement(".products-container")


form.addEventListener("keyup", e => {

    const value = input.value

    if (value) {

        const element = store.filter (oneItem => {

            let {name} = oneItem
            name = name.toLowerCase()

            if (name.startsWith(value)) {
                return oneItem
            }

        })

        display (element, container, true)

        if (element.length < 1) {
            container.innerHTML = `<h4 class="filter-error">Something is no epty!</h4>`
        }

        
    } else {

        display (store, container, true)
    }
})






}

export default setupSearch
