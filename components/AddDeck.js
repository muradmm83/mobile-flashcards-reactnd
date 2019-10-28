import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { white, black } from '../utils/colors';
import { handleAddDeck } from '../actions/decks';

export class AddDeck extends Component {
    state = {
        title: ''
    }

    textChanged = title => this.setState({ title });

    submit = () => {
        const { title } = this.state;
        const { dispatch, navigation } = this.props;

        this.setState({ title: '' });

        dispatch(handleAddDeck(title));

        navigation.reset(
            [NavigationActions.navigate({ routeName: 'Home' })],
            0
        );
    }

    render() {
        const { title } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput style={styles.input} placeholder="Deck Title" value={title} onChangeText={this.textChanged} />
                </View>
                <TouchableOpacity style={styles.button} onPress={this.submit} disabled={title.length === 0}>
                    <Text style={{ color: white, fontSize: 15 }}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        margin: 30
    },
    title: {
        fontSize: 40,
        textAlign: 'center'
    },
    input: {
        flex: 1,
        fontSize: 15,
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 20,
    },
    button: {
        backgroundColor: black,
        borderRadius: 5,
        padding: 10,
        marginTop: 20
    }
});

export default connect(({ state }, { navigation }) => ({ navigation }))(AddDeck);