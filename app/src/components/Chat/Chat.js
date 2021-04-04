import React, { useEffect, useRef } from 'react'
import { Container, Scroll } from './styles'
import { ChatItem } from '../ChatItem/ChatItem'

export const Chat = ({ messages, userName }) => {

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages]);

    return (
        <Container>
            <Scroll>
                {messages.map((message, index) => <ChatItem key={index} message={message} userName={userName} />)}
                <div ref={messagesEndRef} />
            </Scroll>
        </Container>
    )
}