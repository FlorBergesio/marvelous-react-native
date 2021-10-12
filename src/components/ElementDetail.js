import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import ElementCollectionCard from "./ElementCollectionCard";


const ElementDetail = ( props ) => {
    const [ element, setElement ] = useState( props.route.params.element );

    useEffect(() => {
        props.navigation.setOptions({ title: element.name });
    }, [ element ]);

    /* const links = [
        {
            name: "comics",
            number: element.comics.available,
            uri: element.comics.collectionURI,
            items: element.comics.items
        },
        {
            name: "events",
            number: element.events.available,
            uri: element.events.collectionURI,
            items: element.events.items
        },
        {
            name: "series",
            number: element.series.available,
            uri: element.series.collectionURI,
            items: element.series.items
        },
        {
            name: "stories",
            number: element.stories.available,
            uri: element.stories.collectionURI,
            items: element.stories.items
        },
    ]; */
    const links = [
        {
            name: "comics",
            data: element.comics
        },
        {
            name: "events",
            data: element.events
        },
        {
            name: "series",
            data: element.series
        },
        {
            name: "stories",
            data: element.stories
        },
    ];

    return (
        <View
            style={ styles.container }
        >
            <Image
                source={{ uri: element.thumbnail.path + '.' + element.thumbnail.extension }}
                style={ styles.image }
            />
            <Text
                style={ styles.text }
            >{ element.name } ( Id: { element.id } )</Text>
            <Text
                style={ styles.text }
            >{ element.description ? element.description : "No description available" }</Text>
                       
            <FlatList
                horizontal={ true }
                data={ links }
                renderItem={ ({ item }) => <ElementCollectionCard item={ item } navigation={ props.navigation } /> }
                style={ styles.horizontalList }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        padding: 16,
        alignItems: "center",
        justifyContent: "space-between"
    },
    text: {
        color: "white"
    },
    image: {
        width: 300,
        height: 300,
        marginTop: 5,
        marginBottom: 5
    },
    horizontalList: {
        maxHeight: 50,
        margin: 10
    },
});

export default ElementDetail;