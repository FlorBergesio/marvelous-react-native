import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";

const Collection = ( props ) => {
    const handlePress = () => {
        props.navigation.navigate("ElementDetail");
    };

    return (
        <View
            style={ styles.container }
        >
            <Text
                style={ styles.text }
            >Collection</Text>
            <Pressable
                onPress={ handlePress }
                style={ styles.button }
            >
                <Text
                    style={ styles.buttonText }
                >Go to Element Detail</Text>
            </Pressable>
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
    },
    button: {
        padding: 8,
        backgroundColor: "white",
        borderRadius: 8,
        margin: 16
    },
    buttonText: {
        color: "red",
        textAlign: "center",
        fontWeight: "bold",
        textTransform: "uppercase"
    }
});

export default Collection;