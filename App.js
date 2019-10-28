import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { View, StatusBar } from 'react-native';
import Deck from './components/Deck';
import DeckList from './components/DeckList';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import reducers from './reducers';
import middleware from './middleware';
import Constants from 'expo-constants';
import AddDeck from './components/AddDeck';
import { receiveDecks } from './actions/decks';
import { getDecks } from './utils/helpers';
import DeckView from './components/DeckView';
import AddCard from './components/AddCard';
import Quiz from './components/Quiz';
import Score from './components/Score';

const store = createStore(reducers, middleware);

const Tabs = createMaterialTopTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'DECKS'
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'NEW DECK'
    }
  }
});

const Stack = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  Deck: {
    screen: Deck
  },
  DeckView: {
    screen: DeckView
  },
  AddCard: {
    screen: AddCard
  },
  Quiz: {
    screen: Quiz
  },
  Score: {
    screen: Score,
    navigationOptions: {
      title: 'Score'
    }
  }
});

const Navigator = createAppContainer(Stack);

export default class App extends Component {
  componentDidMount() {
    getDecks()
      .then(decks => store.dispatch(receiveDecks(decks)));
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <View style={{ height: Constants.statusBarHeight }}>
            <StatusBar barStyle="light-content" />
          </View>
          <Navigator />
        </View>
      </Provider>
    );
  }
}