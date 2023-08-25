import { Box, HStack, Input,Pressable } from 'native-base';
import React from 'react'
import  Colors  from '../color';
import { Feather } from '@expo/vector-icons'; 


function HomeSearch() {
    return(
        <HStack 
            space={3}
            w="full"
            height={100}
            px={10}
            bg={Colors.black}
            alignItems="center"
            safeAreaTop
        >
        <Input 
            placeholder="Search"
            w="85%"
            bg={Colors.white}
            type="search"
            variant="filled"
            h={12}
            borderWidth={0}
            _focus={{
                bg: Colors.white,
            }}

        />
        <Pressable ml={3}>
        <Feather name="shopping-cart" size={24} color={Colors.white} />
        <Box 
            px={1} 
            rounded="full" 
            position="absolute" 
            top={-13} 
            left={2} 
            bg={Colors.main}
            _text={{
                color: Colors.white,
                fontSize:"11px"
            }}
            >
             5
            </Box>
        </Pressable>
        </HStack>
    )
}
export default HomeSearch;