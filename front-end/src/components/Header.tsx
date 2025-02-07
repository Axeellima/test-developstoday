"use client"
import { Box, Button, Flex, Heading } from "@chakra-ui/react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Header = () => {
  const pathname = usePathname()

  const isHomePage = pathname === "/"
  return (
    <Box as="header" w="100%" p={4} bg="teal.500" color="white">
      <Flex justify="space-between" align="center">
        <Heading as="h1" size="lg">
          Country Searcher
        </Heading>
        {!isHomePage && (
          <Link href="/" passHref>
            <Button
              w={"120px"}
              paddingY={3}
              variant="ghost"
              color="white"
              _hover={{ bg: "teal.300" }}
            >
              Home
            </Button>
          </Link>
        )}
      </Flex>
    </Box>
  )
}

export default Header
