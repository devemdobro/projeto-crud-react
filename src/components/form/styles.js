import styled from "styled-components"

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`

export const Div = styled.div`    
    margin-bottom: 15px;
`

export const Label = styled.label`
    font-weight: bold;
    width: 100%;
    display:block;
    margin-bottom: 10px;
`

export const Input = styled.input`
    border-radius: 3px;
    width: 250px;
    padding: 5px;
    border: 1px solid grey;
`

export const Send = styled.input`
    width: 70px;
    background-color: #337AB7;
    color: white;
    border: 0;
    border-radius: 3px;
    padding: 5px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover{
        background-color: #0B5ED7;
    }
`