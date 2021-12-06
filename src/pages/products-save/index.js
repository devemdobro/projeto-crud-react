import { Form } from '../../components/form'
import { Link, useSearchParams } from 'react-router-dom'
import { PageHeader } from '../../components/page-header'
import styled from 'styled-components'

const ProductSave = () => {
    return (
        <>
            <PageHeader>Cadastro de produto</PageHeader>

            <Form />
            <BackToList to='/'>Voltar para a listagem</BackToList>
        </>
    )
}

const BackToList = styled(Link)`
    margin-top: 20px;
    color: #797979;
    display: block;
`

export { ProductSave }