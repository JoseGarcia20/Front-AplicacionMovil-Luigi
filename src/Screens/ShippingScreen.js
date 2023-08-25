import { Box, Center,FormControl,ScrollView,Text, VStack, Input} from 'native-base';
import React from "react";
import Colors from '../color';
import Buttons from '../Components/Buttons';


const ShippingInputs=[
    {
        label: "Ciudad Residencia",
        type: "text",
    },

    {
        label: "Barrio Residencia",
        type: "text",
    },

    {
        label: "Dirección de Residencia",
        type: "text",
    },

    {
        label: "Especificaciones extra",
        type: "text",
    }   
];

function ShippingScreen() {
    return (
        <Box flex={1} safeArea bg={Colors.main} py={5}>
            {/* Header */}
            <Center pb={15}>
                <Text color={Colors.white} fontSize={14} bold>
                    Datos de Dirección
                </Text>
            </Center>
            {/* Inputs */}
            <Box h="full" bg={Colors.white} px={5}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack space={6} mt={5}>
                        {ShippingInputs.map((i,index) =>(

                        <FormControl>
                            <FormControl.Label
                                _text={{
                                    fontSize:"12px",
                                    fontWeight: "bold",
                                }}>
                                    {i.label}
                                </FormControl.Label>
                                <Input
                                    borderWidth={0.5}
                                    borderColor={Colors.black}
                                    bg={Colors.grey}
                                    py={4}
                                    type={i.type}
                                    color={Colors.black}
                                    _focus={{
                                        bg:Colors.grey,
                                        borderWidth: 1,
                                        borderColor: Colors.black,
                                    }}
                                >
                                </Input>
                        </FormControl>
                         ))}
                         <Buttons bg={Colors.main} color={Colors.white} mt={5}>CONTINUAR</Buttons>
                    </VStack>
                </ScrollView>
            </Box>
        </Box>
    );
}

export default ShippingScreen;