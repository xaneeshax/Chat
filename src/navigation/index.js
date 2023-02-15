import React from "react";
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-ionicons";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import ChatScreen from "../screens/ChatScreen";

function DetailsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
}


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Chat" component={ChatScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const LoginStack = createNativeStackNavigator();

function LogInStackScreen() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="Login" component={LoginScreen} />
      <LoginStack.Screen name="Details" component={DetailsScreen} />
    </LoginStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                        iconName = focused
                        ? 'home'
                        : 'home';
                        } else if (route.name === 'Settings') {
                        iconName = focused
                        ? 'settings'
                        : 'settings';
                        } else if (route.name == 'Group') {
                            iconName = focused
                            ? 'chatbubbles'
                            : 'chatbubbles';
                        } else if (route.name == 'Login') {
                            iconName = focused
                            ? 'person'
                            : 'person';
                        } else if (route.name == 'Explore') {
                            iconName = focused
                            ? 'airplane'
                            : 'airplane';
                        } 
              
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    "tabBarActiveTintColor": "tomato",
                    "tabBarInactiveTintColor": "gray",
                    "tabBarStyle": [
                        {
                        "display": "flex"
                        },
                        null
                    ]})
                }
            >
            <Tab.Screen name="Home" component={HomeStackScreen} options={{headerShown: false}}/>
            <Tab.Screen name="Login" component={LogInStackScreen} options={{headerShown: false}}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}


export default Navigation;