
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, StatusBar, } from "native-base";
import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
import BottomNav from "./src/Navigations/BottomNav";

const Stack =createNativeStackNavigator();

export default function App() {
    return (
      <NativeBaseProvider>
      <LoginScreen/>
      </NativeBaseProvider>
    );
}
