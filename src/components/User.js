import React from 'react'
import { Text } from "react-native";

export const User = ({item}) => {
    const {userName} = item
    return (
        <Text>
            {userName}
        </Text>
    )
}
