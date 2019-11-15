import React from 'react';
import {
    Icon,
    Input
} from 'react-native-ui-kitten';

import { View, Text, } from 'react-native';




const Search = () => {


    return (
        <View>
            <Text>this is the Searching screen</Text>
        </View>
    );
};


Search.navigationOptions = ({ navigation }) => ({
    headerTitle: (
        <View style={{ width: '90%' }}>
            <Input
                label="Password"
                style={{ zIndex: 20, height: 30, borderRadius: 30 }}
                size='small'
                placeholder='Password'
            />
        </View>
    )

});


export default Search;