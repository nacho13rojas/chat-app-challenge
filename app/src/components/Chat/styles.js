import styled from 'styled-components'

export const Container = styled.div`
    background-color: rgba(253,248,246, 0.1);
    border-radius: 5px 5px 0px 0px;
    color: white;
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
    width: 100%;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 24px;
    }
    ::-webkit-scrollbar-track {
        border: solid 8px transparent;
        border-radius: 24px;
        box-shadow: inset 0 0 24px 24px rgba(253,248,246, 0.1);
    }
    ::-webkit-scrollbar-thumb {
        border: solid 8px transparent;
        border-radius: 24px;
        box-shadow: inset 0 0 14px 14px #888;
    }
`
