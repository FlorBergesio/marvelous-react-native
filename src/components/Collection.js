import React, { useEffect, useState } from "react";
import { Pressable, Text, View, StyleSheet, FlatList } from "react-native";

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
    }, []);

    const fetchData = async () => {
        setLoading( true );
        fetch(
            `https://gateway.marvel.com:443/v1/public/${entity}${query.query}?${query.filters}&ts=21212&apikey=3655294fd52f20d004695c7de00c0e2b&hash=526fef0abc4a8b18186b7c54cc0502fa`
        )
            .then( response => response.json())
            .then( json => setDataRetrieved( json.data.results ) )
            .then( () => setLoading( false ) )
            .catch( () => setError( true ) );
        return;
    };

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

            <View>
                <Text>Marvelous</Text>
                <Text>Loading: {loading ? "yes" : "no"}</Text>
                <Text>Datos: {dataRetrieved ? "yes" : "no"}</Text>
                <Text>Error: {error ? "yes" : "no"}</Text>

            </View>
            <View>
                { dataRetrieved.length > 0 
                    ? (
                        <FlatList
                            data={ dataRetrieved }
                            renderItem={ ({ item }) => (
                            <Text>{ item.name }</Text>
                            )}
                        />
                    )
                    : <Text>Marvelous</Text>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        /* backgroundColor: "red", */
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