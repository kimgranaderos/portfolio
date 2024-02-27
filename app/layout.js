import { Box, ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: "Chan Granaderos",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <ChakraProvider>
          <>
            <Navbar />
            <main>
              <Box _dark={{ bg: "blackAlpha.500" }}>
                {children}
              </Box>
            </main>
            <Footer />
          </>
        </ChakraProvider>
      </body>
    </html>
  )
}