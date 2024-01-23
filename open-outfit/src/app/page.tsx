/* eslint-disable react/no-unescaped-entities */
import { Layout } from '@/components/layout';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

function Home() {
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

export default Home;
