import React from 'react'
import { Box, Container, MessageContainer, Text, Time, Title } from './styles'

export const ChatItem = ({ message, userName }) => {

    const { time, text, author, color } = message

    const isUser = author === userName

    const date = new Date(time)

    const hour = date.getHours();
    const minutes = date.getMinutes();

    const formattedTime = `${hour}:${minutes}`

    console.log(date)

    return (
        <Container alignEnd={isUser}>
            <Box alignEnd={isUser}>
                {isUser && <Time>
                    {formattedTime}
                </Time>}
                <MessageContainer>
                    <Title color={color}>
                        {author}
                    </Title>
                    <Text>
                        {text}
                    </Text>
                </MessageContainer>
                {!isUser && <Time>
                    {formattedTime}
                </Time>}
            </Box>
        </Container>
    )
}