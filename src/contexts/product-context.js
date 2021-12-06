import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext()

const ProductContextProvider = (props) => {
    const storageProducts = JSON.parse(localStorage.getItem('products'))

    const [products, setProducts] = useState([])

    useEffect(() => {
        if(storageProducts) setProducts(storageProducts)
    }, [])

    const addProduct = (product) => {
        setProducts([...products, product])
    }

    const removeProduct = (code) => {
        setProducts(products.filter(product => product.code !== code))
    }

    return (
        <ProductContext.Provider value={{products, addProduct, removeProduct}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export { ProductContextProvider }