import { Button } from '../button'
import { Td, Th } from './styles'

const Table = ({ list }) => (
    <section>
        <table>
            <thead>
                <tr>
                    <Th>Código do produto</Th>
                    <Th>Categoria do produto</Th>
                    <Th>Nome do produto</Th>
                    <Th>Nome do fornecedor</Th>
                    <Th>Valor do produto</Th>
                    <Th>Opções</Th>
                </tr>
            </thead>
            <tbody>
                {list.map((item) => (
                    <tr key={item.code}>
                        <Td>{item.code}</Td>
                        <Td>{item.category}</Td>
                        <Td>{item.name}</Td>
                        <Td>{item.supplier}</Td>
                        <Td>R$ {item.price}</Td>
                        <Td>
                            <Button to="/view">Visualizar</Button>
                            <Button to="/edit">Editar</Button>
                            <Button to="/delete">Excluir</Button>
                        </Td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
)

export { Table }