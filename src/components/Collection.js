import React, { useEffect, useState, useCallback } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import ElementCard from "./ElementCard";

const Collection = ( props ) => {
    const [ loading, setLoading ] = useState( false );
    const [ error, setError ] = useState( false );
    const [ dataRetrieved, setDataRetrieved ] = useState([]);
    const [ entity, setEntity ] = useState('characters');
    const [ query, setQuery ] = useState({
        query: '',
        filters: ''
    });

    useEffect(() => {
        fetchData();
    }, [ fetchData ]);

    const fetchData = useCallback( async () => {
        setLoading( true );
        fetch(
            `https://gateway.marvel.com:443/v1/public/${entity}${query.query}?${query.filters}&ts=21212&apikey=3655294fd52f20d004695c7de00c0e2b&hash=526fef0abc4a8b18186b7c54cc0502fa`
        )
            .then( response => response.json())
            .then( json => setDataRetrieved( json.data.results ) )
            .then( () => setLoading( false ) )
            .catch( () => setError( true ) );
        return;
    }, [ setLoading, entity, query ] );

    const handlePress = ( element ) => {
        props.navigation.navigate("ElementDetail", { element });
    };

    return (
        <View
            style={ styles.container }
        >
            {
                loading
                ? <ActivityIndicator color="#fff" size="large" />
                : null
            }

            { dataRetrieved.length > 0 
                ? (
                    <FlatList
                        style={ styles.list }
                        data={ dataRetrieved }
                        renderItem={ ({ item }) => (
                            <ElementCard item={ item } onPress={ () => handlePress( item ) } />
                        )}
                    />
                )
                : null
            }
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