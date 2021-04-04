import React from 'react'
import { Container, Title } from './styles'

export const ChatItem = ({ message }) => {

    const { time, text, author, color } = message

    return (
        <Container>
            <Title color={color}>
                {author}
            </Title>
            {text}
        </Container>
    )
}