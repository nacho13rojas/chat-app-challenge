import React, { useEffect, useState } from 'react'

import { Screen } from './components/Screen/Screen'
import { WEB_SOCKET_URL } from './constants/urls'

export const App = () => {
  const [socket, setSocket] = useState(undefined)

  useEffect(() => {
    if (socket === undefined) {
      setSocket(new WebSocket(WEB_SOCKET_URL))
      return
    }

    return () => {
      if (socket !== undefined) {
        socket.close()
      }
    }

  }, [socket])

  return (
    <Screen socket={socket} />
  )
}
