//Adding access to the node file system and yaml so that data can be stored in a yaml file
const yaml = require('js-yaml')
const fs = require('fs')

//Read the content stored in the yaml file into the "data" variable
const data = yaml.load(fs.readFileSync('./songs.yaml', 'utf-8'));

let workoutPlaylist = [];

//Helper function - gets [num] number of UNIQUE items from the supplied array
selectRand = (arr, num) => {
  let returnCount = 0;
  let newArr = [];
  while (returnCount < num) {
    let indexNum = Math.floor(Math.random()*arr.length);
    if (newArr.indexOf(arr[indexNum])===-1) {
    newArr.push(arr[indexNum]);
    returnCount++;
    }
  }
  return newArr;
};

//Gets three arrays of songs for each part of the workout playlist - warm up, main workout and cooldown
let warmupSongs = selectRand(data.warmup, 2);
let mainWorkoutSongs = selectRand(data.main, 6);
let cooldownSongs = selectRand(data.cooldown, 2);

//Assembles the final playlist by concatenating the three arrays above
workoutPlaylist = [...warmupSongs, ...mainWorkoutSongs, ...cooldownSongs];

//Display workout mix
const introText = 'Here is your random workout mix:';
workoutPlaylist.splice(0,0,introText);

workoutPlaylist.forEach(item => console.log(item));
