import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = (props) => (
    <>
        <Nav to={props.to}>{props.children}</Nav>
    </>
)

const Nav = styled(Link)`
    background-color: #337AB7;
    color: white;
    padding: 10px;
    border-radius: 5px;
    transition: 0.2s ease-in-out;
    display: inline-block;
    margin: 5px;

    &:hover{
        background-color: #0B5ED7;
    }
`

export { Button }