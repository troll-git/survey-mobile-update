import {StyleSheet, Platform} from "react-native";
import {COLORS} from "./colors";
export default StyleSheet.create({
    androidSafeArea: {
        backgroundColor: COLORS.BACKGROUND,
        paddingTop: Platform.OS === 'android' ? 45 : 0
    }
})