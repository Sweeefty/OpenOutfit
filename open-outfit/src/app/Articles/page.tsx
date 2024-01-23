'use client'
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { Layout } from '@/components/layout';

function Product(){

    const products = [
        {
            id: 1,
            name: "T-shirt Adidas Vintage",
            price: 30,
            description: "Magnifique t-shirt Adidas Vintage des années 90",
            category: 'Top'
        },
        {
            id: 2,
            name: "T-shirt Nike Vintage",
            price: 35,
            description: "Magnifique t-shirt Nike Vintage des années 90",
            category: 'Top'
        },
        {
            id: 3,
            name: "T-shirt Puma Vintage",
            price: 30,
            description: "Magnifique t-shirt Puma Vintage des années 90",
            category: 'Top'
        },
        {
            id: 4,
            name: "Baggy jean clair",
            price: 70,
            description: "Magnifique baggy jean clair des années 90",
            category: 'Bottom'
        },
        {
            id: 5,
            name: "Pantalon noir 90's",
            price: 70,
            description: "Magnifique pantalon noir des années 90",
            category: 'Bottom'
        },
        {
            id: 6,
            name: "Short troué",
            price: 55,
            description: "Magnifique short troué des années 90",
            category: 'Bottom'
        },
        {
            id: 7,
            name: "Jordan 1 Chicago",
            price: 250,
            description: "Magnifique Jordan 1 Chicago des années 90",
            category: 'Shoes'
        },
        {
            id: 8,
            name: "Converse All Star",
            price: 80,
            description: "converse All star des années 90",
            category: 'Shoes'
        },
        {
            id: 9,
            name: "Reebok Pump",
            price: 110,
            description: "Magnifique Reebok Pump des années 90",
            category: 'Shoes'
        }
    ]

    const [selectedCategory, setSelectedCategory] = useState('Tout');

    const filteredProducts =
    selectedCategory === 'Tout'
        ? products
        : products.filter((product) => product.category === selectedCategory);

    const categories = ['Tout', 'Top', 'Bottom', 'Shoes'];

    return (
    
    <Box>
        <Layout>
            <Flex justify="center" mb="4">
                {categories.map((category) => (
                <Button
                    key={category}
                    bg={selectedCategory === category ? '#74121D' : 'gray'}
                    onClick={() => setSelectedCategory(category)}
                    mr="2"
                >
                    {category}
                </Button>
                ))}
            </Flex>

            <Flex flexWrap="wrap" justify="center">
                {filteredProducts.map((product) => (
                <Box
                    key={product.id}
                    maxW="sm"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    m="4"
                >
                    <Box height="200px" bg="gray.200"></Box>

                    <Box p="6">
                        <Box display="flex" alignItems="baseline">
                            <Text fontWeight="semibold" fontSize="xl" mr="2">
                            {product.name}
                            </Text>
                            <Text color="gray.500" fontSize="lg">
                            ${product.price}
                            </Text>
                        </Box>

                        <Text color="gray.700" mt="2" fontSize="sm">
                            {product.description}
                        </Text>

                        <Button mt="3" bg="#74121D">
                            Ajouter au panier
                        </Button>
                    </Box>
                </Box>
                ))}
            </Flex>
        </Layout>
    </Box>
  );
}

export default Product;