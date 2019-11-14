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



const Profile = (props) => {


    return (
        <View>
            <Text>this is the Profile screen</Text>
            <Icon name='menu-2-outline' width={32} height={32} fill='#fff' />
        </View>
    );
};

Profile.navigationOptions = (props) => ({
    drawerLabel: 'Profile',
    title: 'Profile',
    headerLeft: (
        <View style={{ paddingLeft: 10 }}>
            <Icon
                onPress={() => {

                    props.navigation.toggleDrawer();;
                }}
                animation='pulse'
                name='menu-2-outline'
                width={32}
                height={32}
                fill='#cef3f9'
            />
        </View>
    )
})

export default Profile;