const axios = require('axios').default;

const main = () => {
  const baseUrl = 'https://v2.jokeapi.dev/joke/Programming,Dark,Pun';
  const getJoke = async () => {
    try {
      const response = await axios.get(`${baseUrl}`);
      const responseData = await response.data;

      if (responseData.error) {
        showResponseMessage(error);
      } else {
        renderJoke(responseData);
      }
    } catch (error) {
      console.log(error);
    }
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

  document.addEventListener('DOMContentLoaded', () => {
    const btnJoke = document.querySelector('#generateJoke');

    btnJoke.addEventListener('click', getJoke);
  });
};

export default main;
