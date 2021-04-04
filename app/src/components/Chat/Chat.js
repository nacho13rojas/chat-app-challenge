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

    return (
        <Container>
            {messages.length === 0 && <EmptyChat />}
            <Scroll>
                {messages.map((message, index) => <ChatItem key={index} message={message} userName={userName} />)}
                <div ref={messagesEndRef} />
            </Scroll>
        </Container>
    )
}