import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { white, gray, black } from '../utils/colors';

export default ({ title, cards }) => (
    <View style={styles.container}>
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{`${cards} cards`}</Text>
        </View>

        <TouchableOpacity style={styles.btn}>
            <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { backgroundColor: black, marginBottom: 100 }]}>
            <Text style={{ color: white }}>Start Quiz</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
    },
    subTitle: {
        fontSize: 15,
        color: gray,
        textAlign: 'center'
    },
    btn: {
        borderColor: black,
        borderWidth: 2,
        borderRadius: 2,
        padding: 5,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
});