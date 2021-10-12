import React from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";

const ElementCard = ( props ) => {
    const getDescriptionPreview = () => {
        const description = props.item.description;
        let finalDescription;

        if ( description !== "" ) {
            if ( description.length > 90 ) {
                finalDescription = description.slice(0, 90) + "...";
            } else {
                finalDescription = description;
            }
        } else {
            finalDescription = "No description available";
        }

        return finalDescription;
    };

    return (
        <Pressable
            onPress={ props.onPress }
            style={ styles.container }
        >
            <Image
                source={{ uri: props.item.thumbnail.path + '.' + props.item.thumbnail.extension }}
                style={ styles.image }
            />
            <View style={ styles.textContainer } >
                <View>
                    <Text
                        style={ styles.textBold }
                    >{ props.item.name }</Text>
                    <Text
                        style={ styles.text }
                    >{ getDescriptionPreview() }</Text>
                </View>
                <Text
                    style={ styles.textCTA }
                >Read more</Text>
            </View>
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
    textContainer: {
        marginLeft: 16,
        width: 220,
        justifyContent: "space-between"
    },
    textBold: {
        color: "black",
        fontWeight: "bold"
    },
    text: {
        color: "black",
    },
    textCTA: {
        backgroundColor: "red",
        color: "white",
        fontWeight: "bold",
        padding: 5,
        borderRadius: 5,
        width: 100,
        textAlign: "center"
    },
    image: {
        width: 100,
        height: 100
    }
});

export default ElementCard;