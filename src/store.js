import { getStorageItem, setStorageItem } from './utils.js';

let store = getStorageItem("store");

const setupStore = (products) => {

    store = products.map(product => {

        const {id, fields: {company, colors, featured, image, name, price}} = product
        const {url: img} = image[0].thumbnails.large

        return {id, company, colors, featured, img, name, price}

    })

    setStorageItem("store", store)
};

const findProduct = (id) => {
    const newStore = store.find(oneItem => oneItem.id === id)
    return newStore
};
export { store, setupStore, findProduct };
