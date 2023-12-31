import { Text,StyleSheet, Pressable} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Center } from "native-base";
import Colors from "../color";
import HomeScreen from "../Screens/HomeScreen"
import ProfileScreen from "../Screens/ProfileScreen"
import CartScreen from "../Screens/CartScreen"
import {Entypo,AntDesign,FontAwesome,FontAwesome5,MaterialCommunityIcons} from "@expo/vector-icons"

const Tab = createBottomTabNavigator()
const CustomTab = ({children,onPress}) => (
    <Pressable 
        onPress={onPress} 
        h={70} 
        w={70} 
        rounded='full' 
        bg={Colors.main} 
        top={-30}
        shadow={2}
    >
    {children}
    </Pressable>
);
const BottomNav =() => {
    return (
        <Tab.Navigator backBehavior="main" initialRouteName="Main" screenOptions={{
            tabBarShowLabel:false,
            tabBarStyle:{...styles.tab},
            headerShown:false,
            tabBarHideOnKeyboard:true
        }}>
            <Tab.Screen
                name="Main"
                component={HomeScreen}
                options={{
                    
                    tabBarIcon: ({ focused }) => (
                        <Center>
                            {focused ? (
                                <Entypo name="home" size={24} color={Colors.main}/>
                            ) : (
                                <AntDesign name="home" size={24} color={Colors.black}/>
                            )}
                        </Center>
                    ),
                }}
                />
        {/* cart */}
                <Tab.Screen
                    name="Cart"
                    component={CartScreen}
                    options={{
                        tabBarButton: (props) => <CustomTab {... props} />,
                        tabBarIcon: ({focused}) => (
                            <Center>
                                {focused ? (
                                    <FontAwesome5 name="shopping-basket" size={24} color={Colors.main}/>
                                ):(
                                    <MaterialCommunityIcons name="shopping-outline" size={24} color={Colors.black}/>
                                )}
                            </Center>
                        )
                    }}
                 />   
         {/*profile */}   
         <Tab.Screen
            name="profile"
            component={ProfileScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <Center>
                        {focused ? (
                            <FontAwesome name="user" size={24} color={Colors.main}/>
                        ):(
                            <AntDesign name="user" size={24} color={Colors.black}/>
                        )}
                    </Center>
                )
            }}
         />    
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tab: {
        elevation:0,
        backgroundColor: Colors.white,
        height: 60,
        paddingTop: 5,
    },
});

export default BottomNav;