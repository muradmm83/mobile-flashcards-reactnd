import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { handleAddCard } from '../actions/decks';
import { black, white } from '../utils/colors';

class AddCard extends Component {
    state = {
        question: '',
        answer: ''
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Add Card'
    })

    setQuestion = text => this.setState(prevState => ({
        question: text,
        answer: prevState.answer
    }));

    setAnswer = text => this.setState(prevState => ({
        question: prevState.question,
        answer: text
    }));

    submit = () => {
        const { question, answer } = this.state;
        const { dispatch, navigation } = this.props;

        this.setState({
            question: '',
            answer: ''
        });

        dispatch(handleAddCard(navigation.state.params.title, question, answer));

        navigation.goBack();
    }

    render() {
        const { question, answer } = this.state;
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <TextInput style={styles.text} placeholder="Your question" value={question} onChangeText={this.setQuestion} />
                </View>
                <View style={styles.textContainer}>
                    <TextInput style={styles.text} placeholder="Your answer" value={answer} onChangeText={this.setAnswer} />
                </View>
                <TouchableOpacity style={styles.button} onPress={this.submit}>
                    <Text style={{ color: white, fontSize: 20 }}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        margin: 15
    },
    textContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 5,
    },
    text: {
        flex: 1,
        fontSize: 15,
        margin: 10
    },
    button: {
        padding: 15,
        backgroundColor: black,
        borderWidth: 1,
        borderRadius: 5
    }
});

export default connect((state, { navigation }) => ({ navigation }))(AddCard);