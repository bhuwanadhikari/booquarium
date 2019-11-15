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



const Home = (props) => {

    const [value, setValue] = React.useState('myval');

    const _search = () => {
        props.navigation.navigate('Search')
    }

    React.useEffect(() => {
        props.navigation.setParams({
            _search
        })
    }, [])

    console.log("value outside the navigationoption", value);

    return (
        <View>
            <Text>this is the home screen</Text>
            <Icon name='menu-2-outline' width={32} height={32} fill='#fff' />
        </View>
    );
};

Home.navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Home',
    title: 'Booquarium',
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
    ),
    headerRight: (
        <View style={{ width: 96, paddingLeft: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Icon
                onPress={navigation.getParam('_search')}
                animation='pulse'
                name='search-outline'
                width={32}
                height={32}
                fill='#cef3f9'
                padding={10}
            />
            <Icon
                onPress={() => {

                    props.navigation.toggleDrawer();;
                }}
                animation='pulse'
                name='shopping-cart-outline'
                width={32}
                height={32}
                fill='#cef3f9'
            />
        </View>
    )
})

export default Home;