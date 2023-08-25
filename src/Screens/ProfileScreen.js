import { Center, Heading, Image, Text } from 'native-base';
import React from "react";
import  Colors  from "../color";
import Tabs from '../Components/Profile/Tabs';

function ProfileScreen() {
    return (

    <>
        <Center bg={Colors.main} pt={10} pb={6}>       
            <Image
            source={{
                uri:"https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
            }}
                alt="profile"
                w={24}
                h={24}
                resizeMode="cover"
            />
                <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
                    Admin 
                </Heading>
                <Text italic fontSize={10} color={Colors.white}>
                    Unido Nov 11 2022
                </Text>
        </Center>
        {/*TABS*/}
        <Tabs />
    </>
    );
}

export default ProfileScreen;