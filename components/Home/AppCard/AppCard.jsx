import {View, Text, TouchableOpacity, Image, ImageBackground} from "react-native";

import styles from "./appcard.style";
import images from "../../../constants/images";

export default function AppCard(props) {
    return (
        <TouchableOpacity style={styles.Card(props.width, props.backgroundColor)} onPress={() => props.onPress()}>
                <Image source={props.image} style={styles.backgroundImage} imageStyle={styles.imageStyle} />
                    <Text style={styles.CardName}>{props.name}</Text>
        </TouchableOpacity>
    )
}