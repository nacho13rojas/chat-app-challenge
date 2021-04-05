import React, { useEffect, useRef } from 'react'
import { Container, Scroll } from './styles'
import { EmptyChat } from './EmptyChat'
import { getIsFirstMessage, getIsLastMessage, scrollToBottom } from './utils'
import { ChatItem } from '../ChatItem/ChatItem'

export const Chat = ({ messages, userName }) => {
    const messagesEndRef = useRef(null)

    useEffect(() => {
        scrollToBottom(messagesEndRef)
    }, [messages])

    return (
        <Container>
            {messages.length === 0 && <EmptyChat />}
            <Scroll>
                {messages.map((message, index) =>
                    <ChatItem
                        isFirstMessage={getIsFirstMessage(messages, index)}
                        isLastMessage={getIsLastMessage(messages, index)}
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