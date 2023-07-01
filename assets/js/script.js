const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
const url = 'https://icanhazdadjoke.com/'

const generateJoke = async () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }
  const response = await fetch(url, config)
  const data = await response.json()
  jokeEl.innerHTML = data.joke
}

generateJoke()

jokeBtn.addEventListener('click', generateJoke)
