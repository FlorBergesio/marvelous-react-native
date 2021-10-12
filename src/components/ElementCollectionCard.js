import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ElementCollectionCard = ( props ) => {
    const handlePress = ( item ) => {
        props.navigation.navigate("ElementCollection", { item });
    };

    return (
        <View style={ styles.container }>
            { props.item.data.available > 0 
                ? <Text 
                    onPress={ () => handlePress( props.item ) } 
                    style={ styles.textBtn }
                >{ `${ props.item.name } (${ props.item.data.available })` }
                </Text>
                : <Text style={ styles.text }>No { props.item.name }</Text>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: "white",
        padding: 5,
        marginRight: 5,
        justifyContent: "center"
    },
    textBtn: {
        color: "white",
        textAlign: "center",
        textTransform: "uppercase",
        textDecorationLine: "underline"
    },
    text: {
        color: "white",
        textAlign: "center",
    }
});

export default ElementCollectionCard;