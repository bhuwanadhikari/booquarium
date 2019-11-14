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

const _hamburger = () => {
    console.log('hamburuger is clicked');
}

const Home = () => {


    return (
        <View>
            <Text>this is the home screen</Text>
            <Icon name='menu-2-outline' width={32} height={32} fill='#fff' />
        </View>
    );
};

Home.navigationOptions = () => ({
    title: 'Booquarium',
    headerLeft: (
        <View style={{ paddingLeft: 10 }}>
            <Icon
                onPress={_hamburger}

                animation='pulse'
                name='menu-2-outline'
                width={32}
                height={32}
                fill='#cef3f9'
            />
        </View>
    )
})

export default Home;