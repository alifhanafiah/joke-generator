const axios = require('axios').default;

const main = () => {
  const baseUrl = 'https://v2.jokeapi.dev/joke/Programming,Dark,Pun';

  // loading spinner css
  const loader = document.querySelector('#loading');
  const displayLoading = () => {
    loader.classList.add('display');
  };

  // hiding loading
  const hideLoading = () => {
    loader.classList.remove('display');
  };

  const renderJoke = (jokeObject) => {
    const jokeSetup = document.querySelector('#joke-setup');
    const jokeDelivery = document.querySelector('#joke-delivery');

    if (jokeObject.type === 'single') {
      jokeSetup.innerText = jokeObject.joke;
    } else {
      jokeSetup.innerText = jokeObject.setup;
      jokeDelivery.innerText = jokeObject.delivery;
    }
  };

  const showResponseMessage = (message = 'Check your internet connection') => {
    alert(message);
  };

  const getJoke = async () => {
    try {
      displayLoading();

      const response = await axios.get(`${baseUrl}`);
      const responseData = await response.data;

      hideLoading();

      if (responseData.error) {
        showResponseMessage(responseData.error);
      } else {
        renderJoke(responseData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    const btnJoke = document.querySelector('#generateJoke');

    btnJoke.addEventListener('click', getJoke);
  });
};

export default main;
