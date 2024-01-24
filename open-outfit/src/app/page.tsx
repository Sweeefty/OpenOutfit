'use client'
/* eslint-disable react/no-unescaped-entities */
import { Layout } from '@/components/layout';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Caroussel } from '@/components/Carousel/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
  return (
    <Layout>
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="center"
        h="100vh"
        ml='40vh'
        mt='1vh'
      >
        <Text fontSize="4xl" fontWeight="bold" mr="100" mb="150">
          La simplicité et le style en un site
        </Text>
        <Caroussel />
      </Flex>
    </Layout>
  );
}

export default Home;

