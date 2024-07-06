import {Link, Slot} from "expo-router";
import SignupScreen from "./screens/Authentication/Signup.jsx";
import LoginScreen from "./screens/Authentication/Login.jsx";
import HomeScreen from "./screens/Home/HomeScreen.jsx";
import Landing from "./screens/Landing/Landing.jsx";
import ProfileScreen from "./screens/Profile/ProfileScreen.jsx";
import HamburgerScreen from "./screens/Hamburger/HamburgerScreen.jsx";
import NotificationScreen from "./screens/Notifications/NotificationScreen.jsx";
import Layout from "./screens/Ar_screen/layout.jsx";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TradeScreen from "./screens/Trade/TradeScreen.js";
import YourTradeScreen from './screens/Trade/Your/YourTradeScreen.js';
import GlobalTradeScreen from './screens/Trade/Global/GlobalTradeScreen';
const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cam from "./screens/Ar_screen/camera.jsx";

const Tab = createBottomTabNavigator();


const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Landing" component={Landing} options={{headerShown : false}}/>
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown : false}}/>
                <Stack.Screen name="SignupScreen" component={SignupScreen} options={{headerShown : false}}/>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown : false}}/>
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown : false}}/>
                <Stack.Screen name="HamburgerScreen" component={HamburgerScreen} options={{headerShown : false}}/>
                <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={{headerShown : false}}/>
                <Stack.Screen name="Trade" component={TradeScreen} options={{headerShown : false}}/>
                <Stack.Screen name="YourTrade" component={YourTradeScreen} />
                <Stack.Screen name="GlobalTrade" component={GlobalTradeScreen} />
                <Stack.Screen name="AR" component={Layout} options={{headerShown : false}} />
                <Stack.Screen name="camera" component={Cam} options={{headerShown : false}} />
            </Stack.Navigator>
      </NavigationContainer>
    )
};


export default App;