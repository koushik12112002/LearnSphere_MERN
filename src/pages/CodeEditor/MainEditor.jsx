import React from 'react'
import { Box } from '@chakra-ui/react'
import EditorComponents from './EditorComponents'

const MainEditor = () => {
  return (
    <Box minH={"100vh"} bg={"0f0a19"} color={"gray.500"} px={6} py={6}>
        <EditorComponents/>
    </Box>
  )
}

export default MainEditor
