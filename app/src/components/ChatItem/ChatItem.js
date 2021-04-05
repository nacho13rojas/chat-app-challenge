import React from 'react'
import { Box, Container, MessageContainer, Text, Time, Title } from './styles'
import { getFormattedTime } from './utils'

export const ChatItem = ({ isFirstMessage, isLastMessage, message, userName }) => {
    const { time, text, author, color } = message
    const isCurrentUser = author === userName
    const formattedTime = getFormattedTime(time)

    return (
        <Container alignEnd={isCurrentUser}>
            <Box alignEnd={isCurrentUser} isFirstMessage={isFirstMessage} isLastMessage={isLastMessage}>
                {isCurrentUser && <Time>
                    {formattedTime}
                </Time>}
                <MessageContainer>
                    {isFirstMessage && <Title color={color}>
                        {author}
                    </Title>}
                    <Text>
                        {text}
                    </Text>
                </MessageContainer>
                {!isCurrentUser && <Time>
                    {formattedTime}
                </Time>}
            </Box>
        </Container>
    )
}
