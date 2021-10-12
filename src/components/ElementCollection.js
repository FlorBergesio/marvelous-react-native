import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, FlatList, Button, Linking } from "react-native";

const ElementCollection = ( props ) => {
  const [ item, setItem ] = useState( props.route.params.item );

  useEffect(() => {
    const uppercaseTitle = item.name.toUpperCase();
    props.navigation.setOptions({ title: uppercaseTitle });
  }, [ item ]);

  return (
    <View style={ styles.container }>
      
      <FlatList
        data={ item.data.items }
        renderItem={ ({ item }) => (
          <View>
            <Text style={ styles.text }>{item.name}</Text>
          </View>
        ) }
      />
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

export default ElementCollection;