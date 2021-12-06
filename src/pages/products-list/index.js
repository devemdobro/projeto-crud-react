import { Table } from '../../components/table'
import { PageHeader } from '../../components/page-header'
import { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../contexts/product-context'


const ProductsList = () => {
    const context = useContext(ProductContext)
console.log(context)
    //const [products, setProduct] = useState([])

    // useEffect(() => {
    //     let products = localStorage.getItem('products')
    //     if(products){
    //         products = JSON.parse(products)
    //         setProduct([...products])
    //     }
    // }, [])
    

    return (
        <>
            <PageHeader section="list">Produto</PageHeader>
            <Table list={context.products} />
        </>
    )
}

export { ProductsList }