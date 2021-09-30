import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Collection from "./Collection";
import ElementDetail from "./ElementDetail";

const Stack = createStackNavigator();

const CoinsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Collection"
                component={ Collection }
            />
            <Stack.Screen
                name="ElementDetail"
                component={ ElementDetail }
            />
        </Stack.Navigator>
    );
};

export default CoinsStack;