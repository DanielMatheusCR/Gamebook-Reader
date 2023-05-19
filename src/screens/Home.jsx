import React from 'react'
import { Box, Image, VStack, Button } from 'native-base';

export default function Home() {
  return (
    <VStack>
      <Box>
        <Image
          source={require("../assets/images/bgimg.jpg")}
          alt='Home Image'
          w="100%"
          maxH="650"
          resizeMode="cover"
        />
        <Button variant="outline" _text={{color:"white"}} px="3">
          Iniciar Aventura
        </Button>
      </Box>
    </VStack>
  )
}
