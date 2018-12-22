var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

global.matrix = [];
global.qanak = 75;

global.xotakerQanak = 500;
global.gishatichQanak = 150;
global.mardQanak = 50;
global.trchunQanak = 100;

function random(max) 
{
    return Math.round(Math.random() * max);
}

function getRandomNum(max) 
{
    return Math.floor(Math.random() * max);
}

for (var a = 0; a < qanak; ++a) 
{
  matrix[a] = [];

    for (var b = 0; b < qanak; ++b) 
    {
      matrix[a][b] = random(1);
    }
}

    var i = 0;

    while (i < xotakerQanak)
    {
      var x = getRandomNum(qanak);
      var y = getRandomNum(qanak);
      var r = getRandomNum(5);
        
      if(r > 1)
      {
        matrix[y][x] = 2;
      }
        
      else
      {
        matrix[y][x] = 2.5;
      }

      i++;
    }

    var i2 = 0;
    while (i2 < gishatichQanak)
    {
      var x = getRandomNum(qanak);
      var y = getRandomNum(qanak);
        var r = getRandomNum(5);
        
        if (matrix[y][x] != 2 && matrix[y][x] != 2.5) 
        {
          if(r > 1)
          {
            matrix[y][x] = 3;
          }
          
          else
          {
            matrix[y][x] = 3.5;
          }
        }  

        i2++;
      }

    var i3 = 0;

    while (i3 < mardQanak)
    {
      var x = getRandomNum(qanak);
      var y = getRandomNum(qanak);
        
      if (matrix[y][x] != 2 && matrix [y][x] != 3 && matrix[y][x] != 2.5 && matrix [y][x] != 3.5) 
      {
        var r = getRandomNum(5);
        
        if(r >= 1)
        {
          matrix[y][x] = 4;              
        }
        
        else
        {
          matrix[y][x] = 4.5;               
        }

        i3++;
      }
    }
    var i4 = 0;
    while (i4 < trchunQanak)
    {
      var x = getRandomNum(qanak);
      var y = getRandomNum(qanak);
        var r = getRandomNum(5);
        
        if (matrix[y][x] != 5 && matrix[y][x] != 5.5) 
        {
          if(r > 1)
          {
            matrix[y][x] = 5;
          }
          
          else
          {
            matrix[y][x] = 5.5;
          }
        }  

        i4++;
      }
      


global.Characters = require("./public/class.js");
global.Grass = require("./public/Grass.js");
global.Xotaker = require("./public/Xotaker.js");
global.Gishatich = require("./public/Gishatich.js");
global.Mard = require("./public/Mard.js");
global.Virus = require("./public/Virus.js");
global.Trchun = require("./public/Trchun.js");

app.use(express.static("."));
app.get('/', function (req, res) {
res.redirect('index.html');
});
server.listen(3000);
console.log("Server is listening 3000");

global.grassArr = [];
global.xotakerArr = [];
global.gishatichArr = [];
global.yntaniKendaniArr = [];
global.mardArr = [];
global.virusArr = [];
global.trchunArr = [];

global.norXoter = 0;
global.norXotakerner = 0;
global.norGishatichner = 0;
global.norMardik = 0;
global.norVirusner = 0;
global.norTrchunner = 0;

global.hivandXoter = 0;
global.hivandXotakerner = 0;
global.hivandGishatichner = 0;
global.hivandMardik = 0;
global.hivandTrchunner = 0;

for (var y = 0; y < matrix.length; ++y) 
{
    for (var x = 0; x < matrix[y].length; ++x) 
    {
        if (matrix[y][x] == 1) 
        {
            var xot = new Grass(x,y);
            grassArr.push(xot);
        }

        if (matrix[y][x] == 2) 
        {
            var xotaker = new Xotaker(x,y);
            xotakerArr.push(xotaker);
            xotaker.ser = 1;
        }

        if (matrix[y][x] == 2.5) 
        {
            var xotaker = new Xotaker(x,y);
            xotakerArr.push(xotaker);
            xotaker.ser = 2;
        }

        if (matrix[y][x] == 3) 
        {
            var gishatich = new Gishatich(x,y);
            gishatichArr.push(gishatich);
            gishatich.ser = 1;
        }
            
        if (matrix[y][x] == 3.5) 
        {
            var gishatich = new Gishatich(x,y);
            gishatichArr.push(gishatich);
            gishatich.ser = 2;
        }
            
        if (matrix[y][x] == 4) 
        {
            var mard = new Mard(x,y);
            mardArr.push(mard);
            mard.ser = 1;
        }

        if (matrix[y][x] == 4.5) 
        {
            var mard = new Mard(x,y);
            mardArr.push(mard);
            mard.ser = 2;
        }
        if (matrix[y][x] == 5) 
        {
            var trchun = new Trchun(x,y);
            trchunArr.push(trchun);
            trchun.ser = 1;
        }

        if (matrix[y][x] == 5.5) 
        {
            var trchun = new Trchun(x,y);
            trchunArr.push(trchun);
            trchun.ser = 2;
        }
        if (matrix[y][x] == 8) 
        {
            var trchun = new Virus(x,y);
            virusArr.push(virus);
        }
            
    }
}

global.weather = 'spring';

setInterval(function () 
{
  if (weather == 'spring') 
  {
    weather = 'summer';
  }

  else if (weather == 'summer') 
  {
    weather = 'autumn';
  }

  else if (weather == 'autumn') 
  {
    weather = 'winter';
  }

  else if (weather == 'winter') 
  {
    weather = 'spring';
  }
}, 15000)

setInterval(function () 
{
  for (var y in matrix) 
  {
      for (var x in matrix[y]) 
      {
          if (matrix[y][x] == 8) 
          {
              matrix[y][x] = 0;
          }
      }
  }
}, 20000)

setInterval(function () 
    {
        global.file = "data.json"
        
        var obj = 
        {
            'Xoteri qanak' : grassArr.length, 'Xotakernei qanak' : xotakerArr.length, 'Gishatichneri qanak' : gishatichArr.length, 'Mardik' : mardArr.length, 'Virusner' : virusArr.length,'Trchunner' : trchunArr.length,
            'Nor xoter' : norXoter,'Nor xotakerner' : norXotakerner, 'Nor gishatichner' : norGishatichner, 'Nor mardik' : norMardik, 'Nor virusner' : norVirusner,'Nor trchunner' : norTrchunner,
            'Trchunneri qanak' : trchunArr.length,'Hivand xoter' : hivandXoter,'Hivand xotakerner' : hivandXotakerner, 'Hivand gishatichner' : hivandGishatichner, 
            'Hivand mardik' : hivandMardik,'Hivand trchun' : hivandTrchunner
        }

        var myJSON = JSON.stringify(obj, null, 3);
        fs.writeFile(file, myJSON);
    }, 1000)

setInterval(function (matrix) 
{    
  for(var i in virusArr)
  {
    virusArr[i].antiVirus();
  }

  for (var i in mardArr) 
  {
    mardArr[i].timeout();
    mardArr[i].utel();
    mardArr[i].hivandutyun();
    mardArr[i].mahanal();
  }
    
  for (var i in grassArr)
  {
    grassArr[i].bazmanal();
    grassArr[i].hivandutyun();
  }
    
  for (var i in gishatichArr) 
  {
    gishatichArr[i].timeout();
    gishatichArr[i].utel();
    gishatichArr[i].hivandutyun();
    gishatichArr[i].mahanal();
  }
  for (var i in xotakerArr)
  {   
    xotakerArr[i].timeout();
    xotakerArr[i].utel();
    xotakerArr[i].hivandutyun();
    xotakerArr[i].mahanal();
  }
  for (var i in trchunArr) 
  {
    trchunArr[i].timeout();
    trchunArr[i].utel();
    trchunArr[i].hivandutyun();
    trchunArr[i].mahanal();
  }
  io.sockets.emit('send matrix', global.matrix, weather);
}, 1000)