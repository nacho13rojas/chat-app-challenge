import styled from 'styled-components'
import { PRIMARY, SECONDARY, WHITE } from '../../theme/colors'

export const Container = styled.div`
    background-color: ${PRIMARY};
    border-radius: 4px 4px 0px 0px;
    color: ${WHITE};
    height: 70vh;
    margin: 0px 16px;
    overflow-y: 'scroll';
    padding: 20px;
    width: 90vw;
`

export const EmptyChatContainer = styled.div`
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    width: 100%;
`

export const EmptyChatText = styled.p`
    font-size: 16px;
`

export const Scroll = styled.div`
    display: inline-flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
    width: 100%;
    ::-webkit-scrollbar {
        width: 24px;
    }
    ::-webkit-scrollbar-track {
        border: solid 8px transparent;
        border-radius: 24px;
        box-shadow: inset 0 0 24px 24px ${PRIMARY};
    }
    ::-webkit-scrollbar-thumb {
        border: solid 8px transparent;
        border-radius: 24px;
        box-shadow: inset 0 0 14px 14px ${SECONDARY};
    }
`
