import {StyleSheet} from "react-native";

import {COLORS, FONT, SIZES} from "../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%",
    }, HomeScreenContainer: {
        margin: SIZES.medium,
    },
    HomeScreenHelloContainer: {
        paddingTop: SIZES.medium,
        paddingBottom: SIZES.medium,
    },
    HomeScreenHelloText: {
        fontSize: 45,
        fontFamily: FONT.bold,
    },
    HomeScreenAppsContainer: {}, HomeScreenAppsContainerLine: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: SIZES.medium,

    }, spacing: {
        width: SIZES.medium, // Fixed spacing between the boxes
    },
});

export default styles;