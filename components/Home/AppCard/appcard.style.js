import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants"

const styles = StyleSheet.create({
    Card: (width, backgroundColor) => ({
        flex: width,
        height: 120,
        backgroundColor: backgroundColor,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: "row",

    }), CardName: {
        color: COLORS.white,
        fontSize: SIZES.xLarge,
        fontFamily: FONT.bold,
        alignSelf: "flex-start",
        position: 'absolute', // Position the text absolutely within the container
        bottom: 10, // Adjust the distance from the bottom as needed
        left: 10,

    }, backgroundImage: {
        flex: 1,
        height: "auto",
        resizeMode: 'cover', // or 'stretch' or 'contain'
        justifyContent: 'center',
        borderRadius: 20,
    }
});

export default styles;