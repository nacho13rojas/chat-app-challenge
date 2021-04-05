export const getIsFirstMessage = (messages, index) => {
    if (index === 0) {
        return true
    }
    return messages[index].author !== messages[index - 1].author
}

export const getIsLastMessage = (messages, index) => {
    if (index === messages.length - 1) {
        return true
    }
    return messages[index].author !== messages[index + 1].author
}

export const scrollToBottom = (messagesEndRef) => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
}
