const fs = require('fs');

const readJsonFile = (path) => {
    try {
        const data = fs.readFileSync(path);
        return JSON.parse(data);
    } catch (error) {
        throw new Error(error)
    }
}

// 1. get product by name
const getProductByName = (name) => {
    return new Promise((resolve, reject) => {
        try {
            const products = readJsonFile('../../mock/products.json');
            const product = products.find(product => product.name.toLowerCase() === name.toLowerCase());
            if (product) {
                resolve(product)
            } else {
                reject({ error: `product '${name}' not exist in the db` })
            }
        } catch (error) {
            reject({ error })
        }
    })
}

// 2. get store by id
const getStoreById = (id) => {
    return new Promise((resolve, reject) => {
        try {
            const stores = readJsonFile('../../mock/stores.json');
            const store = stores.find(store => store.id === id);
            if (store) {
                resolve(store)
            } else {
                reject({ error: `store with id = '${id}' not exist in the db` })
            }
        } catch (error) {
            reject({ error })
        }
    })
}

// 3. get city by name
const getCityByName = (name) => {
    return new Promise((resolve, reject) => {
        try {
            const cities = readJsonFile('../../mock/cities.json');
            const city = cities.find(city => city.name.toLowerCase() === name.toLowerCase());
            if (city) {
                resolve(city)
            } else {
                reject({ error: `city '${name}' not exist in the db` })
            }
        } catch (error) {
            reject({ error })
        }
    })
}


// 4. get city by product name
const getCityByProductName = (name) => {
    return new Promise((resolve, reject) => {
        getProductByName(name)
            .then(product => getStoreById(product.store_id))
            .then(store => getCityByName(store.city))
            .then(city => resolve(city))
            .catch(error => reject(error))
    })
}

getCityByProductName("Tea Ahmad")
    .then(city => console.log({ city }))
    .catch(error => console.log({ error }))

