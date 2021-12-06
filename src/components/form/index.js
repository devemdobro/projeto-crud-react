import { Div, StyledForm, Label, Input, Send } from "./styles"

const Form = () => (
    <StyledForm>
        <Div>
            <Label htmlFor="code">Código do produto</Label>
            <Input type="text" name="code" id="code" placeholder="Digite um valor" />
        </Div>

        <Div>
            <Label htmlFor="category">Categoria do produto</Label>
            <Input type="text" name="category" id="category" placeholder="Digite um valor" />
        </Div>

        <Div>
            <Label htmlFor="name">Nome do produto</Label>
            <Input type="text" name="name" id="name" placeholder="Digite um valor" />
        </Div>

        <Div>
            <Label htmlFor="supplier">Nome do fornecedor</Label>
            <Input type="text" name="supplier" id="supplier" placeholder="Digite um valor" />
        </Div>

        <Div>
            <Label htmlFor="price">Valor do produto</Label>
            <Input type="text" name="price" id="price" placeholder="Ex: 43,90" />
        </Div>

        <Send type="submit" />
    </StyledForm>
)

export { Form }