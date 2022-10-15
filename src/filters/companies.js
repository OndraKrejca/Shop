import { getElement } from '../utils.js';
import display from '../displayProducts.js';
import setupPrice from "../filters/price.js"

const setupCompanies = (store) => {

    const articleCompanies = getElement(".companies")
    const input = getElement(".search-input")
    

    const newStore = ["all", ... new Set (store.map(oneItem => oneItem.company))]

    articleCompanies.innerHTML = newStore.map (oneItem => {
        return `
        <button class="company-btn">${oneItem}</button>
        `
    }).join("")

    articleCompanies.addEventListener("click", (e) => {
        input.value = ""
        const el = e.target

        if (el.classList.contains("company-btn")) {
            let newAmount = []

            if (el.textContent === "all") {
                newAmount = [...store]
            } else {
                newAmount = store.filter (oneComp => {
                    return oneComp.company === el.textContent
                })
            }

            display(newAmount, getElement(".products-container"), true)
        }
    })

    
};

export default setupCompanies;
