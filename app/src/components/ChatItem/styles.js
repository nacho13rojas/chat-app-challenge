import styled from 'styled-components'

export const Container = styled.div`
    background-color: rgba(253,248,246, 0.5);
    border-radius: 5px;
    color: white;
    font-size: 12px;
    margin-bottom: 4px;
    padding: 4px;
`

export const Title = styled.h1`
    color: ${({ color }) => color};
    font-size: 1.5em;
`