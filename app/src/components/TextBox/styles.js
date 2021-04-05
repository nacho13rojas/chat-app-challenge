import styled from 'styled-components'
import { PRIMARY, SECONDARY, TERTIARY, WHITE } from '../../theme/colors'

export const Container = styled.div`
    align-items: flex-end;
    background-color: ${SECONDARY};
    border-radius: 0px 0px 4px 4px;
    display: flex;
    justify-content: flex-end;
    margin: 0px 16px 16px;
    padding: 20px;
    width: 90vw;
`

export const Content = styled.div`
    display: inline-flex;
    flex-direction: column;
    width: 100%;
`

export const InputContainer = styled.div`
    background-color: ${PRIMARY};
    border-radius: 8px;
    display: flex;
`

export const Input = styled.input`
    background-color: transparent;
    border: 0px;
    color: ${WHITE};
    font-size: 16px;
    margin-right: 16px;
    padding: 8px;
    width: 100%;
    ::placeholder {
        color: ${TERTIARY};
    }
    :focus{
        outline: none;
    }
`

export const Button = styled.button`
    background-color: transparent;
    border: 0px;
    display: flex;
    padding: 4px;
`

export const Icon = styled.img`
    width: 28px;
`