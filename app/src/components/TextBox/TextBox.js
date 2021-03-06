import React from 'react'

import send_white_24dp from '../../assets/send_white_24dp.png'
import { TEXTS } from '../../constants/language'

import { Button, Container, Content, Icon, Input, InputContainer } from './styles'

export const TextBox = ({ handleChange, handleKeyDown, handleSendMessage, inputText, userName }) => {
    const placeholder = userName === '' ? TEXTS.enterYourName : TEXTS.enterAMessage

    return (
        <Container>
            <Content>
                <InputContainer>
                    <Input autoFocus placeholder={placeholder} onChange={handleChange} onKeyDown={handleKeyDown} value={inputText} />
                    <Button onClick={handleSendMessage}>
                        <Icon alt={TEXTS.send} src={send_white_24dp} />
                    </Button>
                </InputContainer>
            </ Content>
        </ Container>
    )
}