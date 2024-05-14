import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getCurrentPositionAsync, requestForegroundPermissionsAsync} from 'expo-location';
import axios from 'axios';
import {COLORS, FONT, SIZES} from "../../constants";
import {WEATHER_API_KEY} from "@env"

const weatherAPIKey = WEATHER_API_KEY;

const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);

    const getLocationAndWeather = async () => {
        try {
            // Requesting permission from the user
            const {status} = await requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setLoading(false);
                return (<Text>You need to let us to use your location services</Text>)
            }

            const location = await getCurrentPositionAsync({});
            const {latitude, longitude} = location.coords;

            await fetchWeather(latitude, longitude);
        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getLocationAndWeather();
    }, []);

    const fetchWeather = async (latitude, longitude) => {
        try {
            const apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${weatherAPIKey}`;
            const response = await axios.get(apiUrl);
            setWeatherData(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
        }
    };

    const getWeatherIcon = (icon) => {
        // I require those here instead of in "constants" to not load all of them. We want to load only the one that we need

        switch (icon) {
            case '01d':
                return require('../../assets/images/weather/sunny.png');
            case '02d':
                return require('../../assets/images/weather/partly-cloudy.png');
            case '03d':
            case '04d':
                return require('../../assets/images/weather/cloudy.png');
            case '09d':
            case '10d':
                return require('../../assets/images/weather/rain.png');
            case '11d':
                return require('../../assets/images/weather/thunderstorm.png');
            case '13d':
                return require('../../assets/images/weather/snow.png');
            default:
                return require('../../assets/images/weather/unknown.png');
        }
    };

    if (weatherData?.name) {
        return (
            <View style={styles.container}>
                {loading ? (
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator size="large"/>
                    </View>
                ) : <View>
                    <View style={styles.iconContainer}>
                        <Image
                            source={getWeatherIcon(weatherData?.weather[0].icon)}
                            style={styles.weatherIcon}
                        />
                    </View>

                    <View style={styles.weatherContainer}>
                        <Text style={styles.city}>{weatherData?.name}</Text>
                        <Text style={styles.weather}>
                            {weatherData?.weather[0].main}, {Math.round(weatherData?.main.temp)}°C
                        </Text>
                    </View>
                </View>}
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                {loading ? (
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator size="large"/>
                    </View>
                ) : <View>
                    <View style={styles.weatherContainer}>
                        {Platform.OS === 'ios' ? (
                            <View style={styles.weatherContainer}>
                                <Text style={styles.weather}>
                                    You need to let us use your location services from your settings
                                </Text>
                            </View>
                        ) : (
                            <View style={styles.weatherContainer}>
                                <TouchableOpacity onPress={() => getLocationAndWeather()}>
                                    <Text style={styles.weather}>
                                        You need to let us use your location services
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                </View>}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    city: {
        fontFamily: FONT.bold,
        fontSize: 24,
        marginBottom: 10,
        textAlign: "center",
        color: COLORS.white,
    },
    weatherContainer: {
        padding: 10,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 10,
    },
    weather: {
        fontFamily: FONT.regular,
        fontSize: 18,
        textAlign: "center",
        color: COLORS.white,
    },
    iconContainer: {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 10,
        marginBottom: SIZES.large,
        padding: 20,
    },
    weatherIcon: {
        marginBottom: 10,
    },
});

export default WeatherApp;
