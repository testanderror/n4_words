const vocabulary = document.getElementById('voc');
const furigana = document.getElementById('furi');
const meaning = document.getElementById('meaning');
const container = document.querySelector('.container');
const data = 'data.json';
// Reference to the HTML element where you want to display the data
// const dataOutput = document.getElementById('data-output');

// Fetch the JSON data from the local file
const getData = () => {
  fetch(data)
    .then((response) => response.json())
    .then((data) => {
      // Process and display the JSON data
      //dataOutput.innerHTML = JSON.stringify(data, null, 2); // Display the JSON data as a string with indentation
      console.log(data[0].Vocabulary, data[0].Furigana, data[0].Meaning);

      const random = Math.floor(Math.random() * 846);

      vocabulary.innerHTML = `${data[random].Vocabulary}`;
      furigana.innerHTML = `${data[random].Furigana}`;
      meaning.innerHTML = `${data[random].Meaning}`;
    })
    .catch((error) => {
      console.error('An error occurred while fetching the JSON data:', error);
    });
};

getData();

setInterval(getData, 400);

container.addEventListener('click', getData);
