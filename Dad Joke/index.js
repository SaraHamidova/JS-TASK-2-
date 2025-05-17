const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

giveJoke();

jokeBtn.addEventListener('click', giveJoke);

async function giveJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  try {
    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();
    jokeEl.innerHTML = data.joke;
  } catch (error) {
    jokeEl.innerHTML = "Oops! Couldn't load a joke.";
  }
}
