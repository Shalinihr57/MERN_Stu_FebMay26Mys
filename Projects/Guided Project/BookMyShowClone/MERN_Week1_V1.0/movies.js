// movie.js
//This file stores the movie data used in the CLI app

const movies = [
    {
        id:1,
        title:"Dhurandar2",
        showtimes:[
            {time: "10:00 AM",seatsAvailable: 100},
            {time: "1:00 PM",seatsAvailable: 70},
            {time: "6:00 AM",seatsAvailable: 300},
        ]   
    },
    {
        id:2,
        title:"LoveMoktail3",
        showtimes:[
            {time: "10:00 AM",seatsAvailable: 100},
            {time: "1:00 PM",seatsAvailable: 70},
            {time: "6:00 AM",seatsAvailable: 300},
        ]   
    },
    {
        id:3,
        title:"Hayagreeva",
        showtimes:[
            {time: "10:00 AM",seatsAvailable: 100},
            {time: "1:00 PM",seatsAvailable: 70},
            {time: "6:00 AM",seatsAvailable: 300},
        ]   
    }
];
//Export the movie data so that other files can use it.
module.export = movies;