import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';

function List() {
     return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Image source={require('../src/Logo.png')} style={styles.logo} />
					<Text style={styles.textheader}> N&N Music</Text>
				</View>
				<ScrollView>
					<TouchableOpacity onPress={() => navigation.navigate('List')}>
						<View style={styles.view}>
							<Text style={styles.text}>Click to change Screen</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigation.navigate('List')}>
						<View style={styles.view}>
							<Text style={styles.text}>Click to change Screen</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigation.navigate('List')}>
						<View style={styles.view}>
							<Text style={styles.text}>Click to change Screen</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigation.navigate('List')}>
						<View style={styles.view}>
							<Text style={styles.text}>Click to change Screen</Text>
						</View>
					</TouchableOpacity>
				</ScrollView>
			</View>
		);
}
var windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
	view: {
		backgroundColor: 'yellow',
		paddingHorizontal: 20,
		paddingVertical: 15,
		width: windowWidth,
		height: 200,
		marginBottom: 2,
	},
	text: {
		color: 'red',
		fontWeight: 'bold',
		fontSize: 20,
	},
	container: {
		backgroundColor: 'white',
		marginTop: 22,
		width: windowWidth,
		height: 677,
		flex: 1,
	},
	header: {
		width: windowWidth,
		height: 50,
		backgroundColor: '#000',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textheader: {
		fontSize: 20,
		color: 'red',
		fontWeight:'bold',
		textTransform:'uppercase'
	},
	logo: {
		width: 50,
		height: 50,
		resizeMode: 'center',
		marginRight: 10,
	},
});
export default List;