const products = require('../../mock/products.json');
const stores = require('../../mock/stores.json');
const cities = require('../../mock/cities.json');

// 1. get product by name
const getProductByName = (name, cb) => {
    setTimeout(() => {
        const result = products.find(product => product.name.toLocaleLowerCase() === name.toLocaleLowerCase());
        if (result) {
            cb({ data: result })
        } else {
            cb({ error: `product '${name}' not exist in the db` })
        }
    }, 500)
}

// 2. get store by id
const getStoreById = (id, cb) => {
    setTimeout(() => {
        const store = stores.find(store => store.id === id);
        if (store) {
            cb({ data: store })
        } else {
            cb({ error: `store with id = '${id}' not exist in the db` })
        }
    }, 500)
}

// 3. get city by name
const getCityByName = (name, cb) => {
    setTimeout(() => {
        const city = cities.find(city => city.name.toLocaleLowerCase() === name.toLocaleLowerCase());
        if (city) {
            cb({ data: city })
        } else {
            cb({ error: `city '${name}' not exist in the db` })
        }
    }, 500)
}

// 4. get city by product name
const getCityByProductName = (name, cb) => {
    getProductByName(name, (product) => {
        if (!product.error) {
            getStoreById(product.data.store_id, (store) => {
                if (!store.error) {
                    getCityByName(store.data.city, cb);
                } else {
                    cb({ error: store.error })
                }
            })
        } else {
            cb({ error: product.error })
        }
    })
}

getCityByProductName("Coffee Star", (city) => {
    if (city.error) {
        console.log("ERROR: " + city.error)
    } else {
        console.log(city.data)
    }
})