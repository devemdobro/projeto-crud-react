import { Table } from '../../components/table'
import { PageHeader } from '../../components/page-header'
import { useContext } from 'react'
import { ProductContext } from '../../contexts/product-context'


const ProductsList = () => {
    const context = useContext(ProductContext)
    
    return (
        <>
            <PageHeader section="list">Produto</PageHeader>
            <Table list={context.products} />
        </>
    )
}

export { ProductsList }