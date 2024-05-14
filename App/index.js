// index.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import TodoScreen from './screens/TodoScreen';
import WeatherScreen from './screens/WeatherScreen';
import {useFonts} from "expo-font";
import {ActivityIndicator, AppRegistry, Platform, View} from "react-native";

const Stack = createStackNavigator();

AppRegistry.registerComponent('main', () => HomeScreen);

if (Platform.OS === 'web') {
    const rootTag = document.getElementById('root') || document.getElementById('main');
    AppRegistry.runApplication('main', { rootTag });
}

const Index = () => {
    const [fontsLoaded] = useFonts({
        ArielRoundedMT: require("../assets/fonts/ArialRoundedMTRegular.ttf"),
        ArielRoundedMTBold: require("../assets/fonts/ArialRoundedMTBold.ttf"),
    });

    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Todo" component={TodoScreen} />
                <Stack.Screen name="Weather" component={WeatherScreen} options={{headerStyle: {backgroundColor: "#c4daf5", }, cardStyle: { backgroundColor: "#1862c9" }}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Index;
