import styled from 'styled-components'


export const Container = styled.div`
    align-items: flex-end;
    background-color: rgba(253,248,246, 0.3);
    border-radius: 0px 0px 5px 5px;
    display: flex;
    justify-content: flex-end;
    margin: 0px 16px 16px;
    padding: 20px;
    bottom: 0;
    width: 90vw;
`

export const Content = styled.div`
    align-items: flex-end;
    display: inline-flex;
    flex-direction: column;
    align-self: flex-end;
    width: 100%;
`

export const InputContainer = styled.div`
    background-color: rgba(253,248,246, 0.1);
    border-radius: 8px;
    display: flex;
    justify-content: flex-end;
    width: 100%;
`

export const Input = styled.input`
    background-color: transparent;
    color: white;
    ::placeholder {
        color: rgba(253,248,246, 0.8);
    }
    :focus{
        outline: none;
    }
    font-size: 16px;
    padding: 8px;
    border: 0px;
    margin-right: 16px;
    width: 100%;
`

export const Button = styled.button`
    background-color: transparent;
    border: 0px;
    border-radius: 3px;
    display: flex;
    padding: 4px;
`

export const Icon = styled.img`
    width: 28px;
`