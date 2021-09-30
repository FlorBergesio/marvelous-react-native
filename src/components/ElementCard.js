import React from "react";
import { Text, Pressable, StyleSheet, Image } from "react-native";

const ElementCard = ( props ) => {
    return (
        <Pressable
            onPress={ props.onPress }
            style={ styles.container }
        >
            <Image
                source={{ uri: props.item.thumbnail.path + '.' + props.item.thumbnail.extension }}
                style={ styles.image }
            />
            <Text
                style={ styles.text }
            >{ props.item.name }</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 16,
        margin: 8,
        borderRadius: 8,
        flexDirection: "row"
    },
    text: {
        color: "black",
        marginLeft: 16,
        fontWeight: "bold"
    },
    image: {
        width: 100,
        height: 100
    }
});

export default ElementCard;