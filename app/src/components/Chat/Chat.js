import React, { useEffect, useRef } from 'react'
import { Container, EmptyChatContainer, EmptyChatText, Scroll } from './styles'
import { ChatItem } from '../ChatItem/ChatItem'

export const Chat = ({ messages, userName }) => {

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages]);

    const EmptyChat = () => (
        <EmptyChatContainer>
            <EmptyChatText>As mensagens apareceram aqui</EmptyChatText>
        </EmptyChatContainer>
    )

    const getIsFirstMessage = (index) => {
        if (index === 0) {
            return true
        }
        return messages[index].author !== messages[index - 1].author
    }

    const getIsLastMessage = (index) => {
        if (index === messages.length - 1) {
            return true
        }
        return messages[index].author !== messages[index + 1].author
    }

    return (
        <Container>
            {messages.length === 0 && <EmptyChat />}
            <Scroll>
                {messages.map((message, index) =>
                    <ChatItem
                        isFirstMessage={getIsFirstMessage(index)}
                        isLastMessage={getIsLastMessage(index)}
                        key={index}
                        message={message}
                        userName={userName}
                    />
                )}
                <div ref={messagesEndRef} />
            </Scroll>
        </Container>
    )
}