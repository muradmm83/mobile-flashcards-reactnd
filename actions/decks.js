import { saveDeckTitle, addCardToDeck } from '../utils/helpers';
export const DECKS_RECEIVED = 'DECKS_RECEIVED';
export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';
export const ADD_CARD = 'ADD_CARD';


export const receiveDecks = decks => ({
    type: DECKS_RECEIVED,
    decks
});

const addDeck = deck => ({
    type: ADD_DECK,
    deck
});

export const handleAddDeck = title => dispatch => saveDeckTitle(title).then(deck => dispatch(addDeck(deck)));

export const removeDeck = deck => ({
    type: REMOVE_DECK,
    deck
});

const addCard = deck => ({
    type: ADD_CARD,
    deck
});

export const handleAddCard = (title, question, answer) => dispatch => addCardToDeck(title, question, answer).then(deck => dispatch(addCard(deck)));

