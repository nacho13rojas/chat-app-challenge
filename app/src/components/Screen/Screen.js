import React, { useState } from 'react'

import { Container, Content, Title } from './styles'
import { Chat } from '../Chat/Chat'
import { TextBox } from '../TextBox/TextBox'

import { TEXTS } from '../../constants/language'

export const Screen = ({ socket }) => {
    const [userName, setUserName] = useState('')
    const [inputText, setInputText] = useState('')
    const [history, setHistory] = useState([])

    const handleChange = (event) => {
        setInputText(event.target.value)
    }

    const handleSendMessage = () => {
        if (inputText !== '') {
            if (userName === '') {
                setUserName(inputText)
            }
            socket.send(inputText)
            setInputText('')
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage()
        }
    }

    const handleMessage = (messageObject) => {
        const { data, type } = JSON.parse(messageObject)

        if (type === 'history') {
            setHistory(data)
        } else if (type === 'message') {
            setHistory(history.concat(data))
        }
    }

    if (socket !== undefined) {
        socket.onmessage = (event) => handleMessage(event.data)
    }

    const title = userName === '' ? TEXTS.startByEnteringYourNameTitle : TEXTS.greetingsUser(userName)

    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Content>
                <Chat messages={history} userName={userName} />
                <TextBox
                    handleChange={handleChange}
                    handleKeyDown={handleKeyDown}
                    handleSendMessage={handleSendMessage}
                    inputText={inputText}
                    userName={userName}
                />
            </Content>
        </Container>
    )
}
