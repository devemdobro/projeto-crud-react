import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    background-color: black;
    height: 50px;
    padding: 10px 50px;    
`

export const Nav = styled(Link)`
    color: #a7a7a7;
`