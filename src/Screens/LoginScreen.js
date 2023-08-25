import { Box,Text, View, Image, Heading, VStack, Input,Button } from 'native-base';
import React from "react";
import  Colors  from "../color";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


function LoginScreen() {
    return (
        //box similar a un div
       <Box flex={1} bg={Colors.black}>
        //fondo login
            <Image
                flex={1}
                alt="Logo"
                resizeMode="cover"
                size="lg"
                w="full"
                source={require("../../assets/login.png")}
            />

            <Box
                w="full" 
                h="full" 
                position="absolute"
                top="0" 
                px="6" 
                marginTop={120}
                justifyContent="center">
            {/*espaciado correo*/}
                <VStack space={6} px={7} alighItems="center" justifyContent='flex-end' >
                    <Input 
                        InputLeftElement={
                            <MaterialCommunityIcons style={{justifyContent:'flex-end', alignItems: 'flex-end'}} name="gmail"size={24}   color="white"/>
                        }
                        variant="underlined"
                        placeholder="user@gmail.com"
                        w="100%"
                        pl={2}
                        color={Colors.white}
                        borderBottomColor={Colors.main}
                        
                        size="10"
                    />
            {/* contraseña */}
                    <Input
                    InputLeftElement={
                        <Entypo name="eye" size={24} color="White" />
                    }
                        variant="underlined"
                        placeholder="*********"
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

export default LoginScreen;

