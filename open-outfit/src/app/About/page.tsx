import Layout from '@/components/layout';
import { Box, Flex, Text, layout } from '@chakra-ui/react';

function About() {
  const sitePurpose =
    "Bienvenue sur notre site de vêtements vintage ! Nous proposons une sélection soigneusement choisie de vêtements rétro des années 90. Découvrez le style unique de cette époque à travers nos produits de haute qualité.";

  const reviews = [
    { name: 'Client 1', comment: 'Superbe qualité, livraison rapide !' },
    { name: 'Client 2', comment: 'Large choix de produits vintage.' },
    { name: 'Client 3', comment: 'Excellent service client.' },
    { name: 'Client 4', comment: 'Vêtements conformes à la description.' },
  ];

  return (
    <Layout>
      <Flex
        align="center"
        justify="center"
        minHeight="100vh"
        bg="#F6F6F6"
        color="white"
      >
        <Box p="4" maxW="800px">
          <Box textAlign="center" mb="8">
            <Text fontSize="xl" bg="#74121D">
              {sitePurpose}
            </Text>
          </Box>

          <Flex justify="center" flexWrap="wrap">
            {reviews.map((review, index) => (
              <Box
                key={index}
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                m="4"
                width="300px"
                bg="#74121D"
                color="white"
                boxShadow="md"
              >
                <Box p="6">
                  <Text fontWeight="bold" fontSize="lg" mb="2">
                    {review.name}
                  </Text>
                  <Text fontSize="sm" color="white">
                    {review.comment}
                  </Text>
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Layout>
  );
}

export default About;
