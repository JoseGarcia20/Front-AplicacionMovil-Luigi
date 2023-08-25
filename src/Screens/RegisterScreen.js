import { Box, Button, Input, Text,  Image, Pressable, VStack } from 'native-base';
import React from "react";
import  Colors  from "../color";




function RegisterScreen() {
    return (
        <Box flex={1} bg={Colors.black}>
            
            <Image
                flex={1}
                alt="Logo"
                resizeMode="cover"
                size="lg"
                w="full"
                source={require("../../assets/registro.png")}
            />

            <Box
                w="full" 
                h="full" 
                position="absolute"
                top="0" 
                px="6" 
                justifyContent="center">
            {/*Resgistro*/}
                <VStack space={6} px={7} alighItems="center" >
                   {/*nombre usuario*/}  
                    <Input
                        variant="underlined"
                        placeholder="Nombre completo"
                        w="100%"
                        pl={2}
                        color={Colors.white}
                        borderBottomColor={Colors.main}
                        paddingTop="40"
                        size="10"
                    />
                    {/*correo*/} 
                    <Input
                        variant="underlined"
                        placeholder="correo"
                        w="100%"
                        pl={2}
                        color={Colors.white}
                        borderBottomColor={Colors.main}
                        size="10"
                    />
                    {/*numero cel*/} 
                    <Input
                        variant="underlined"
                        placeholder="celular"
                        w="100%"
                        pl={2}
                        type="number"
                        color={Colors.white}
                        borderBottomColor={Colors.main}
                        size="10"
                    />
                    {/*direccion*/} 
                    <Input
                        variant="underlined"
                        placeholder="direccion"
                        w="100%"
                        pl={2}
                        color={Colors.white}
                        borderBottomColor={Colors.main}
                        size="10"
                    />
                     {/*contraseña*/} 
                    <Input
                        variant="underlined"
                        placeholder="contraseña"
                        w="100%"
                        type="password"
                        pl={2}
                        color={Colors.white}
                        borderBottomColor={Colors.main}
                        size="10"
                    />
                </VStack>

                <Button 
                    _pressed={{
                        bg:Colors.white,
                    }}
                    my={30}
                    w="40%"
                    rounded={50}
                    bg={Colors.main}
                    marginLeft={100}
                    
                >
                LOGIN
                </Button>
                <Pressable mt={4}>
                    <Text color={Colors.white} marginLeft="135" >REGISTRO</Text>
                </Pressable>
            </Box>
       </Box>
    );
}

export default RegisterScreen;