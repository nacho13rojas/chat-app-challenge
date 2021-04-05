import styled from 'styled-components'
import { SECONDARY, WHITE } from '../../theme/colors'

export const Box = styled.div`
    align-self: ${({ alignEnd }) => alignEnd ? 'flex-end' : 'auto'};
    background-color: ${SECONDARY};
    border-radius: ${({ alignEnd, isFirstMessage }) => {
        if (!isFirstMessage) {
            return '6px 6px 6px 6px'
        }
        return alignEnd ? '6px 0px 6px 6px' : '0px 6px 6px 6px'
    }};
    color: ${WHITE};
    display: inline-flex;
    font-size: 12px;
    margin-bottom: ${({ isLastMessage }) => isLastMessage ? '8px' : '2px'};
    text-align: ${({ alignEnd }) => alignEnd ? 'end' : 'auto'};
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
    font-size: 14px;
    margin: 0px;
`

export const Text = styled.p`
    font-size: 16px;
    margin: 4px 0px 4px;
`

export const Time = styled.p`
    align-self: flex-end;
    font-size: 10px;
    margin: 4px;
`
