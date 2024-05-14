import {SafeAreaView, Text, View} from "react-native";
import styles from "../../styles";
import AppCard from "../../components/Home/AppCard/AppCard";
import images from "../../constants/images";
import {COLORS} from "../../constants";
import {useNavigation} from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.HomeScreenContainer}>
            <View style={styles.HomeScreenHelloContainer}>
                <Text style={styles.HomeScreenHelloText}>Hello, User!</Text>
                <Text>We have listed your favourite daily apps</Text>
            </View>
            <View style={styles.HomeScreenAppsContainer}>
                <View style={styles.HomeScreenAppsContainerLine}>
                    <AppCard name={"To-Do"} backgroundColor={COLORS.primary} image={null} width={0.35}
                             onPress={() => navigation.navigate('Todo')}/>
                    <View style={styles.spacing}></View>
                    <AppCard name={"Weather"} backgroundColor={COLORS.primary} image={images.weather} width={0.65}
                             onPress={() => navigation.navigate('Weather')}/>
                < /View>
                <View style={styles.HomeScreenAppsContainerLine}>
                    <AppCard name={"Ask ChatGPT"} backgroundColor={COLORS.primary} image={null} width={1}/>
                </View>
            </View>

        </SafeAreaView>
);
}
export default HomeScreen