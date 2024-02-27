'use client'

import { Flex, Box, Button, Stack, Image, useColorMode, Divider, Text, HStack, Modal, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, VStack, Textarea, } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { TbMessagePlus, TbMessageCircleUp } from "react-icons/tb";
import Link from 'next/link';

const ModalContact = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="36px">Get in touch</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex wrap="wrap" gap={2}>
            <Input placeholder="Name" w="49%" />
            <Input placeholder="Email" w="49%" />
            <Textarea placeholder="Message" h="100px" />
          </Flex>
          <Button mt={5}>Submit</Button>
        </ModalBody>
        <ModalFooter>

        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box _dark={{ bg: "blackAlpha.500"}}>
      <Flex
        minH="80px"
        py={{ base: 2 }}
        maxW="container.lg"
        mx="auto"
        align="center">

        <Flex flex={{ base: 1 }} align="center " justify="start">
          <Link href="/">
            <Flex align="center">
              <Image src="/xircus-dev-logo.png" boxSize="30px"/>
              <Text
                color="gray.600"
                _dark={{ color: "white" }}
                fontWeight={700}>
                  Chan.xircus 
              </Text>
            </Flex>
          </Link>
          <Box h="40px" px={5}>
            <Divider orientation='vertical' />
          </Box>
          <DesktopNav />
        </Flex>

        <Flex display={{ base: "none", md: "flex" }} align="center" ml={10}>
          <HStack>
            <Button leftIcon={<TbMessagePlus />}>Resume</Button>
            <Button onClick={onOpen} leftIcon={<TbMessageCircleUp />}>Contact</Button>
            <ModalContact isOpen={isOpen} onClose={onClose} />
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </HStack>
        </Flex>
      </Flex>

    </Box>
  )
}

const DesktopNav = () => {
  return (
    <Stack direction="row" spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box
          key={navItem.label}
          as="a"
          p={2}
          href={navItem.href ?? "#"}
          fontSize="sm"
          fontWeight={500}
          color="gray.600"
          _hover={{ color: "blue.300" }}
          _dark={{
            color: "white",
            _hover: { color: "blue.500" }
          }}>
          {navItem.label}
        </Box>
      ))}
    </Stack>
  )
}

const NAV_ITEMS = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Project',
    href: '/project',
  },
]