// Header.tsx
'use client'
import { Box, Flex, Heading, Button, Spacer, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ChakraProvider } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isCartModalOpen, setCartModalOpen] = useState(false);

  return (
    <Flex align="center" justify="space-between" p={4} bg="#74121D">
      <Box>
        <Heading as="h1" size="lg" color="white">
          Open-Outfit
        </Heading>
      </Box>
      <Flex align="center">
        <Button as={NextLink} href="/" variant="ghost" bg="#666666" mr={10}>
          Accueil
        </Button>
        <Button as={NextLink} href="/Articles" variant="ghost" bg="#666666" mr={10}>
          Nos Articles
        </Button>
        <Button as={NextLink} href="/About" variant="ghost" bg="#666666" mr={10}>
          A Propos
        </Button>
      </Flex>
    </Flex>
  );
}


export function Layout({ children }) {
  return (
    <ChakraProvider>
      <Header />
      <Box p={0}>{children}</Box>
    </ChakraProvider>
  );
};
