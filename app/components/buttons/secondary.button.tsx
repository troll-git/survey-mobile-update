import React from 'react';
import {
    TouchableOpacity,
    Text,
    Platform,
    StyleSheet
} from 'react-native';
import {COLORS} from "../../styles/colors";

export const SecondaryButton = (props: any) => {
    const {
        title = 'Enter',
        style = {},
        textStyle = {},
        disabled = false,
        onPress
    } = props;

    const _onPress = (e) => {
        if(disabled) {
            return
        } else {
            onPress(e);
        }
    };

    return (
        <TouchableOpacity>
            <Text style={[styles.title, textStyle]}>{title}</Text>
    </TouchableOpacity>
)
};

const styles = StyleSheet.create({
    button: {

    },
    disabled: {

    },
    title: {
        fontSize: 16,
        textTransform: 'uppercase',
        color: COLORS.PRIMARY,
    }
});