import React from 'react'
import { Flex, ScrollView, Text, Image, Box, Heading, Pressable } from 'native-base'
import Colors from '../color';
import products from "../data/Products"
import Rating from './Rating';

function HomeProduct() {
    return(
        <ScrollView flex={1} showsHorizontalScrollIndicator={false}>
            <Flex 
            flexWrap="wrap"
            direction="row"
            justifyContent="space-between"
            px={6}   
        >
        
        {products.map((product) => (
                <Pressable 
                    key={product._id} 
                    w="43%" 
                    bg={Colors.white}
                    rounded="md" 
                    shadow={2} 
                    pt={0.3}
                    my={3}
                    pb={2}
                    overflow="hidden"
                    
                    
                >
                    
                    <Image
                        source={{uri: product.image}}
                        alt={product.name}
                        w={200}
                        h={150}
                        resizeMode="contain"
                    />
                    <Box px={4} pt={1}>
                        <Heading  size="sm" bold >
                           ${product.price}  
                             
                        </Heading>

                        <Text   fontSize={10} mt={1} isTruncated w="full">
                            {product.name}
                        </Text>
                    {/*RATING */}
                    <Rating value={product.rating}/>
                    </Box>
                    </Pressable>
                ))
            }
        </Flex>
        </ScrollView>
    )
}
export default HomeProduct;