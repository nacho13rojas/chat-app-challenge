import styled from 'styled-components'

export const Container = styled.div`
    background-color: rgba(253,248,246, 0.1);
    border-radius: 5px 5px 0px 0px;
    color: white;
    height: 70vh;
    width: 90vw;
    margin: 0px 16px;
    overflow-y: 'scroll';
    padding: 20px;
`

export const EmptyChatContainer = styled.div`
    align-items: center;
    justify-content: center;
    flex: 1;
    width: 100%;
    display: flex;
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
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`
