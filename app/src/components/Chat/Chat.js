import React, { useEffect, useRef } from 'react'
import { Container, Scroll } from './styles'
import { ChatItem } from '../ChatItem/ChatItem'

export const Chat = ({ messages }) => {

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages]);

    if (messages === undefined) {
        return <></>
    }

    return (
        <Container>
            <Scroll>
                {messages.map((message, index) => <ChatItem key={index} message={message} />)}
                <div ref={messagesEndRef} />
            </Scroll>
        </Container>
    )
}