/*
Author: Anas Nasrallah.
Purpose: Just for fun.
Date: 22.04.20
*/

/* This file represents the PlayModule module which handles the 
logic of the game */

const PlayModule = function () {

    let level = 1;
    let time = 5;
    let clicked = 0;
    let score = 0;

    const levelUp = function () {
        level++;
        time += 2;
        clicked = 0;
    }

    const reset = function () {
        level = 1;
        time = 5;
        clicked = 0;
    }

    const reduceTime = function () {
        time -= 0.01;
    }

    const addClick = function () {
        clicked++;
        score++;
    }

    const isLevelup = function(){
        return clicked === level;
    }

    const isGameOver = function(){
        return time <= 0;
    }

    const getLevel = function () {
        return level;
    }

    const getClicked = function () {
        return clicked;
    }

    const getTime = function () {
        return time;
    }

    const getScore = function () {
        return score;
    }

    return {
        levelUp,
        reset,
        reduceTime,
        addClick,
        isLevelup,
        isGameOver,
        getLevel,
        getClicked,
        getTime,
        getScore
    };
}
