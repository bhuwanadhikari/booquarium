import React from 'react';
import {
    Icon,
    TopNavigation,
    TopNavigationAction,
    Button
} from 'react-native-ui-kitten';

import { View, Text, } from 'react-native';

export const FacebookIcon = (style) => (
    <Icon name='menu-2-outline' {...style} />
);

const Home = () => {


    return (
        <View>
            <Text>this is the asdfasd screen</Text>
        </View>
    );
};

Home.navigationOptions = () => ({
    title: 'Booquarium',
    headerLeft: (FacebookIcon)
})

export default Home;