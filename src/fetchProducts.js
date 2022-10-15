import { allProductsUrl } from './utils.js';

const fetchProducts = async () => {
    try {
        const resp = await fetch(allProductsUrl)
        const data = await resp.json()
        return data
        
    } catch (error) {

        throw new Error ("ERROR!!!!!")
    }
};

export default fetchProducts;
