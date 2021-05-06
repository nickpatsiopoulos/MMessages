//Adding access to the node file system and yaml so that data can be retrieved from a yaml file
const yaml = require('js-yaml')
const fs = require('fs')

//Read the content stored in the local songs.yaml file into a "data" object
const data = yaml.load(fs.readFileSync('./songs.yaml', 'utf-8'));

//Variable declaraiton - warmupNum, mainNum and cooldownNum sets the number of each type of songs to put in the final playlist
let workoutPlaylist = [];
const introText = ['', 'Here is your random workout mix:','================================'];
const warmupNum = 2;
const mainNum = 6;
const cooldownNum = 2;

//Helper function - creates a new array of length [num] with just UNIQUE (i.e. no duplicates) items from the supplied array
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

//Gets three arrays of songs making up each part of the workout playlist - warm up, main workout and cooldown
let warmupSongs = selectRand(data.warmup, warmupNum);
let mainWorkoutSongs = selectRand(data.main, mainNum);
let cooldownSongs = selectRand(data.cooldown, cooldownNum);

//Assembles the final playlist by concatenating the intro, the three arrays of songs and a line break at the end (for readability)
workoutPlaylist = [...introText, ...warmupSongs, ...mainWorkoutSongs, ...cooldownSongs, ...' '];

//Iterates through and displays each item in the console
workoutPlaylist.forEach(item => console.log(item));
