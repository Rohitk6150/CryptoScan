import { Alert } from '@chakra-ui/react'
import React from 'react'

const ErrorComponent = ({message}) => {
  return <Alert
  status="error"
  position={"fixed"}
  bottom={"4"}
  left={"50%"}
  transform={"translatex(-50%"}
  w={"container.lg"}>
    {message}

  </Alert>
}

export default ErrorComponent
