import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { yellow, black, white } from '../utils/colors';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';

const restart = (title, navigation) =>
    navigation.reset(
        [
            NavigationActions.navigate({ routeName: 'Home', params: { title } }),
            NavigationActions.navigate({ routeName: 'DeckView', params: { title } }),
            NavigationActions.navigate({ routeName: 'Quiz', params: { title } })
        ],
        2);

export default ({ navigation }) => {
    const { title, score } = navigation.state.params;

    clearLocalNotification()
        .then(setLocalNotification);

    return (
        <View style={styles.container}>
            <Text style={styles.scoreText}>Your Score</Text>
            <Text style={styles.scoreValue}>{`${score}%`}</Text>
            <TouchableOpacity style={[styles.button, { backgroundColor: white }]} onPress={() => restart(title, navigation)}>
                <Text style={{ fontSize: 15, textAlign: 'center' }}>Try Again?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DeckView', { title })}>
                <Text style={{ color: white, fontSize: 15, textAlign: 'center' }}>Back to Deck</Text>
            </TouchableOpacity>
        </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scoreText: {
        fontSize: 20,
        marginTop: 10,
    },
    scoreValue: {
        fontSize: 50,
        color: yellow,
        flex: 1,
        marginTop: 20
    },
    button: {
        marginBottom: 10,
        backgroundColor: black,
        width: 160,
        padding: 10,
        borderRadius: 4,
        borderColor: black,
        borderWidth: 1
    }
});
