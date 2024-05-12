import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import {useRouter} from "expo-router";
import styles from "../styles";
import AppCard from "../components/Home/AppCard/AppCard";
import images from "../constants/images";
import {COLORS} from "../constants";

export default function Home() {
    const router = useRouter()
    return (
        <SafeAreaView style={styles.HomeScreenContainer}>
            <View style={styles.HomeScreenHelloContainer}>
                <Text style={styles.HomeScreenHelloText}>Hello, User!</Text>
                <Text>We have listed your favourite daily apps</Text>
            </View>
            <View style={styles.HomeScreenAppsContainer}>
                <View style={styles.HomeScreenAppsContainerLine}>
                    <AppCard name={"To-Do"} backgroundColor={COLORS.primary} image={null} width={0.35}/>
                    <View style={styles.spacing}></View>
                    <AppCard name={"Weather"} image={images.weather} width={0.65}/>
                </View>
                <View style={styles.HomeScreenAppsContainerLine}>
                    <AppCard name={"Ask ChatGPT"} backgroundColor={COLORS.primary} image={null} width={1}/>
                </View>
            </View>

        </SafeAreaView>
    );
}