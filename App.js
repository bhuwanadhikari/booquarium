import React from 'react';

import Signup from './src/components/AuthScreens/Signup';

import Signin from './src/components/AuthScreens/Signin';

import Home from './src/components/Screens/Home';

import Landing from './src/views/Landing';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button, View, } from 'react-native-ui-kitten';
import { theme } from './src/theme.js';
import { StatusBar } from 'react-native';


import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const baseApp = () => (
	<React.Fragment>
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
			<Landing />
		</ApplicationProvider>
	</React.Fragment>
);



const AppStack = createStackNavigator({ Home: Home });
const AuthStack = createStackNavigator({ SignIn: Signin, Signup: Signup });

export default createAppContainer(
	createSwitchNavigator(
		{
			Land: Landing,
			App: AppStack,
			Auth: AuthStack,
		},
		{
			initialRouteName: 'Land',
		}
	)
);














export default baseApp;