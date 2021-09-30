import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ElementDetail = () => {
    return (
        <View
            style={ styles.container }
        >
            <Text
                style={ styles.text }
            >ElementDetail</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        padding: 16
    },
    text: {
        color: "white"
    }
});

export default ElementDetail;