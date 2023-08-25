import { Box, Text, View } from 'native-base';
import React from "react";
import Colors from "../color";
import HomeProduct from '../Components/HomeProduct';
import HomeSearch from '../Components/HomeSearch';

function HomeScreen() {
    return (
        <Box flex={1} bg={Colors.grey}>
            <HomeSearch/>
            <HomeProduct/>
        </Box>
    );
}

export default HomeScreen;