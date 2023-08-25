import { Box, Text, View,Center,Image, VStack, Button } from 'native-base';
import React from "react";
import  Colors  from "../color";
import Buttons from '../Components/Buttons';
import { useNavigation } from '@react-navigation/native';

function Principal() {
    const navigation = useNavigation();
    return (
        <Box flex={1} bg={Colors.black} safeAreaTop>

            <Center w="full" h={250} marginTop={100} >
              <Image 
                source={require("../../assets/logo.png")}
                alt="Logo"
                size="lg"
                width={200}
                height={200}
              
                />
            </Center>

            <VStack space={7} px={6} >
                <Buttons bg={Colors.main}  color={Colors.white} onPress={RegisterScreen}>Registro</Buttons>
                <Buttons bg={Colors.main}   color={Colors.white}>Login</Buttons>
            </VStack>
        </Box>
    );
}

export default Principal;