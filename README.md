# MMessages
> Generate a random workout song mix with a combination of warmup, main workout and cooldown tracks

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Status](#status)
* [Future Possibilities](#future-possibilities)

## General info
Script creatred as part of the Full Stack Developer course at Codecademy.

Rather than store the songs in the javascript file itself, I decided to add them to a separate yaml file which the javascript file reads from. This serves to separate the content layer from the code.

## Technologies
* Node v14.16.1
* Node.js File System Module
* Javascript / ECMAScript 2020
* YAML 

## Setup
To run this project, install it locally then run the script:

`$ cd ../folder`
`$ node app.js`

You will also need to install the node filesystem (fs) and yaml (js-yaml) to read the song data.

## Status
Project is complete

## Future Possibilities
This script is a potential starting point for a more fully-featured application. A couple ideas:

The yaml file could be extended to enrich the song list object to include additional metadata such as song length, etc. This could let the user specify a workout time length and create a playlist that matches the duration.

It should also be possible to generate a playlist and use external APIs to create a list that actually plays on Spotify, Youtube Music or another service.
