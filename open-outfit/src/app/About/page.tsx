/* eslint-disable react/no-unescaped-entities */
'use client'
import { Box, Flex, Text, Heading, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import { useState } from 'react';
import { Layout } from '@/components/layout';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
}

function About() {
  const products = [
    {
      id: 1,
      name: "T-shirt Adidas Vintage",
      price: 30,
      description: "Magnifique t-shirt Adidas Vintage des années 90",
      category: 'Haut'
    },
    {
        id: 2,
        name: "T-shirt Nike Vintage",
        price: 35,
        description: "Magnifique t-shirt Nike Vintage des années 90",
        category: 'Haut'
    },
    {
        id: 3,
        name: "T-shirt Puma Vintage",
        price: 30,
        description: "Magnifique t-shirt Puma Vintage des années 90",
        category: 'Haut'
    },
    {
        id: 4,
        name: "Baggy jean clair",
        price: 70,
        description: "Magnifique baggy jean clair des années 90",
        category: 'Bas'
    },
    {
        id: 5,
        name: "Pantalon noir 90's",
        price: 70,
        description: "Magnifique pantalon noir des années 90",
        category: 'Bas'
    },
    {
        id: 6,
        name: "Short troué",
        price: 55,
        description: "Magnifique short troué des années 90",
        category: 'Bas'
    },
    {
        id: 7,
        name: "Jordan 1 Chicago",
        price: 250,
        description: "Magnifique Jordan 1 Chicago des années 90",
        category: 'Chaussures'
    },
    {
        id: 8,
        name: "Converse All Star",
        price: 80,
        description: "converse All star des années 90",
        category: 'Chaussures'
    },
    {
        id: 9,
        name: "Reebok Pump",
        price: 110,
        description: "Magnifique Reebok Pump des années 90",
        category: 'Chaussures'
    }
  ];

  return (
    <Layout>
      <Flex align="center" justify="center" h="100vh" bg="#fff" color="#3454D1">
        <Box p={8} maxW="600px">
          <Heading mb={4} fontSize="3xl" color="#74121D">
            Bienvenue chez Open-Outfit
          </Heading>
          <Text fontSize="lg" color="#74121D">
            OpenOutfit propose une sélection tendance de vêtements pour hommes, femmes et enfants. Notre plateforme en
            ligne garantit une expérience de shopping fluide avec des articles de qualité, couvrant toutes les occasions
            et les dernières tendances de la mode.
          </Text>
        </Box>

        <Box p={8} maxW="400px" bg="#74121D" color="#fff">
          <Heading mb={4} fontSize="2xl">
            Nos Retours Clients
          </Heading>
          <Text>
            "OpenOutfit est mon site préféré pour la mode en ligne. La variété des vêtements, la qualité des produits et
            la simplicité du processus de commande en font une expérience de shopping incontournable. Je recommande
            vivement!"
          </Text>
        </Box>
      </Flex>
    </Layout>
  );
}

export default About;
