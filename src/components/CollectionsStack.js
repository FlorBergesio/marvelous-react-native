import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Collection from "./Collection";

const Stack = createStackNavigator();

const CoinsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Collection"
                component={ Collection }
            />
        </Stack.Navigator>
    );
};

export default CoinsStack;