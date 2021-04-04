import styled from 'styled-components'

export const Box = styled.div`
    align-self: ${({ alignEnd }) => alignEnd ? 'flex-end' : 'auto'};
    display: inline-flex;
    text-align: ${({ alignEnd }) => alignEnd ? 'end' : 'auto'};
    background-color: rgba(253,248,246, 0.5);
    border-radius: ${({ alignEnd }) => alignEnd ? '5px 5px 0px 5px' : '5px 5px 5px 0px'};
    color: white;
    font-size: 12px;
    margin-bottom: 8px;
`

export const Container = styled.div`
    align-self: ${({ alignEnd }) => alignEnd ? 'flex-end' : 'auto'};
    display: inline-flex;
`

export const MessageContainer = styled.div`
    margin: 4px 8px;
`

export const Title = styled.h1`
    color: ${({ color }) => color};
    font-size: 10px;
    margin: 0px;
`

export const Text = styled.p`
    font-size: 12px;
    margin: 0px;
`

export const Time = styled.p`
    align-self: flex-end;
    font-size: 8px;
    margin: 4px;
`