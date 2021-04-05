import styled from 'styled-components'
import { ACCENT, WHITE } from '../../theme/colors'

export const Container = styled.div`
    background-color: ${ACCENT};
    color: ${WHITE};
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

export const Content = styled.div`
    align-items: center;
    border-radius: 20px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
`

export const Title = styled.h1`
    align-self: flex-start;
    font-size: 20px;
    margin: 16px;
`
