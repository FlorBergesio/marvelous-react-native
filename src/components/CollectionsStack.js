import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Collection from "./Collection";
import ElementDetail from "./ElementDetail";
import ElementCollection from "./ElementCollection";

const Stack = createStackNavigator();

const CoinsStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "black"
                },
                headerTintColor: "white"
            }}
        >
            <Stack.Screen
                name="Collection"
                component={ Collection }
            />
            <Stack.Screen
                name="ElementDetail"
                component={ ElementDetail }
            />
            <Stack.Screen
                name="ElementCollection"
                component={ ElementCollection }
            />
        </Stack.Navigator>
    );
};

export default CoinsStack;