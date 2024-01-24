'use client'
import { Box, Flex, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import { useState } from 'react';
import { Layout } from '@/components/layout';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
}

function Product() {
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

  const [selectedCategory, setSelectedCategory] = useState<string>('Tout');
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const filteredProducts =
    selectedCategory === 'Tout'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const categories: string[] = ['Tout', 'Haut', 'Bas', 'Chaussures'];

  return (
    <Box>
      <Layout>
        <Flex justify="center" mt='4' mb="4">
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
              bg="#74121D"
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

                <Button mt="3" bg="gray" onClick={() => addToCart(product)}>
                  Ajouter au panier
                </Button>
              </Box>
            </Box>
          ))}
        </Flex>
      </Layout>

      <Button
        position="fixed"
        bottom="4"
        right="4"
        colorScheme="red"
        onClick={openModal}
      >
        Panier ({cartItems.length})
      </Button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mon Panier</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {cartItems.map((item) => (
              <Flex
                key={item.id}
                justifyContent="space-between"
                borderBottom="1px"
                py="2"
              >
                <Text>{item.name}</Text>
                <Button
                  bg="red"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Retirer
                </Button>
              </Flex>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" onClick={closeModal}>
              Fermer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Product;
