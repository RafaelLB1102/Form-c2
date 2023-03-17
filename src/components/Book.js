import React from 'react'
import { Text } from "react-native";

export const Book = ({item}) => {
    const {bookName} = item
    return (
        <Text>
            {bookName}
        </Text>
    )
}
