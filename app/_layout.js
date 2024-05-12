import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: "home",
};

const Layout = () => {
    const [fontsLoaded] = useFonts({
        ArielRoundedMT: require("../assets/fonts/ArialRoundedMTRegular.ttf"),
        ArielRoundedMTBold: require("../assets/fonts/ArialRoundedMTBold.ttf"),
    });

    return (
        <Stack initialRouteName="home" screenOptions={{headerTitleStyle: {textTransform: 'capitalize'}}}>
            <Stack.Screen name="home" />
        </Stack>
    )
};

export default Layout;