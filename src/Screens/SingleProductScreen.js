import { Box, ScrollView, Text, View, Image, Heading, HStack, Spacer} from 'native-base';
import React, { useState } from "react";
import NumericInput from 'react-native-numeric-input';
import Colors from '../color';
import Buttons from "../Components/Buttons";
import Rating from "../Components/Rating";

function SingleProductScreen() {
    const [value, setValue] = useState (0)
    return (
        <Box  safeArea flex={1} bg={Colors.white}>
            <ScrollView px={5} showsVerticalScrollIndicator={false}>
                <Image 
                    source={require ("../../assets/HoneyBacon.png")} 
                    alt="Image" 
                    w="full"
                    h={300} 
                    resizeMode="contain"
                />

                <Heading bold fontSize={15} mb={2} lineHeight={22}>
                    Hamburguesa Honey Bacon
                </Heading>
                <Rating value={4} />
                <HStack space={2} alignItems="center" my={5}>
                    <NumericInput 
                        value={value} 
                        totalWidth={140} 
                        totalHeight={30} 
                        iconSize={25}
                        step={1}
                        maxValue={15}
                        minValue={0}
                        borderColor={Colors.grey}
                        rounded
                        textColor={Colors.black}
                        iconStyle={{color: Colors.white}}
                        rightButtonBackgroundColor={Colors.main}
                        leftButtonBackgroundColor={Colors.main}
                    />
                    <Spacer/>
                    <Heading bold color={Colors.black} fontSize={19}>
                        $42k
                    </Heading>
                </HStack>
                <Text lineHeight={24} fontSize={12} bold>
                    Ingredientes:                   
                </Text>
                <Text lineHeight={24} fontSize={12}>
                    - CARNE DE 140 Gr
                </Text>
                <Text lineHeight={24} fontSize={12}>
                    - CREMOSO DE QUESO
                </Text>
                <Text lineHeight={24} fontSize={12}>
                    - CHEDDAR 
                </Text>
                <Text lineHeight={24} fontSize={12}>
                    - MERMELADA DE TOCINO
                </Text>
                <Text lineHeight={24} fontSize={12}>
                    - CEBOLLA CRISPY
                </Text>
                <Text lineHeight={24} fontSize={12}>
                    - TOCINETA
                </Text>
                <Text lineHeight={24} fontSize={12}>
                    - TOMATE CONFITADO
                </Text>
                <Text lineHeight={24} fontSize={12}>
                    - MAYO SPICE
                </Text>
                
                <Buttons bg={Colors.main} color={Colors.white} mt={7}>
                    COMPRAR
                </Buttons>
            </ScrollView>

        </Box>
    );
}

export default SingleProductScreen;