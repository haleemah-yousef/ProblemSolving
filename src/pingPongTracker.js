function pingPongTracker () {
    timeSpentPlaying = 0;

    return {
        timeSpentPlaying() {
            return timeSpentPlaying;
        },
    
    
        playOneGame() {
            timeSpentPlaying+=15;
            return "Game Played";
        },
    
    
        myLevel() {
            if (timeSpentPlaying<30) 
                return "I need to improve my game";
            else if (timeSpentPlaying>=30 && timeSpentPlaying<=100)
                return "You need to improve your game";
            else if (timeSpentPlaying>=100)
                return "Wow, I have wasted a lot of time";

        }

    };

}


var myGame = pingPongTracker();
console.log(myGame.playOneGame());         // should return "Game played";
console.log(myGame.playOneGame());         // should return "Game played";
console.log(myGame.timeSpentPlaying());    // should return 30;
console.log(myGame.myLevel());             // should return "You need to improve your game"