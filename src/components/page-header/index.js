import { Button } from '../button'
import { Header, H2 } from './styles'

const PageHeader = (props) => (
    <Header>
        <H2>{props.children}</H2>
        { props.section === "list" && (
            <Button to="/new">Adicionar novo produto</Button>
        )}
        
    </Header>
)

export { PageHeader }