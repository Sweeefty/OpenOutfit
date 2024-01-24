'use client'
import { Box, Flex, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { Layout } from '@/components/layout';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  img: string;
}

function Product() {
  const products = [
    {
      id: 1,
      name: "T-shirt Adidas Vintage",
      price: 30,
      description: "Magnifique t-shirt Adidas Vintage des années 90",
      category: 'Haut',
      img: "https://assets.laboutiqueofficielle.com/w_1100,q_auto,f_auto/media/products/2023/11/01/adidas_395697_IM2079_20231113T153005_01.jpg"
    },
    {
        id: 2,
        name: "T-shirt Nike Vintage",
        price: 35,
        description: "Magnifique t-shirt Nike Vintage des années 90",
        category: 'Haut',
        img:'https://i.etsystatic.com/8346725/r/il/c52d23/3881203560/il_570xN.3881203560_fb3e.jpg'
    },
    {
        id: 3,
        name: "T-shirt Puma Vintage",
        price: 30,
        description: "Magnifique t-shirt Puma Vintage des années 90",
        category: 'Haut',
        img:'data:image/webp;base64,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'
    },
    {
        id: 4,
        name: "Baggy jean clair",
        price: 70,
        description: "Magnifique baggy jean clair des années 90",
        category: 'Bas',
        img:'data:image/jpeg;base64,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'
    },
    {
        id: 5,
        name: "Pantalon noir 90's",
        price: 70,
        description: "Magnifique pantalon noir des années 90",
        category: 'Bas',
        img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSKw3rGRkvvNztsmbcAXgOn3rlYIF7_l36qIywKKxNC1KAWoWlk4T06mCrzvMBVBALB9ipVMdTu6H6Iq2QtVCXLyKLeNC-TUoFBolyU5dVtxO2SB4UuTn0Nx_mBLRS0GqXJiG25Az9VnEuB&usqp=CAc'
    },
    {
        id: 6,
        name: "Short troué",
        price: 55,
        description: "Magnifique short troué des années 90",
        category: 'Bas',
        img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS_PpT4DJQmxEBvFcSWfFknivW8HB0UV-pqCriUYcDEZN1JdE-tDaAfPCz0Tf3b829HXWTq4kbh9_dldUG7lPl5fxoE8kKhYbKmoZAw1fk_FsEjjKk0pA-xjLMi5oDTNEZu5mb0cvs&usqp=CAc'
    },
    {
        id: 7,
        name: "Jordan 1 Chicago",
        price: 250,
        description: "Magnifique Jordan 1 Chicago des années 90",
        category: 'Chaussures',
        img:'https://www.thelaststep.fr/storage/products/6762/thumbs/800x600_me_WkB31WpX_AA3834-101_(1).jpg'
    },
    {
        id: 8,
        name: "Converse All Star",
        price: 80,
        description: "converse All star des années 90",
        category: 'Chaussures',
        img:'data:image/webp;base64,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'
    },
    {
        id: 9,
        name: "Reebok Pump",
        price: 110,
        description: "Magnifique Reebok Pump des années 90",
        category: 'Chaussures',
        img:'data:image/jpeg;base64,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'
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
              <Box height="200px" bg="gray.200">
                <Image
                    src={product.img}  // Remplacez URL_DE_VOTRE_IMAGE par le chemin de votre image
                    alt={product.name}
                    fit="cover"
                    w="100%"
                    h="100%"
                    />
              </Box>

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
