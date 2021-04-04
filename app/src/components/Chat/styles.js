import styled from 'styled-components'

export const Container = styled.div`
    background-color: rgba(253,248,246, 0.1);
    border-radius: 5px;
    color: white;
    height: 50vh;
    overflow-y: 'scroll';
    padding: 20px;
    width: 90vw;
`

export const Scroll = styled.div`
    display: inline-flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    margin: 0em;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`
