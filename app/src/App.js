import React, { useEffect, useState } from 'react'

import { Container, Title, Button, Input } from './styles'
import { Chat } from './components/Chat/Chat'

const App = () => {
  const [socket, setSocket] = useState(undefined)
  const [userName, setUserName] = useState('')
  const [inputText, setInputText] = useState('')
  const [history, setHistory] = useState(undefined)

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

  const handleChange = (event) => {
    setInputText(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage()
    }
  }

  const handleMessage = (messageObject) => {
    const message = JSON.parse(messageObject)

    if (message.type === 'history') {
      setHistory(message.data)
    } else if (message.type === 'message') {
      setHistory(history.concat(message.data))
      const time = new Date(message.data.time)
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
      <Chat messages={history} />
      <Title>
        {userName === '' ? 'Insira seu nome' : `Digite a sua mensagem, ${userName}`}
      </Title>
      <Input onChange={handleChange} onKeyDown={handleKeyDown} value={inputText} />
      <Button onClick={handleSendMessage}>{userName === '' ? 'Confirmar' : 'Enviar'}</Button>
    </Container>
  )
}

export default App
