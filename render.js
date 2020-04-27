/*
Author: Anas Nasrallah.
Purpose: Just for fun.
Date: 22.04.20
*/

/* This file represents the Renderer module which handles rendering
the game to the user. */

/* Some global variables, for most they are relevant for the dimensions
of the playing box. */
const MINX = 20;
const MAXX = 670;
const MINY = 110;
const MAXY = 570;
const NONE = '-';

const Renderer = function () {

    const source = $("#head-temp").html();
    const template = Handlebars.compile(source)

    const renderOne = function () {
        let x = Math.floor(Math.random() * (MAXX - MINX)) + MINX;
        let y = Math.floor(Math.random() * (MAXY - MINY)) + MINY;
        let $icon = $('<i id = "icon" class="fas fa-atom fa-2x"></i>');
        $('#main').append($icon);
        $icon.css('top', `${y}px`)
        $icon.css('left', `${x}px`);
    }

    const renderInfo = function (time, level, togo, score) {    
        let someHTML = template({ level, time, togo, score });
        $('#header').empty();
        $("#header").append(someHTML);
    }

    const reset = function () {
        let someHTML = template({ level: NONE, time: NONE, togo: NONE, score: NONE });
        $('#header').empty();
        $("#header").append(someHTML);
        $('#main').empty();
    }

    return {
        renderOne,
        renderInfo,
        reset
    };
}