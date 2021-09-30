import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ElementDetail = ( props ) => {
    const [ element, setElement ] = useState( props.route.params.element );

    useEffect(() => {
        props.navigation.setOptions({ title: element.name });
    }, []);

    return (
        <View
            style={ styles.container }
        >
            <Text
                style={ styles.text }
            >Nombre: { element.name }</Text>
            <Image
                source={{ uri: element.thumbnail.path + '.' + element.thumbnail.extension }}
                style={ styles.image }
            />
            <Text
                style={ styles.text }
            >Id: { element.id }</Text>
            <Text
                style={ styles.text }
            >Series en las que aparece: { element.series.available }</Text>
            <Text
                style={ styles.text }
            >Historias en las que aparece: { element.stories.available }</Text>
            {console.log(element)}
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
    image: {
        width: 300,
        height: 300,
        marginTop: 5,
        marginBottom: 5
    }
});

export default ElementDetail;