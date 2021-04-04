import React, { useEffect, useState } from 'react'

import { Container, Content, Title } from './styles'
import { Chat } from './components/Chat/Chat'
import { TextBox } from './components/TextBox/TextBox'

export const App = () => {
  const [socket, setSocket] = useState(undefined)
  const [userName, setUserName] = useState('')
  const [inputText, setInputText] = useState('')
  const [history, setHistory] = useState([])

  const handleChange = (event) => {
    setInputText(event.target.value)
  }

  const handleSendMessage = () => {
    if (userName === '') {
      socket.send(inputText)
      setUserName(inputText)
      setInputText('')
      return
    }
    if (inputText !== '') {
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

  useEffect(() => {
    if (socket === undefined) {
      setSocket(new WebSocket("ws://localhost:1337/"))
      return
    }

    return () => {
      if (socket !== undefined) {
        socket.close()
      }
    }

  }, [socket])

  if (socket !== undefined) {
    socket.onmessage = (event) => handleMessage(event.data)
  }

  return (
    <Container>
      <Title>
        {userName === '' ? 'Para conversar, comece inserindo seu nome' : `Bem vindo, ${userName}`}
      </Title>
      <Content>
        <Chat messages={history} userName={userName} />
        <TextBox handleChange={handleChange} handleKeyDown={handleKeyDown} handleSendMessage={handleSendMessage} inputText={inputText} userName={userName} />
      </Content>
    </Container>
  )
}
