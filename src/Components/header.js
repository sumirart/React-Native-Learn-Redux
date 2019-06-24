import React from 'react';
import {View, Text} from 'react-native';

function header(props) {
    return (
        <View>
            <Text>{props.title}</Text>
        </View>
    )
}

export default header;