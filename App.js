import React from 'react';

import ProfileScreen from './src/components/Screens/Profile';
import HomeScreen from './src/components/Screens/Home';
import Search from './src/components/Screens/Search';
import Signup from './src/components/AuthScreens/Signup';
import Signin from './src/components/AuthScreens/Signin';
import Landing from './src/views/Landing';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text, Button, View, } from 'react-native-ui-kitten';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { theme } from './src/theme.js';
import { StatusBar } from 'react-native';

import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const App = () => (
	<React.Fragment>
		<IconRegistry icons={EvaIconsPack} />
		<StatusBar
			barStyle="dark-content"
			// dark-content, light-content and default
			hidden={false}
			//To hide statusBar
			backgroundColor="#41b7b4"
			//Background color of statusBar
			translucent={false}
			//allowing light, but not detailed shapes
			networkActivityIndicatorVisible={true}
		/>
		<ApplicationProvider mapping={mapping} theme={theme}>
			<BaseApp />
		</ApplicationProvider>
	</React.Fragment>
);





const HomeStack = createStackNavigator({
	HomeScreen: {
		screen: HomeScreen
	},
	Search: {
		screen: Search
	}
},
	{
		initialRouteName: 'HomeScreen',
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: '#41b7b4',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
		},
	});


const ProfileStack = createStackNavigator({
	ProfileScreen: {
		screen: ProfileScreen
	}
},
	{
		initialRouteName: 'ProfileScreen',
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: '#41b7b4',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
		},
	});


const AppDrawer = createDrawerNavigator({
	Home: {
		screen: HomeStack
	},
	Profile: {
		screen: ProfileStack
	}
});

const AuthStack = createStackNavigator({
	Landing: {
		screen: Landing,
		navigationOptions: {
			header: null
		},
	},
	Signin: {
		screen: Signin,
		navigationOptions: {

		}
	},
	Signup: Signup
},
	{
		initialRouteName: 'Landing',
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: '#41b7b4',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
		},
	}
);

const BaseApp = createAppContainer(


	createSwitchNavigator(
		{
			App: AppDrawer,
			Auth: AuthStack,
		},
		{
			initialRouteName: 'App',

		}
	)
);


export default App;
