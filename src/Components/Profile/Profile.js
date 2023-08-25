import { Box, Button, FormControl, Input, ScrollView, VStack } from "native-base";
import React from "react";
import Colors from "../../color";

const Inputs = [
    {
        label: "NOMBRE",
        type:"text",
    },
    {
        label: "CORREO",
        type:"email",
    },
    {
        label: "CELULAR",
        type:"text",
    },
    {
        label: "DIRECCION",
        type:"text",
    },
    {   
        label: "CONTRASEÑA",
        type:"password",
    }
]

const Profile = () => {
    return(
        <Box h="full" bg={Colors.white} px={5}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <VStack space={10} mt={5} pb={10}>
                    {
                        Inputs.map ((i, index) => (
                            <FormControl key={index}>
                            <FormControl.Label
                            _text={{
                                fontSize: "12px",
                                fontWeight: "bold",
                            }}
                        >
                            {i.label}
                        </FormControl.Label>
                        <Input
                        borderColor={Colors.black}
                        borderWidth={1}
                        bg={Colors.grey}
                        py={4}
                        type={i.type}
                        color={Colors.black}
                        fontSize={15}
                        _focus={{ 
                            bg: Colors.subGreen, 
                         }}
                        />
                        </FormControl>
                        ))}


                </VStack>
            </ScrollView>
        </Box> 
    );
}

export default Profile;
