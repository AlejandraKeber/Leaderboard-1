/* eslint-disable linebreak-style */
import './CSS/styles.css';
import { setGame, store } from './modules/storeData.js';
import { getData } from './modules/getData';
import { showData } from './modules/showData';

/**
 * Variables for storing DOM
 * references to check for events
 * and input data
 */
const form = document.querySelector('.form');
const nameInput = document.querySelector('.name');
const scoreInput = document.querySelector('.score');
const gameID = (() => localStorage.getItem('game'))();

/**
 * an event listener to listen for the form submission.
 * @parameter_one the type of event.
 * @parameter_two the callback function.
 */
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const score = scoreInput.value;
  if (gameID) {
    store(name, score, gameID);
  } else {
    setGame('LeaderBoard Game').then(() => {
      store(name, score, gameID);
    });
  }
  nameInput.value = null;
  scoreInput.value = null;
});

/**
 * A function to check for window
 * when it's fully loaded
 * get the data from API
 * and display it back to the UI.
 * @parameter_one the type of event.
 * @parameter_two the callback function.
 */

window.addEventListener('load', () => {
  if (gameID) {
    getData(gameID).then(() => {
      showData
    });
  } else {
    console.log('not set');
  }
});
