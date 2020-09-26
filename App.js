import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TrackPlayer from 'react-native-track-player';
import List from './Screens/List.js';
import Play from './Screens/Play.js';
const Tab = createBottomTabNavigator();
function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				tabBarOptions={{
					activeTintColor: 'red',
					inactiveTintColor: 'gray',
					showLabel: false,
					style: {
						backgroundColor: 'black',
						height: 60,
					},
				}}
			>
				<Tab.Screen
					name="List"
					component={List}
					options={{
						tabBarLabel: 'List',
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons name="playlist-play" color={color} size={size} />
						),
					}}
				/>
				<Tab.Screen
					name="Play"
					component={Play}
					options={{
						tabBarLabel: '',
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons name="animation-play" color={color} size={size} />
						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
TrackPlayer.registerPlaybackService(() => require('./service.js'));
export default App ;
