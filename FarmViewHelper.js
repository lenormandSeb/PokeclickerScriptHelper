// ==UserScript==
// @name         FarmViewer.js
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Add view farm on main page, can plant and harvest every plant, and can help for mutation
// @author       Lenormand Sebastien
// @match        https://www.pokeclicker.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pokeclicker.com
// @grant        none
// ==/UserScript==

const assetTree = 'assets/images/farm/AllTreeSprout.png'
//Pecha = 2
//Oran = 6

const mu = {
  //2 GEN
  //PERSIM
  8: {
    generation: 2,
    optimize: [0, 3, 6, 9, 15, 18, 21, 24],
    berry: [2, 2, 6, 6, 2, 2, 6, 6],
    plantOrder: [6, 2],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //RAZZ
  9: {
    generation: 2,
    optimize: [0, 3, 6, 9, 15, 18, 21, 24],
    berry: [0, 0, 5, 5, 0, 0, 5, 5],
    plantOrder: [5, 0],
    plantWOModifer: ["00:00:30"],
    plantWithOneModifier: ["00:00:20"]
  },
  //BULK
  10: {
    generation: 2,
    optimize: [0, 3, 6, 9, 15, 18, 21, 24],
    berry: [1, 1, 5, 5, 1, 1, 5, 5],
    plantOrder: [5, 1],
    plantWOModifer: ["00:00:40"],
    plantWithOneModifier: ["00:00:26"]
  },
  //NANAB
  11: {
    generation: 2,
    optimize: [0, 3, 6, 9, 15, 18, 21, 24],
    berry: [2, 2, 4, 4, 2, 2, 4, 4],
    plantOrder: [4, 2],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //WEAPER
  12: {
    generation: 2,
    optimize: [0, 3, 6, 9, 15, 18, 21, 24],
    berry: [3, 3, 6, 6, 3, 3, 6, 6],
    plantOrder: [6, 3],
    plantWOModifer: ["00:01:20"],
    plantWithOneModifier: ["00:00:53"]
  },
  //PINAP
  13: {
    generation: 2,
    optimize: [0, 3, 6, 9, 15, 18, 21, 24],
    berry: [4, 4, 7, 7, 4, 4, 7, 7],
    plantOrder: [7, 4],
    plantWOModifer: ["00:02:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //FIGY
  14: {
    generation: 2,
    optimize: [1, 4, 5, 6, 8, 9, 16, 19, 20, 21, 23, 24],
    berry: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    plantOrder: [0],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //WIKI
  15: {
    generation: 2,
    optimize: [1, 4, 5, 6, 8, 9, 16, 19, 20, 21, 23, 24],
    berry: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    plantOrder: [1],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //MAGO
  16: {
    generation: 2,
    optimize: [1, 4, 5, 6, 8, 9, 16, 19, 20, 21, 23, 24],
    berry: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    plantOrder: [2],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //AGUAV
  17: {
    generation: 2,
    optimize: [1, 4, 5, 6, 8, 9, 16, 19, 20, 21, 23, 24],
    berry: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    plantOrder: [3],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //IAPAPA
  18: {
    generation: 2,
    optimize: [1, 4, 5, 6, 8, 9, 16, 19, 20, 21, 23, 24],
    berry: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    plantOrder: [4],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //LUM
  19: {
    generation: 2,
    optimize: [0, 1, 2, 3, 4, 5, 7, 9, 10, 11, 12, 13, 14, 15, 17, 19, 20, 21, 22, 23, 24],
    berry: [7, 6, 4, 6, 7, 5, 2, 5, 3, 1, 0, 1, 3, 5, 2, 5, 7, 6, 4, 6, 7],
    plantOrder: [7, 6, 5, 4, 3, 2, 1, 0],
    plantWOModifer: ["00:05:00", "00:04:00", "00:02:00", "00:01:20", "00:01:00", "00:00:40", "00:00:30"],
    plantWithOneModifier: ["00:00:40"]
  },

  //3 GEN
  //POMEG
  20: {
    generation: 3,
    optimize: [0, 3, 6, 9, 15, 18, 21, 24],
    berry: [18, 18, 16, 16, 18, 18, 16, 16],
    plantOrder: [18, 16],
    plantWOModifer: ["00:06:10"],
    plantWithOneModifier: ["00:00:40"]
  },
  //KELPSY
  21: {
    generation: 3,
    optimize: [0, 3, 6, 9, 15, 18, 21, 24],
    berry: [1, 1, 8, 8, 1, 1, 8, 8],
    plantOrder: [8, 1],
    plantWOModifer: ["00:00:40"],
    plantWithOneModifier: ["00:00:40"]
  },
  //QUALOT
  22: {
    generation: 3,
    optimize: [0, 3, 6, 9, 15, 18, 21, 24],
    berry: [13, 13, 16, 16, 13, 13, 16, 16],
    plantOrder: [16, 13],
    plantWOModifer: ["00:04:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //HONDEW
  23: {
    generation: 3,
    optimize: [1, 4, 5, 6, 8, 9, 16, 19, 20, 21, 23, 24],
    berry: [14, 14, 15, 17, 15, 17, 14, 14, 15, 17, 15, 17],
    plantOrder: [15, 14, 17],
    plantWOModifer: ["00:05:50", "00:05:50"],
    plantWithOneModifier: ["00:00:40"]
  },
  //GREPA
  24: {
    generation: 3,
    optimize: [0, 3, 6, 9, 15, 18, 21, 24],
    berry: [17, 17, 14, 14, 17, 17, 14, 14],
    plantOrder: [17, 14],
    plantWOModifer: ["00:05:50"],
    plantWithOneModifier: ["00:00:40"]
  },
  //TOMATO
  25: {
    generation: 3,
    optimize: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    berry: [9, 9, 9, 9, 9, 9, 20, 9, 9, 20, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 20, 9, 9, 20],
    plantOrder: [20, 9],
    plantWOModifer: ["00:04:10"],
    plantWithOneModifier: ["00:00:40"]
  },
  //CORNN
  26: {
    generation: 3,
    optimize: [1, 4, 5, 6, 8, 9, 16, 19, 20, 21, 23, 24],
    berry: [5, 5, 10, 15, 10, 15, 5, 5, 10, 15, 10, 15],
    plantOrder: [15, 10, 5],
    plantWOModifer: ["00:05:30", "00:04:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //MAGOST
  27: {
    generation: 3,
    optimize: [1, 4, 5, 6, 8, 9, 16, 19, 20, 21, 23, 24],
    berry: [2, 2, 12, 16, 12, 16, 2, 2, 12, 16, 12, 16],
    plantOrder: [16, 12, 2],
    plantWOModifer: ["00:04:10", "00:01:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //RABUTA
  28: {
    generation: 3,
    optimize: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    berry: [4, 4, 4, 4, 4, 4, 17, 4, 4, 17, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 17, 4, 4, 17],
    plantOrder: [17, 4],
    plantWOModifer: ["00:02:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //NOMEL
  29: {
    generation: 3,
    optimize: [6, 9, 21, 24],
    berry: [13, 13, 13, 13],
    plantOrder: [13],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //SPELON
  30: {
    generation: 3,
    optimize: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    berry: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
    plantOrder: [25],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //PAMTRE
  31: {
    generation: 3,
    optimize: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    berry: [26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26],
    plantOrder: [26],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //WATMEL
  32: {
    generation: 3,
    optimize: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    berry: [27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27],
    plantOrder: [27],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //DURIN
  33: {
    generation: 3,
    optimize: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    berry: [28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    plantOrder: [28],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //BELUE
  34: {
    generation: 3,
    optimize: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    berry: [29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29],
    plantOrder: [29],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"]
  },

  //4 GEN
  //OCCA
  35: {
    generation: 4,
    optimize: [0, 2, 4, 5, 7, 9, 15, 17, 19, 20, 22, 24],
    berry: [25, 14, 25, 30, 9, 30, 14, 25, 14, 9, 30, 9],
    plantOrder: [30, 25, 14, 9],
    plantWOModifer: ["02:24:00", "00:05:50", "00:04:10"],
    plantWithOneModifier: ["00:00:40"]
  },
  //PASSHO
  36: {
    generation: 4,
    optimize: [0, 2, 4, 5, 7, 9, 15, 17, 19, 20, 22, 24],
    berry: [6, 21, 6, 1, 43, 1, 21, 6, 21, 43, 1, 43],
    plantOrder: [43, 21, 6, 1],
    plantWOModifer: ["01:40:00", "00:05:00", "00:00:40"],
    plantWithOneModifier: ["00:00:40"]
  },
  //WACAN
  37: {
    generation: 4,
    optimize: [0, 2, 4, 5, 7, 9, 15, 17, 19, 20, 22, 24],
    berry: [18, 13, 18, 22, 24, 22, 13, 18, 13, 24, 22, 24],
    plantOrder: [24, 22, 18, 13],
    plantWOModifer: ["01:20:00", "00:06:20", "00:04:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //RINDO
  38: {
    generation: 4,
    optimize: [0, 3, 6, 9, 15, 18, 21, 24],
    berry: [0, 0, 17, 17, 0, 0, 17, 17],
    plantOrder: [17, 0],//17, 0
    plantWOModifer: ["00:00:30"],
    plantWithOneModifier: ["00:00:40"]
  },
  //YACHE
  39: {
    generation: 4,
    optimize: [0, 2, 4, 10, 12, 14, 20, 22, 24],
    berry: [36, 36, 36, 36, 36, 36, 36, 36, 36],
    plantOrder: [36],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //CHOPLE
  40: {
    generation: 4,
    optimize: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    berry: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    plantOrder: [30],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"],
    oakItem: 6
  },
  //KEBIA
  41: {
    generation: 4,
    optimize: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    berry: [31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31],
    plantOrder: [31],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"],
    oakItem: 2
  },
  //SHUCA
  42: {
    generation: 4,
    optimize: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    berry: [32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32],
    plantOrder: [32],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"],
    oakItem: 9
  },
  //COBA
  43: {
    generation: 4,
    optimize: [0, 3, 6, 9, 15, 18, 21, 24],
    berry: [15, 15, 17, 17, 15, 15, 17, 17],
    plantOrder: [15, 17],
    plantWOModifer: ["00:05:50"],
    plantWithOneModifier: ["00:00:40"]
  },
  //PAYAPA
  44: {
    generation: 4,
    optimize: [0, 2, 4, 5, 7, 9, 15, 17, 19, 20, 22, 24],
    berry: [15, 27, 15, 10, 31, 10, 27, 15, 27, 31, 10, 31],
    plantOrder: [31, 27, 15, 10],//31Pamtre 27Corn 15wiki 10bulk
    plantWOModifer: ["02:30:00", "00:06:00", "00:05:30"],
    plantWithOneModifier: ["00:00:40"]
  },
  //TANGA
  45: {
    generation: 4,
    optimize: [0, 1, 2, 3, 4, 5, 7, 9, 10, 11, 12, 13, 14, 15, 17, 19, 20, 21, 22, 23, 24],
    berry: [38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38],
    plantOrder: [38],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //CHARTI
  46: {
    generation: 4,
    optimize: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    berry: [26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26],
    plantOrder: [26],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"],
    oakItem: 7
  },
  //KASIB
  47: {
    generation: 4,
    optimize: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    berry: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    plantOrder: [0],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //HABAN
  48: {
    generation: 4,
    optimize: [1, 2, 3, 4, 9, 10, 12, 14, 15, 19, 21, 22, 23],
    berry: [38, 37, 36, 36, 38, 37, 35, 37, 38, 36, 36, 37, 38],
    plantOrder: [38, 35, 36, 37], //38 Rindo 35Occa 36Pasho 37Wacan
    plantWOModifer: ["06:06:00", "06:00:00", "00:30:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //COLBUR
  49: {
    generation: 4,
    optimize: [1, 4, 5, 6, 8, 9, 16, 19, 20, 21, 23, 24],
    berry: [28, 28, 47, 44, 47, 44, 28, 28, 47, 44, 47, 44],
    plantOrder: [44, 28, 47], //44 PAPA 28RABU 47Kasib
    plantWOModifer: ["03:24:00", "00:05:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //BABIRI
  50: {
    generation: 4,
    optimize: [0, 1, 2, 3, 4, 5, 7, 9, 10, 11, 12, 13, 14, 15, 17, 19, 20, 21, 22, 23, 24],
    berry: [42, 42, 42, 42, 42, 46, 42, 46, 46, 46, 46, 46, 46, 46, 42, 46, 42, 42, 42, 42, 42],
    plantOrder: [42, 46],// 42Shuca 46Chartie
    plantWOModifer: ["10:30:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //CHILAN
  51: {
    generation: 4,
    optimize: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    berry: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
    plantOrder: [40],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //ROSELI
  52: {
    generation: 4,
    optimize: [0, 2, 4, 5, 7, 9, 15, 17, 19, 20, 22, 24],
    berry: [16, 27, 16, 11, 32, 11, 27, 16, 27, 32, 11, 32],
    plantOrder: [32, 27, 16, 11],
    plantWOModifer: ["04:00:00", "00:06:10", "00:04:10"],
    plantWithOneModifier: ["00:00:40"]
  },

  //5 GEN
  //MICLE
  53: {
    generation: 5,
    optimize: [0, 1, 2, 3, 4, 5, 7, 9, 10, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    berry: [31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31],
    plantOrder: [31],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //CUSTAP
  54: {
    generation: 5,
    optimize: [0, 1, 2, 3, 4, 5, 7, 9, 10, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    berry: [32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32],
    plantOrder: [32],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //JABOCA
  55: {
    generation: 5,
    optimize: [0, 1, 2, 3, 4, 5, 7, 9, 10, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    berry: [33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33],
    plantOrder: [33],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //ROWAP
  56: {
    generation: 5,
    optimize: [0, 1, 2, 3, 4, 5, 7, 9, 10, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    berry: [34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34],
    plantOrder: [34],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //KEE
  57: {
    generation: 5,
    optimize: [0, 3, 6, 9, 15, 18, 21, 24],
    berry: [59, 59, 60, 60, 59, 59, 60, 60],
    plantOrder: [59, 60],//59 LIE 60 GAN
    plantWOModifer: ["47:59:59"],
    plantWithOneModifier: ["00:00:40"]
  },
  //MARANGA
  58: {
    generation: 5,
    optimize: [0, 3, 6, 9, 15, 18, 21, 24],
    berry: [61, 61, 62, 62, 61, 61, 62, 62],
    plantOrder: [61, 62],
    plantWOModifer: ["24:00:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //LIECHI
  59: {
    generation: 5,
    optimize: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    berry: [36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36],
    plantOrder: [36],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //GANLON
  60: {
    generation: 5,
    optimize: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    berry: [42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42],
    plantOrder: [42],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //SALAC
  61: {
    generation: 5,
    optimize: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    berry: [43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43],
    plantOrder: [43],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //PETAYA
  62: {
    generation: 5,
    optimize: [0, 2, 4, 5, 9, 10, 11, 12, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24],
    berry: [0, 2, 4, 5, 9, 10, 11, 12, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24],
    plantOrder: [48, 50, 47, 41, 37, 45, 51, 43, 36, 35, 52, 49, 38, 44, 40, 46, 42, 39],
    plantWOModifer: [
      "23:59:59",
      "10:30:50",
      "10:27:30",
      "09:52:30",
      "09:27:10",
      "09:14:10",
      "06:54:10",
      "06:34:10",
      "06:30:10",
      "05:54:10",
      "05:34:10",
      "05:14:10",
      "04:14:10",
      "03:54:10",
      "03:34:10",
      "03:14:10",
      "02:40:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //APICOT
  63: {
    generation: 5,
    optimize: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    berry: [51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51],
    plantOrder: [51],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //LANSAT
  64: {
    generation: 5,
    optimize: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    berry: [52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52],
    plantOrder: [52],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //STARF
  65: {
    generation: 5,
    optimize: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    berry: [52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52],
    plantOrder: [52],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"]
  },
  //ENIGMA TODO
  66: {
    generation: 5,
    optimize: [0, 3, 6, 9, 15, 18, 21, 24],
    berry: [2, 2, 6, 6, 2, 2, 6, 6],
    plantOrder: [6, 2],
    plantWOModifer: ["00:01:00"],
    plantWithOneModifier: ["00:00:40"]
  },
}

const rows = [...Array(2)].map(createRow)
const buttons = [...Array(3)].map(createButton)

function createRow() {
  var row = document.createElement('div');
  row.classList.add('row');

  return row;
}

function createButton() {
  var btn = document.createElement('button')
  btn.classList.add('btn');
  btn.style.width = "100%";

  return btn;
}

function createFarmView() {

  //Create DIV card
  var newDiv = document.createElement("div");
  newDiv.classList.add("card", "mb-3", "sortable", "border-secondary", "sortable-chosen");

  //Create DIV Card-HEADER
  var headerDivCard = document.createElement("div");
  headerDivCard.classList.add("card-header", "p-0");
  [{ 'id': 'farm-header' }, { 'data-toggle': 'collapse' }, { 'href': '#FarmBodyDiv' }].forEach(el => { headerDivCard.setAttribute(Object.keys(el)[0], Object.values(el)[0]) });
  var headerTitle = document.createElement('span')
  headerTitle.appendChild(document.createTextNode('Farm View 2'));
  headerDivCard.appendChild(headerTitle)

  //Create Div Card-Body
  var bodyDivCard = document.createElement('div');
  bodyDivCard.classList.add("card-body", 'collapse', 'show');
  bodyDivCard.setAttribute('id', 'FarmBodyDiv');

  //Create Div Card-Footer
  var footerDiv = document.createElement("div");
  footerDiv.classList.add("card-footer");

  [headerDivCard, bodyDivCard, footerDiv].forEach(ele => newDiv.appendChild(ele))

  //Create Select
  var select = document.createElement("select");
  select.setAttribute('id', 'farmBerrySelect');
  select.classList.add('form-control');
  select.style.width = "100%";

  var mutationSelect = document.createElement("select");
  mutationSelect.setAttribute('id', 'mutationBerrySelect');
  mutationSelect.classList.add('form-control');
  mutationSelect.style.width = "100%";

  //insert select in div with rows
  [select, mutationSelect].forEach((ele, index) => rows[index].appendChild(ele));

  //Add Option in select
  listBerry(select);
  mutationList(mutationSelect);

  //create Button 3
  [
    ['success', 'Plant All', 'PlantAllButton', plantAllFunction],
    ['danger', 'Harvest All', 'harvestAllButton', harvestAllFunction],
    ['info', 'Mutation attempt', 'mutationAttempt', mutationAttemptFunction]
  ].forEach((ele, index) => {
    buttons[index].classList.add(`btn-${ele[0]}`)
    buttons[index].appendChild(document.createTextNode(ele[1]))
    buttons[index].setAttribute('id', ele[2])
    buttons[index].addEventListener('click', ele[3])
  })

  buttons.slice(0, 2).forEach(btn => rows[0].appendChild(btn));

  rows[rows.length - 1].appendChild(buttons[2])

  rows[rows.length - 1].setAttribute('id', 'mutationRow');

  rows.forEach(row => footerDiv.appendChild(row));

  //View of plots
  plotlistCreate(bodyDivCard)

  document.getElementById('left-column').append(newDiv)

  footerDiv.insertBefore(document.createElement('hr'), document.getElementById('mutationRow'))

  FarmView()
}

function plotlistCreate(body) {
   var plotlis = document.createElement("div")
  plotlis.classList.add("row")

  var count = 0;
  for (var i = 0; i < 5; i++) {
    var plotColonne = document.createElement("div")
    plotColonne.classList.add("row")

    plotlis.appendChild(plotColonne)
    for (var j = 0; j < 5; j++) {
      var plotContent = document.createElement("div")
      plotContent.classList.add("plot-content", "col")
      plotContent.addEventListener('mouseover', tooltipFarm);
      [{ 'data-placement': 'bottom' }, { 'title': '' }, { 'data-toggle': 'tooltip' }].forEach(ele => plotContent.setAttribute(Object.keys(ele)[0], Object.values(ele)[0]));

      var plotImage = document.createElement("div")
      plotImage.classList.add("plotImage")

      var image = document.createElement("img")
      image.classList.add('img-fluid')
      image.setAttribute('id', 'imageFarm-' + count)
      image.setAttribute('src', "assets/images/farm/soil.png")

      plotImage.appendChild(image)

      var plotButton = document.createElement("div")
      plotButton.classList.add("plotButton")

      plotImage.appendChild(plotButton)
      plotContent.appendChild(plotImage)

      plotColonne.appendChild(plotContent)
      count++
    }
  }
  body.appendChild(plotlis)
}

function tooltipFarm(event) {
    var id = event.srcElement.getAttribute('id');
    if(id != null) {
        var te = id.split('-')
        var plot = App.game.farming.plotList[te[1]];
        if(!plot.isEmpty())
        {
            event.relatedTarget.setAttribute('title', BerryType[plot.berry] + ' : ' + plot.formattedTimeLeft() + (plot.stage() === 4 ? ' death' : ' ripe'));
        } else {
            event.relatedTarget.setAttribute('title', '');
        }
    }
}

function mutationList(select) {
  for (var k = 2; k < 6; k++) {
    var optiongroup = document.createElement('optgroup');
    optiongroup.setAttribute('label', 'Berry generation ' + k)
    App.game.farming.mutations.forEach(berryMutation => {
      if (berryMutation.unlocked) {
        if (mu[berryMutation.mutatedBerry].generation === k) {
          var option = document.createElement('option')
          if (berryMutation.mutatedBerry > 65) { option.setAttribute('disabled', true) }
          option.setAttribute('mutation', berryMutation.mutatedBerry)
          var t = document.createTextNode(`${BerryType[berryMutation.mutatedBerry]} (${(berryMutation._mutationChance * 100).toFixed(2)} %)`)
          option.appendChild(t)
          optiongroup.appendChild(option)
        }
      }
    })
      select.appendChild(optiongroup)
  }
}

function listBerry(select) {
  FarmController.getUnlockedBerryList().forEach(ber => {
      if (App.game.farming.unlockedBerries[ber]()) {
        var option = document.createElement("option")
        option.setAttribute('berryNumber', ber)
        var t = document.createTextNode(BerryType[ber] + " (" + App.game.farming.berryList[ber]().toLocaleString('en-US') + ")")

        option.appendChild(t)

        select.appendChild(option)
      }
    })
}

function FarmView() {
  var time = setInterval(function () {
    var plotList = App.game.farming.plotList
    plotList.forEach((plot, index) => {
      let replace = document.getElementById('imageFarm-' + index)
      if (!plot.isEmpty()) {
        switch (plot.stage()) {
          case 0:
            replace.setAttribute('src', "assets/images/farm/AllTreeSeed.png");
            break;
          case 1:
            replace.setAttribute('src', assetTree);
            break;
          case 2:
            replace.setAttribute('src', "assets/images/farm/" + BerryType[plot.berry] + "TreeTaller.png");
            break;
          case 3:
            replace.setAttribute('src', "assets/images/farm/" + BerryType[plot.berry] + "TreeBloom.png");
            break;
          case 4:
            replace.setAttribute('src', "assets/images/farm/" + BerryType[plot.berry] + "TreeBerry.png");
            break;
        }
        replace.style.width = "100%"
      } else {
        replace.setAttribute('src', "assets/images/farm/soil.png")
      }
    })
    updateBerryCount()
  }, 5000)
}

function updateBerryCount() {
  FarmController.getUnlockedBerryList().forEach((ber, index) => {
    if (App.game.farming.unlockedBerries[ber]() && document.getElementById("farmBerrySelect").childNodes[index] != undefined) {
      document.getElementById("farmBerrySelect").childNodes[index].innerHTML = BerryType[ber] + " (" + App.game.farming.berryList[ber]().toLocaleString('en-US') + ")"
    }
  })
}

function plantAllFunction() {
  App.game.farming.plantAll(document.getElementById('farmBerrySelect').selectedOptions[0].getAttribute('berryNumber'))
}

function harvestAllFunction() {
  App.game.farming.harvestAll()
}

function mutationAttemptFunction() {
  var d = document.getElementById('mutationBerrySelect').selectedOptions[0].getAttribute('mutation')
  var reqBerry = App.game.farming.mutations[d].berryReqs
  if (reqBerry != undefined) {
    reqBerry.forEach(b => {
      if (!App.game.farming.unlockedBerries[b]()) {
        return Notifier.notify({ 'title': 'Farm Veiw notification', "message": `Berry ${BerryType[b]} is missing`, 'type': NotificationConstants.NotificationOption.danger })
      }
    })
  }

  if (mu[d].oakItem != undefined) {
    if (!App.game.oakItems.itemList[mu[d].oakItem].isActive) {
      return Notifier.notify({ 'title': 'Farm Veiw notification', "message": `${App.game.oakItems.itemList[mu[d].oakItem].displayName} is missing`, 'type': NotificationConstants.NotificationOption.danger })
    }
  }

  var lastPlant
  mu[d].plantOrder.forEach((berry, index) => {
    if (index === 0) {
      mu[d].berry.forEach((berryToPlant, i) => {
        if (berryToPlant === berry) {
          App.game.farming.plant(mu[d].optimize[i],
            berryToPlant);
          lastPlant = mu[d].optimize[i];
        }
      })
    } else {
      setInterval(function () {
        if (App.game.farming.plotList[lastPlant].formattedTimeLeft().includes(mu[d].plantWOModifer[index - 1])) {
          mu[d].berry.forEach((berryToPlant, i) => {
            if (berryToPlant === berry) {
              App.game.farming.plant(mu[d].optimize[i],
                berryToPlant);
            }
          })
        }
      }, 1000)
    }
  })

  var mutationInProgress = document.createElement('span')
  mutationInProgress.classList.add('badge', 'badge-info', 'text-center')
  mutationInProgress.style.width = "100%"

  var content = document.createTextNode(`Mutation in progress : ${BerryType[d]}`)

  mutationInProgress.appendChild(content)

  document.getElementById('farm-header').replaceWith(mutationInProgress)
}

function waitForLoad() {
  var timer = setInterval(function () {
    if (!document.getElementById("game").classList.contains("loading")) {
      // Check if the game window has loaded
      clearInterval(timer);
      createFarmView();
    }
  }, 200);
}

waitForLoad();
