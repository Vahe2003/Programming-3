var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

global.matrix = [];
global.qanak = 50;

global.xotakerQanak = 200;
global.gishatichQanak = 150;
global.mardQanak = 30;
global.treeQanak = 300;
global.mutantQanak = 10;
global.soliderQanak = 30;

function random(max) {
  return Math.round(Math.random() * max);
}

function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}

for (var a = 0; a < qanak; ++a) {
  matrix[a] = [];

  for (var b = 0; b < qanak; ++b) {
    matrix[a][b] = random(1);
  }
}

var i = 0;

while (i < xotakerQanak) {
  var x = getRandomNum(qanak);
  var y = getRandomNum(qanak);
  var r = getRandomNum(5);

  if (r > 1) {
    matrix[y][x] = 2;
  }

  else {
    matrix[y][x] = 2.5;
  }

  i++;
}

var i2 = 0;
while (i2 < gishatichQanak) {
  var x = getRandomNum(qanak);
  var y = getRandomNum(qanak);
  var r = getRandomNum(5);

  if (matrix[y][x] != 2 && matrix[y][x] != 2.5) {
    if (r > 1) {
      matrix[y][x] = 3;
    }

    else {
      matrix[y][x] = 3.5;
    }
  }

  i2++;
}

var i3 = 0;

while (i3 < mardQanak) {
  var x = getRandomNum(qanak);
  var y = getRandomNum(qanak);

  if (matrix[y][x] != 2 && matrix[y][x] != 3 && matrix[y][x] != 2.5 && matrix[y][x] != 3.5) {
    var r = getRandomNum(5);

    if (r >= 1) {
      matrix[y][x] = 4;
    }

    else {
      matrix[y][x] = 4.5;
    }

    i3++;
  }
}

var i4 = 0;

while (i4 < treeQanak) {
  var x = getRandomNum(qanak);
  var y = getRandomNum(qanak);

  if (matrix[y][x] != 2 && matrix[y][x] != 3 && matrix[y][x] != 4 && matrix[y][x] != 2.5 && matrix[y][x] != 3.5 && matrix[y][x] != 4.5) {
    matrix[y][x] = 5;

    i4++;
  }
}

var i5 = 0;

while (i5 < mutantQanak) {
  var x = getRandomNum(qanak);
  var y = getRandomNum(qanak);

  if (matrix[y][x] != 2 && matrix[y][x] != 3 && matrix[y][x] != 4 && matrix[y][x] != 2.5 && matrix[y][x] != 3.5 && matrix[y][x] != 4.5 && matrix[y][x] != 5) {
    matrix[y][x] = 9;
    i5++;
  }
}

var i6 = 0;

while (i6 < soliderQanak) {
  var x = getRandomNum(qanak);
  var y = getRandomNum(qanak);

  if (matrix[y][x] != 2 && matrix[y][x] != 3 && matrix[y][x] != 4 && matrix[y][x] != 2.5 && matrix[y][x] != 3.5 && matrix[y][x] != 4.5 && matrix[y][x] != 5 && matrix[y][x] != 9) {
    matrix[y][x] = 11;
    i6++;
  }
}

global.Class10 = require("./public/class.js");
global.Grass = require("./public/classGrass.js");
global.Tree = require("./public/classTree.js");
global.Xotaker = require("./public/classXotaker.js");
global.Gishatich = require("./public/classGishatich.js");
global.Mard = require("./public/classMard.js");
global.Mutant = require("./public/classMutant.js");
global.Solider = require("./public/classSolider.js");
global.Virus = require("./public/classVirus.js");

app.use(express.static("."));
app.get('/', function (req, res) {
  res.redirect('index.html');
});
server.listen(3000);
console.log("Server is listening 3000")

global.grassArr = [];
global.xotakerArr = [];
global.gishatichArr = [];
global.yntaniKendaniArr = [];
global.mardArr = [];
global.soliderArr = [];
global.mutantArr = [];
global.virusArr = [];
global.treeArr = [];

global.norXoter = 0;
global.norTsarer = 0;
global.norXotakerner = 0;
global.norGishatichner = 0;
global.norMardik = 0;
global.norMutantner = 0;
global.norZinvorner = 0;
global.norVirusner = 0;

global.hivandXoter = 0;
global.hivandTsarer = 0;
global.hivandXotakerner = 0;
global.hivandGishatichner = 0;
global.hivandMardik = 0;
global.hivandZinvorner = 0;

for (var y = 0; y < matrix.length; ++y) {
  for (var x = 0; x < matrix[y].length; ++x) {
    if (matrix[y][x] == 1) {
      var xot = new Grass(x, y);
      grassArr.push(xot);
    }

    if (matrix[y][x] == 2) {
      var xotaker = new Xotaker(x, y);
      xotakerArr.push(xotaker);
      xotaker.ser = 1;
    }

    if (matrix[y][x] == 2.5) {
      var xotaker = new Xotaker(x, y);
      xotakerArr.push(xotaker);
      xotaker.ser = 2;
    }

    if (matrix[y][x] == 3) {
      var gishatich = new Gishatich(x, y);
      gishatichArr.push(gishatich);
      gishatich.ser = 1;
    }

    if (matrix[y][x] == 3.5) {
      var gishatich = new Gishatich(x, y);
      gishatichArr.push(gishatich);
      gishatich.ser = 2;
    }

    if (matrix[y][x] == 4) {
      var mard = new Mard(x, y);
      mardArr.push(mard);
      mard.ser = 1;
    }

    if (matrix[y][x] == 4.5) {
      var mard = new Mard(x, y);
      mardArr.push(mard);
      mard.ser = 2;
    }

    if (matrix[y][x] == 5) {
      var tree = new Tree(x, y);
      treeArr.push(tree);
    }

    if (matrix[y][x] == 9) {
      var mutant = new Mutant(x, y);
      mutantArr.push(mutant);
    }

    if (matrix[y][x] == 11) {
      var solider = new Solider(x, y);
      soliderArr.push(solider);
    }
  }
}

global.weather = 'spring';

setInterval(function () {
  if (weather == 'spring') {
    weather = 'summer';
  }

  else if (weather == 'summer') {
    weather = 'autumn';
  }

  else if (weather == 'autumn') {
    weather = 'winter';
  }

  else if (weather == 'winter') {
    weather = 'spring';
  }
}, 60000)

setInterval(function () {
  for (var y in matrix) {
    for (var x in matrix[y]) {
      if (matrix[y][x] == 8) {
        matrix[y][x] = 0;
      }
    }
  }
}, 20000)

setInterval(function () {
  global.file = "data.json"
  global.text = "Xoteri qanak" + '-' + grassArr.length + "\nXotakernei qanak" + '-' + xotakerArr.length + "\nGishatichneri qanak"
    + '-' + gishatichArr.length + "\nMardik" + '-' + mardArr.length + "\nMutantner" + '-' + mutantArr.length
    + "\nZinvorner" + '-' + soliderArr.length + "\nVirusner" + '-' + virusArr.length + "\nTsarer" + '-' + treeArr.length

    + "\n\nNor xoter" + '-' + norXoter + "\nNor tsarer" + '-' + norTsarer + "\nNor xotakerner" + '-' + norXotakerner
    + "\nNor gishatichner" + '-' + norGishatichner + "\nNor mardik" + '-' + norMardik + "\nNor mutantner" + '-' + norMutantner
    + "\nNor zinvorner" + '-' + norZinvorner + "\nNor virusner" + '-' + norVirusner

    + "\n\nHivand xoter" + '-' + hivandXoter + "\nHivand tsarer" + '-' + hivandTsarer + "\nHivand xotakerner" + '-' + hivandXotakerner
    + "\nHivand gishatichner" + '-' + hivandGishatichner + "\nHivand mardik" + '-' + hivandMardik
    + "\nHivand zinvorner" + '-' + hivandZinvorner

  fs.writeFileSync(file, text);
}, 1000)

setInterval(function (matrix) {
  for (var i in soliderArr) {
    soliderArr[i].timeout();
    soliderArr[i].healthPlus();
    soliderArr[i].utel();
    soliderArr[i].hivandutyun();
    soliderArr[i].mahanal();
  }

  for (var i in mutantArr) {
    mutantArr[i].timeout();
    mutantArr[i].healthPlus();
    mutantArr[i].utel();
  }

  for (var i in virusArr) {
    virusArr[i].antiVirus();
  }

  for (var i in mardArr) {
    mardArr[i].timeout();
    mardArr[i].utel();
    mardArr[i].hivandutyun();
    mardArr[i].mahanal();
  }

  for (var i in grassArr) {
    grassArr[i].bazmanal();
    grassArr[i].hivandutyun();
  }

  for (var i in gishatichArr) {
    gishatichArr[i].timeout();
    gishatichArr[i].utel();
    gishatichArr[i].hivandutyun();
    gishatichArr[i].mahanal();
  }

  for (var i in treeArr) {
    treeArr[i].bazmanal();
    treeArr[i].hivandutyun();
  }

  for (var i in xotakerArr) {
    xotakerArr[i].timeout();
    xotakerArr[i].utel();
    xotakerArr[i].hivandutyun();
    xotakerArr[i].mahanal();
  }
  io.sockets.emit('send matrix', global.matrix, weather);
}, 1000)

