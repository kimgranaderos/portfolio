import { Box, Flex } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box _dark={{ bg: "blackAlpha.500"}}>
      <Flex align="center" justify="center" h={100} maxW="container.lg" mx="auto">
        Copyright &copy; 2024 Chan Granaderos
      </Flex>
    </Box>
  )
}