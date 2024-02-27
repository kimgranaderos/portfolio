'use client'

import { Box, Button, Flex, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import { TbBrandGithub, TbBrandLinkedin, TbBrandTwitter, TbBrandAmongUs,  } from 'react-icons/tb';

export default function HeroSection() {
  return (
    <Box maxW="container.lg" mx="auto" py={20}>
      <HStack>
        <VStack spacing={5} align="start" w="50%">
          <HStack>
            <TbBrandGithub size={20}/>
            <TbBrandLinkedin size={20}/>
            <TbBrandTwitter size={20}/>
          </HStack>
          <Heading as="h1" fontSize={70}>Chan Granaderos</Heading>
          <Text fontSize={20}>Your goal is to create a website and affordable? I'm in! <br /> If you're interested in me, I'd love for you to get in touch.</Text>
          <Button rightIcon={<TbBrandAmongUs />}>About me</Button>
        </VStack>
        <VStack align="center" w="50%">
          <Image borderRadius="2xl" src="/xircus-profile.jpg" boxSize="400px"/>
        </VStack>
      </HStack>
    </Box>
  )
}