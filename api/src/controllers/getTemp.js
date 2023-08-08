import axios from "axios";
const { API_KEY } = process.env;
const URL = "https://api.thedogapi.com/v1/breeds";
const {data} = await axios.get(`${URL}?api_key=${API_KEY}`);
let results = [];
data.map((x) => {
  if(x.temperament){
  var words = x.temperament.split(", ");
  words.forEach((temp) => {
    if (!results.includes(temp)) {
      results.push(temp);
    }
  });
}})
console.log(results);
