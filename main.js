/*
Author: Anas Nasrallah.
Purpose: Just for fun.
Date: 22.04.20
*/

/* This file represent the controller of the game, it handles 
the game by connecting the other modules */

const INFO_MSG = 'This Game was Created by Ananas' + 
                '\n You can find the full code on Github:' +
                ' Anas23Nasrallah';
const LOSS_MSG = 'You LOST!! \n Keep practicing';

const playModule = PlayModule();
const renderer = Renderer();

const playLevel = function () {
    for (let i = 0; i < playModule.getLevel(); i++) {
        renderer.renderOne();
    }
}

$('#main').on('click', '#icon', function () {
    $(this).fadeOut(700);
    playModule.addClick();
})

const checkGame = function () {
    if (!playModule.isGameOver()) {
        if (playModule.isLevelup()) {
            playModule.levelUp();
            playLevel();
        }
        return true;
    }
    return false;
}

const reset = function () {
    playModule.reset();
    renderer.reset();
}

const play = function () {
    playLevel();
    let interval = setInterval(function () {
        renderer.renderInfo(parseFloat(playModule.getTime()).toFixed(2), playModule.getLevel(),
            playModule.getLevel() - playModule.getClicked(), playModule.getScore());

        if (!checkGame()) {
            alert(LOSS_MSG);
            reset();
            clearInterval(interval);
        }
        $('#restart').on('click', function () {
            reset();
            clearInterval(interval);
        });
        playModule.reduceTime();
    }, 10);
}

$('#info').on('click', function () {
    alert(INFO_MSG)
})

reset()
$('#start').on('click', function () {
    play()
})

