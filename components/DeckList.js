import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, SafeAreaView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { gray } from '../utils/colors';

class DeckList extends Component {
    renderItem = ({ item }) => (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckView', { title: item.title })}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subTitle}>{`${item.questions.length} cards`}</Text>
            </TouchableOpacity>
        </View>
    );

    render() {
        const { decks } = this.props;
        const data = Object.keys(decks).map(k => decks[k]);

        if (data.length == 0) {
            return (
                <View style={{ flex: 1, alignContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.emptyNote}>You have't added any decks yet! 😁</Text>
                </View>
            )
        }

        return (
            <SafeAreaView>
                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.title}
                    ItemSeparatorComponent={() => <View style={styles.separator}></View>}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    title: {
        fontSize: 30,
    },
    subTitle: {
        fontSize: 15,
        color: gray,
        textAlign: 'center'
    },
    separator: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: gray,
        height: 1,
        marginTop: 20,
        marginBottom: 20
    },
    emptyNote: {
        flex: 1,
        fontSize: 20,
        marginTop: 20
    }
})

export default connect(({ decks }) => ({ decks }))(DeckList);