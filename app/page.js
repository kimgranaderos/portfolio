'use client'
import { Box } from '@chakra-ui/react'
import HeroSection from '../components/HeroSection'
import ProjectSection from '../components/ProjectSection'

export default function Page() {
  return (
    <Box>
      <HeroSection />
      <ProjectSection />
    </Box>
  )
}